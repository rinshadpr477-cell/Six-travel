# Six Travel

A premium travel brand website — three pillars (Private Travel, Corporate Travel, Six Select), rooted in Kerala, India, with a global reach.

**Live site:** [sixtravel.vercel.app](https://sixtravel.vercel.app)

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router), TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) — design tokens centralized in `globals.css`
- **Forms:** React Hook Form + [Zod](https://zod.dev/) (validated client-side and server-side)
- **Database:** [Supabase](https://supabase.com/) (Postgres) — stores enquiry submissions
- **Email:** [Resend](https://resend.com/) — sends a notification when a new enquiry comes in
- **Hosting:** [Vercel](https://vercel.com/), connected to this repo for automatic deployment on every push to `main`

---

## Getting Started

```bash
git clone https://github.com/rinshadpr477-cell/Six-travel.git
cd Six-travel
npm install
```

Create a `.env.local` file in the project root with the following (see [Environment Variables](#environment-variables) below):
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
LEAD_NOTIFICATION_EMAIL=


Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (safe to expose client-side) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public/anon key for browser-side Supabase calls |
| `RESEND_API_KEY` | Secret key for sending email — server-only |
| `LEAD_NOTIFICATION_EMAIL` | Inbox that receives new enquiry notifications |

These must also be set in the Vercel project's **Settings → Environment Variables** for the live site — `.env.local` is never committed and is ignored via `.gitignore`.

---

## Project Structure

src/
app/
layout.tsx Root layout, fonts, page metadata
page.tsx Assembles all homepage sections in order
globals.css All design tokens (colors, fonts) — single source of truth
api/
leads/route.ts Handles enquiry form submissions (validate -> save -> email)
components/ One component per page section
content/
site.json ALL editable text and image URLs
lib/
supabase.ts Supabase client setup
validation.ts Zod schema for the enquiry form
email.ts Resend email-sending logic


---

## Editing Content

All visible text and image links live in **`src/content/site.json`** — no component code needs to change for routine content updates (new copy, new photos, etc.).

---

## Documentation

- **Coding Standards** — `CODING_STANDARDS.md`

---

## Deployment

Pushing to `main` automatically triggers a new production deployment on Vercel — no manual steps needed.

```bash
git add .
git commit -m "your message here"
git push
```

---

## Known Limitations

- Several images (hero background, destination photos) are temporary stock photography from Unsplash and should be replaced with licensed brand photography before a full public launch.
- The footer contact email is a placeholder and should be updated to a real, monitored inbox.
- No automated test suite yet — appropriate for current scope; worth adding if the project expands to include bookings or payments.


<img width="1807" height="1061" alt="image" src="https://github.com/user-attachments/assets/6a25a049-b447-4c8c-93c8-87e28efa4241" />

  


