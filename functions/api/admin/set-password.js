// POST /api/admin/set-password {token, password} -> {ok}
// Applique le nouveau mot de passe via le jeton de récupération Supabase.
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  const { token, password } = await request.json().catch(() => ({}));
  if (!token || !password || String(password).length < 8)
    return json({ ok: false, error: 'invalid' }, 400);

  const r = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
    method: 'PUT',
    headers: {
      apikey: env.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  });
  if (!r.ok) return json({ ok: false, error: 'update_failed', detail: await r.text() }, 400);
  return json({ ok: true });
}
