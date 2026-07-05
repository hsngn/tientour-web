// GET  /api/admin/cities -> {ok, cities:[...]}
// POST /api/admin/cities {name} -> {ok, city}
import { adminEmail } from './_guard.js';
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });
const SR = (env) => ({ apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}` });

export async function onRequestGet({ request, env }) {
  if (!(await adminEmail(request, env))) return json({ ok: false, error: 'unauthorized' }, 401);
  const r = await fetch(`${env.SUPABASE_URL}/rest/v1/cities?select=*&order=name.asc`, { headers: SR(env) });
  if (!r.ok) return json({ ok: false, error: 'db', detail: await r.text() }, 502);
  return json({ ok: true, cities: await r.json() });
}

export async function onRequestPost({ request, env }) {
  if (!(await adminEmail(request, env))) return json({ ok: false, error: 'unauthorized' }, 401);
  const { name } = await request.json().catch(() => ({}));
  const clean = (name || '').trim();
  if (!clean) return json({ ok: false, error: 'bad_request' }, 400);
  const r = await fetch(`${env.SUPABASE_URL}/rest/v1/cities`, {
    method: 'POST',
    headers: { ...SR(env), 'Content-Type': 'application/json', Prefer: 'return=representation,resolution=merge-duplicates' },
    body: JSON.stringify({ name: clean }),
  });
  if (!r.ok) return json({ ok: false, error: 'db', detail: await r.text() }, 502);
  const rows = await r.json();
  return json({ ok: true, city: rows[0] || { name: clean } });
}
