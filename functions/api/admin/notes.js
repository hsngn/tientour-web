// GET  /api/admin/notes[?booking_id=...]  -> {ok, notes:[...]}
// POST /api/admin/notes  {booking_id, body} -> {ok, note}
import { adminEmail } from './_guard.js';
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });
const SR = (env) => ({ apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}` });

export async function onRequestGet({ request, env }) {
  if (!(await adminEmail(request, env))) return json({ ok: false, error: 'unauthorized' }, 401);
  const bid = new URL(request.url).searchParams.get('booking_id');
  let q = `${env.SUPABASE_URL}/rest/v1/booking_notes?select=*&order=created_at.asc`;
  if (bid) q += `&booking_id=eq.${bid}`;
  const r = await fetch(q, { headers: SR(env) });
  if (!r.ok) return json({ ok: false, error: 'db', detail: await r.text() }, 502);
  return json({ ok: true, notes: await r.json() });
}

export async function onRequestPost({ request, env }) {
  const email = await adminEmail(request, env);
  if (!email) return json({ ok: false, error: 'unauthorized' }, 401);
  const { booking_id, body } = await request.json().catch(() => ({}));
  if (!booking_id || !body || !body.trim()) return json({ ok: false, error: 'bad_request' }, 400);
  const r = await fetch(`${env.SUPABASE_URL}/rest/v1/booking_notes`, {
    method: 'POST',
    headers: { ...SR(env), 'Content-Type': 'application/json', Prefer: 'return=representation' },
    body: JSON.stringify({ booking_id, author: email, body: body.trim() }),
  });
  if (!r.ok) return json({ ok: false, error: 'db', detail: await r.text() }, 502);
  const rows = await r.json();
  return json({ ok: true, note: rows[0] });
}
