// Vérifie le jeton Bearer via Supabase et la liste blanche d'admins.
export async function adminEmail(request, env) {
  const token = (request.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  if (!token) return null;
  const r = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: `Bearer ${token}` },
  });
  if (!r.ok) return null;
  const u = await r.json().catch(() => ({}));
  const email = (u.email || '').toLowerCase();
  const allow = (env.ADMIN_EMAILS || '').toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
  return (allow.length === 0 || allow.includes(email)) ? email : null;
}
