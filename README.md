# LogicNimbus website

Next.js 14 (App Router) · React 18 · TypeScript 5 · Tailwind CSS 3 · next-themes

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Production build
    npm run build
    npm start

## Deploy
Easiest: push to GitHub, import the repo at vercel.com/new, click Deploy.
Then add logicnimbus.com under Project > Settings > Domains and update DNS as shown.

## Edit content
Text lists live in lib/content.ts. Colours are CSS variables in app/globals.css.
