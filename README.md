# Pynda Ranganadh — Minecraft-inspired portfolio

A responsive React, Vite, TypeScript, and Tailwind CSS v4 portfolio. Personal information and the resume are based on the existing portfolio repository; project illustrations are original SVG artwork, not project screenshots.

## Run locally

```powershell
cd minecraft-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Validate and build

```powershell
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Push this project to GitHub

Create an empty GitHub repository for the new portfolio, then run these commands from this folder (replace the URL with the new repository URL):

```powershell
git init
git add .
git commit -m "Create Minecraft-inspired portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/minecraft-portfolio.git
git push -u origin main
```

This folder is separate from the source portfolio repository.

## Deploy to Vercel

1. Push this folder to its own GitHub repository using the commands above.
2. In Vercel, choose **Add New → Project**, import that new repository, and keep the detected Vite settings.
3. Use `npm run build` as the build command and `dist` as the output directory (Vercel detects these automatically).
4. Select **Deploy**. No environment variables or contact backend are configured.

Alternatively, install the Vercel CLI and run `vercel` from this folder, then `vercel --prod` after reviewing the preview deployment.

## Content and contact notes

- The source portfolio confirms the name, B.Tech AI & ML student status, Sandip University, location, listed skills, two project descriptions, GitHub and LinkedIn profiles, email, phone, and a resume PDF.
- The two listed projects both link to the source portfolio repository because separate project repositories or live demos were not provided.
- The form validates its fields and opens an email draft; this site does not submit, store, or confirm delivery of messages.
- Contact details are included in the client-side bundle and are not protected from scraping.
- The page uses the supplied landscape and voxel-character artwork plus original SVG project illustrations. No Minecraft game files are included.
