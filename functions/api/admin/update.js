// POST /api/admin/update  (Bearer) {id,status} -> {ok}
import { adminEmail } from './_guard.js';
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });
export async function onRequestPost({ request, env }) {
  if (!(await adminEmail(request, env))) return json({ ok: false, error: 'unauthorized' }, 401);
  const { id, status } = await request.json().catch(() => ({}));
  const allowed = ['pending', 'confirmed', 'paid', 'cancelled'];
  if (!id || !allowed.includes(status)) return json({ ok: false, error: 'bad_request' }, 400);
  const r = await fetch(`${env.SUPABASE_URL}/rest/v1/bookings?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json', Prefer: 'return=minimal',
    },
    body: JSON.stringify({ status }),
  });
  if (!r.ok) return json({ ok: false, error: 'db', detail: await r.text() }, 502);
  return json({ ok: true });
}
