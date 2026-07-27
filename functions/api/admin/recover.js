// POST /api/admin/recover {email} -> {ok}  (envoie l'e-mail de réinitialisation Supabase)
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  const { email } = await request.json().catch(() => ({}));
  if (!email) return json({ ok: false, error: 'missing' }, 400);

  // On ne révèle jamais si l'e-mail est admin ou non : réponse OK dans tous les cas.
  const allow = (env.ADMIN_EMAILS || '').toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
  if (allow.length && !allow.includes(String(email).toLowerCase())) return json({ ok: true });

  const origin = new URL(request.url).origin;
  await fetch(`${env.SUPABASE_URL}/auth/v1/recover?redirect_to=${encodeURIComponent(origin + '/admin')}`, {
    method: 'POST',
    headers: { apikey: env.SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  }).catch(() => {});

  return json({ ok: true });
}
