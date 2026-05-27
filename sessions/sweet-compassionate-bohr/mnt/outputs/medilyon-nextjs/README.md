# Medilyon Healthcare — Next.js + Sanity Website

## Setup (5 minutes)

### 1. Install dependencies
```bash
npm install
```

### 2. Create a Sanity project (free)
1. Go to https://sanity.io and create a free account
2. Click "Create new project" → give it any name
3. Copy the **Project ID** from your project dashboard

### 3. Configure environment
```bash
cp .env.example .env.local
```
Edit `.env.local` and replace `your_project_id_here` with your actual Sanity project ID.

### 4. Run locally
```bash
npm run dev
```
- Website: http://localhost:3000
- CMS Studio: http://localhost:3000/studio

### 5. Add CORS origin in Sanity
Go to sanity.io/manage → your project → API → CORS Origins  
Add: `http://localhost:3000` (and your production URL when deploying)

---

## Deploy to Vercel (free hosting)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → "Add New Project" → import your repo
3. Add environment variables:  
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID  
   - `NEXT_PUBLIC_SANITY_DATASET` = production  
4. Click Deploy — done!

---

## Using the CMS

Once running, go to `/studio`. Log in with your Sanity account.

**Products** — Add/edit/delete products. Each product has:
- Name, Category, Description
- Image (drag & drop upload)
- Certifications (tags like "CE Marked", "ISO 13485")
- Featured toggle (shows on homepage)

**Partners** — Add manufacturer logos and tier (Platinum/Gold/Silver/Authorized)

**Homepage** — Edit hero headline, sub-text, and stats without touching code

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Sanity v3 (headless, free tier)
- **Hosting**: Vercel (free tier)
