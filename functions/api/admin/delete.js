// POST /api/admin/delete (Bearer) {id} -> {ok}   — SUPER-ADMIN ONLY
import { adminEmail, isSuperAdmin } from './_guard.js';
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  const email = await adminEmail(request, env);
  if (!email) return json({ ok: false, error: 'unauthorized' }, 401);
  if (!isSuperAdmin(email, env)) return json({ ok: false, error: 'forbidden' }, 403);

  const { id } = await request.json().catch(() => ({}));
  if (!id) return json({ ok: false, error: 'bad_request' }, 400);

  const h = { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}` };
  // Supprime d'abord les notes liées (évite les orphelins si pas de cascade FK)
  await fetch(`${env.SUPABASE_URL}/rest/v1/booking_notes?booking_id=eq.${id}`, { method: 'DELETE', headers: h }).catch(() => {});
  // Puis la réservation
  const r = await fetch(`${env.SUPABASE_URL}/rest/v1/bookings?id=eq.${id}`, {
    method: 'DELETE', headers: { ...h, Prefer: 'return=minimal' },
  });
  if (!r.ok) return json({ ok: false, error: 'db', detail: await r.text() }, 502);
  return json({ ok: true });
}
