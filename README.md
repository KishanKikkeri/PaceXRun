# PaceX RunClub — Next.js + Contentstack Website

## Setup Instructions

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Add your Contentstack credentials
Open `.env.local` and replace the placeholder values:

```
NEXT_PUBLIC_CS_API_KEY=paste_your_api_key_here
NEXT_PUBLIC_CS_DELIVERY_TOKEN=paste_your_delivery_token_here
NEXT_PUBLIC_CS_ENV=production
```

Where to find these in Contentstack:
- API Key → Settings → Stack → API Credentials
- Delivery Token → Settings → Tokens → Delivery Tokens
- Environment → use exactly: production

### Step 3 — Run locally
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### Step 4 — Deploy to Vercel
```bash
npm install -g vercel
vercel
```
When prompted, add these environment variables in the Vercel dashboard:
- NEXT_PUBLIC_CS_API_KEY
- NEXT_PUBLIC_CS_DELIVERY_TOKEN
- NEXT_PUBLIC_CS_ENV

## Project Structure
```
pacex-runclub/
├── pages/
│   ├── _app.js          # Global app wrapper
│   └── index.js         # Homepage (fetches all Contentstack data)
├── components/
│   ├── Navbar.js         # Fixed top navigation
│   ├── Hero.js           # Hero banner with stats
│   ├── Events.js         # Featured run events
│   ├── Gallery.js        # Photo gallery grid
│   ├── Testimonials.js   # Runner quotes
│   ├── JoinCTA.js        # Join section with WhatsApp/Instagram
│   └── Footer.js         # Footer with links
├── lib/
│   └── contentstack.js  # Contentstack SDK + fetch functions
├── styles/
│   └── globals.css      # Global styles + design tokens
├── .env.local           # Your credentials (never commit this)
└── next.config.js       # Next.js config (image domains)
```

## Content Types used
- homepage (single)
- run_event (multi)
- testimonial (multi)
- gallery_image (multi)
- navigation (single)
