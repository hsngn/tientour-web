// GET /api/admin/bookings  (Bearer) -> {ok, bookings:[...]}
import { adminEmail, isSuperAdmin } from './_guard.js';
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });
export async function onRequestGet({ request, env }) {
  const _email = await adminEmail(request, env);
  if (!_email) return json({ ok: false, error: 'unauthorized' }, 401);
  const r = await fetch(`${env.SUPABASE_URL}/rest/v1/bookings?select=*&order=created_at.desc`, {
    headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}` },
  });
  if (!r.ok) return json({ ok: false, error: 'db', detail: await r.text() }, 502);
  return json({ ok: true, bookings: await r.json(), canDelete: isSuperAdmin(_email, env) });
}
