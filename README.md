# Raaz Unani Dawakhana - React + Vite + Tailwind

This is a frontend-only website for Raaz Unani Dawakhana built with React (Vite) and Tailwind CSS.
It includes Home, About, Treatments, Treatment Detail, and Gallery pages.

## Quick start (local)

1. Install Node.js 18+
2. In project root run:
   ```bash
   npm install
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

## Deploy (Netlify)
1. Create a GitHub repo and push this project.
2. Sign in to Netlify and click "New site from Git".
3. Connect your GitHub repo, set build command `npm run build` and publish directory `dist`.
4. Deploy — Netlify will handle free hosting and CDN.

## Notes
- Replace images in `public/` with real photos (optimize to webp/jpg <150KB for speed).
- Replace the Google Maps embed iframe with the official one from Google Maps share -> embed for exact coordinates if desired.
