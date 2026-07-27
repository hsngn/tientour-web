// POST /api/admin/create (Bearer) -> {ok, booking}
import { adminEmail } from './_guard.js';
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });
export async function onRequestPost({ request, env }) {
  if (!(await adminEmail(request, env))) return json({ ok: false, error: 'unauthorized' }, 401);
  const b = await request.json().catch(() => ({}));
  const name = (b.customer_name || '').trim();
  if (!name || (!b.email && !b.whatsapp)) return json({ ok: false, error: 'missing_contact' }, 400);
  const row = {
    customer_name: name, email: b.email || null, whatsapp: b.whatsapp || null,
    tour_slug: b.tour_slug || null, option: b.option || 'easy_rider',
    travelers: Number(b.travelers) || 1,
    date: b.start_date || null, start_date: b.start_date || null, end_date: b.end_date || null,
    departure_city: b.departure_city || null, return_city: b.return_city || null,
    amount: b.amount != null && b.amount !== '' ? Number(b.amount) : null,
    amount_paid: b.amount_paid ? Number(b.amount_paid) : 0,
    currency: 'USD', language: b.language || 'en',
    status: b.status || 'pending', source: 'manual', message: b.message || null,
    country: b.country || null,
  };
  const r = await fetch(`${env.SUPABASE_URL}/rest/v1/bookings`, {
    method: 'POST',
    headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json', Prefer: 'return=representation' },
    body: JSON.stringify(row),
  });
  if (!r.ok) return json({ ok: false, error: 'db', detail: await r.text() }, 502);
  const rows = await r.json();
  return json({ ok: true, booking: rows[0] });
}
