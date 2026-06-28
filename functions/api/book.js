// Cloudflare Pages Function — POST /api/book
// Reçoit le formulaire, écrit dans Supabase (clé service role, côté serveur),
// puis notifie l'opérateur par e-mail (Resend). Aucune clé secrète exposée au client.
//
// Variables d'environnement à définir dans Cloudflare Pages (Settings → Variables) :
//   SUPABASE_URL                 ex: https://xxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY    (Project settings → API → service_role, SECRET)
//   RESEND_API_KEY               (resend.com → API Keys, SECRET)   [optionnel]
//   NOTIFY_EMAIL                 ton e-mail qui reçoit les demandes [optionnel]
//   FROM_EMAIL                   ex: "Tien Tour <onboarding@resend.dev>" [optionnel]

export async function onRequestPost({ request, env }) {
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });

  let b;
  try { b = await request.json(); } catch { return json({ ok: false, error: 'bad_request' }, 400); }

  const name = (b.name || '').trim();
  const email = (b.email || '').trim();
  const whatsapp = (b.whatsapp || '').trim();
  if (!name || (!email && !whatsapp)) return json({ ok: false, error: 'missing_contact' }, 400);

  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY)
    return json({ ok: false, error: 'server_not_configured' }, 500);

  const row = {
    tour_slug: b.tour_slug || null,
    option: b.option || 'easy_rider',
    travelers: Number(b.travelers) || 1,
    date: b.date || null,
    customer_name: name,
    email: email || null,
    whatsapp: whatsapp || null,
    language: b.language || 'en',
    amount: b.amount != null ? Number(b.amount) : null,
    currency: 'USD',
    status: 'pending',
    source: b.source || 'website',
    message: b.message || null,
  };

  // 1) Insert into Supabase
  const sb = await fetch(`${env.SUPABASE_URL}/rest/v1/bookings`, {
    method: 'POST',
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
  });
  if (!sb.ok) {
    const detail = await sb.text();
    return json({ ok: false, error: 'db_error', detail }, 502);
  }

  // 2) Notify operator by email (best-effort — never blocks the booking)
  if (env.RESEND_API_KEY && env.NOTIFY_EMAIL) {
    const esc = (s) => String(s || '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
    const html = `
      <h2>New booking request — Tien Tour</h2>
      <p><b>Tour:</b> ${esc(b.tour_title)} (${esc(b.days)} days)</p>
      <p><b>Option:</b> ${esc(b.option)} &nbsp; <b>Travelers:</b> ${esc(b.travelers)}</p>
      <p><b>Estimated total:</b> $${esc(b.amount)}</p>
      <p><b>Preferred date:</b> ${esc(b.date) || '—'}</p>
      <hr>
      <p><b>Name:</b> ${esc(name)}</p>
      <p><b>Email:</b> ${esc(email) || '—'}</p>
      <p><b>WhatsApp:</b> ${esc(whatsapp) || '—'}</p>
      <p><b>Message:</b> ${esc(b.message) || '—'}</p>`;
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.FROM_EMAIL || 'Tien Tour <onboarding@resend.dev>',
          to: env.NOTIFY_EMAIL,
          reply_to: email || undefined,
          subject: `New booking — ${b.tour_title || 'Ha Giang Loop'} (${b.travelers} pax)`,
          html,
        }),
      });
    } catch (_) { /* ignore email errors */ }
  }

  return json({ ok: true });
}
