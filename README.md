# Tien Tour — Site web multilingue (Astro + Supabase)

Site de voyage **bilingue EN/FR**, statique (SEO + Core Web Vitals au top), que **tu possèdes**
et héberges **gratuitement** avec **ton propre domaine** (pas de paywall type Lovable).

## Ce qui est construit (production-ready)
- **EN (défaut) + FR** avec URLs `/en/…` et `/fr/…`, hreflang, métadonnées traduites.
- Pages : **accueil** (hero, preuve 5★, pourquoi nous, circuits, avis, « nos pilotes », FAQ, CTA),
  **liste des circuits**, **détail circuit** (itinéraire, inclus/exclus, encadré réservation, FAQ), **avis**.
- **SEO complet** : JSON-LD (TravelAgency, TouristTrip, Offer, AggregateRating, FAQPage, BreadcrumbList),
  sitemap auto, robots.txt, canonical, Open Graph, un seul H1/page.
- **Contenu piloté par fichiers** : un circuit = un fichier `src/content/tours/*.md` (EN+FR).
  Ajouter un circuit ou une langue = ajouter de la donnée, pas du code.

## Lancer / construire
```bash
npm install
npm run dev      # http://localhost:4321  (redirige vers /en/)
npm run build    # génère dist/ (statique)
```

## Déployer GRATUITEMENT avec ton domaine
- **Cloudflare Pages** ou **Vercel** : importe le repo → build `npm run build`, dossier `dist/`.
- **Domaine custom = gratuit** chez les deux (tu paies juste le nom de domaine ~10€/an).
- Mets ton domaine réel dans `astro.config.mjs` (`site:`) → alimente sitemap + canonical.

## Ajouter du contenu
- **Un circuit** : copie un fichier de `src/content/tours/`, change le frontmatter (EN+FR).
- **Une langue** : ajoute le code dans `src/i18n/ui.ts` (LANGS + dictionnaire) et les champs dans les tours.

## À remplacer avant publication
- **Photos** : les blocs marqués `[ photo: … ]` → vraies images Ha Giang (Tien Tour en a).
- **Avis** : `src/components/Reviews.astro` contient des placeholders → tes **vrais avis Google**.
- **N° de licence** internationale (footer) et **domaine**.

## Backend (phase 2 — fichier supabase_booking_schema.sql fourni)
Le site est prêt à brancher la réservation :
1. Crée un projet **Supabase** (gratuit), colle `supabase_booking_schema.sql` (tables tours,
   availability, bookings, payments, reviews, blog + RLS).
2. **Booking** : le formulaire crée une ligne `bookings` (insert public autorisé par la RLS).
3. **Stripe Checkout** : depuis une fonction serveur (Edge Function Supabase ou route API),
   crée une session Checkout → au webhook `checkout.session.completed`, passe la résa en `paid`
   et enregistre le `payment`. La **clé service role** reste **côté serveur** (jamais le client).
4. **Admin** : un petit back-office (ou directement le tableau Supabase au début) pour confirmer
   les résa, gérer prix/dispo, modérer les avis.
5. **Analytics** : ajoute Google Analytics / GTM dans `src/components/Seo.astro`.

## Roadmap (dans l'ordre)
Photos & avis réels → déploiement domaine → Supabase + formulaire booking → Stripe Checkout
→ emails de confirmation (Resend) → admin → blog/guide (table blog_posts) → 3e langue.
