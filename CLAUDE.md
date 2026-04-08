@AGENTS.md

# Birthdayz Web (Next.js)

Next.js 15 app (App Router) + Tailwind CSS v4. Two distinct purposes:
1. **Marketing site** — landing page, waitlist signup
2. **Invite landing page** — `/invite/[code]` server-rendered page for WhatsApp invite links

## Key conventions
- All text via translation keys in `lib/i18n.ts` (EN + AF) — no hardcoded strings
- Supabase client in `lib/supabase.ts` (anon key, server-side only where possible)
- Use server components by default; add `"use client"` only when needed (forms, interactivity)
- Tailwind CSS v4 — config differs from v3, check `node_modules/next/dist/docs/` before writing styles

## Supabase
- Same project as the app: ref `frxyflrzrthmfjhiwzjn`, eu-west-1
- Anon key used for: reading invites, submitting friend birthday via invite
- RLS policies allow anon to: read invites (any), update pending invite to completed, set friend birthday via invite code

## Key routes
- `/` — Marketing landing page (hero, features, pricing, referral, roadmap, waitlist CTA)
- `/invite/[code]` — Server-rendered invite page; fetches invite + sender name, shows birthday form
- `POST /api/invite/submit` — Validates invite code, updates invite status to 'completed', sets birthday on friend record

## Key files
- `lib/supabase.ts` — Supabase client
- `components/invite-form.tsx` — Client component: date picker, submit, success state with App Store/Google Play links
- `app/invite/[code]/page.tsx` — Server page with OG metadata (language-aware for WhatsApp previews)
- `app/api/invite/submit/route.ts` — API route for birthday submission

## Email / waitlist
- Provider: Resend
- Sending address: noreply@updates.birthdayz.app (domain verified)
- Waitlist signups go to Resend Audiences + trigger welcome email

## Deployment
- Not yet deployed — target: Vercel + birthdayz.app domain
