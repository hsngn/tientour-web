// POST /api/admin/login  {email,password} -> {ok, access_token}
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });
export async function onRequestPost({ request, env }) {
  const { email, password } = await request.json().catch(() => ({}));
  if (!email || !password) return json({ ok: false, error: 'missing' }, 400);
  const allow = (env.ADMIN_EMAILS || '').toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
  if (allow.length && !allow.includes(String(email).toLowerCase())) return json({ ok: false, error: 'not_admin' }, 403);
  const r = await fetch(`${env.SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: { apikey: env.SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) return json({ ok: false, error: 'invalid_login' }, 401);
  return json({ ok: true, access_token: data.access_token });
}
