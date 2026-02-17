Christian Church - React + Vite + Tailwind

Quick start:
1. unzip the project
2. cd church-website
3. npm install
4. npm run dev

Build:
- npm run build

Deploy to Netlify:
- Drag & drop the project folder (or use GitHub & continuous deploy). Set build command: npm run build and publish directory: dist

Deploy to Vercel (Git Auto Deploy):
1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Vercel, click `Add New -> Project` and import the repository.
3. Confirm settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Keep `vercel.json` in the repo so SPA routes rewrite to `index.html`:
   - `/donate`
   - `/blog/:slug`
   - `/services/:id`
   - `/sermons/:id`
5. Deploy. Every push to the production branch triggers a production deploy; pull requests/branches get preview deploys.

Post-deploy checks:
- Open `/`, `/donate`, `/blog/why-faith-generation-is-key`, and one valid `/services/:id` + `/sermons/:id` URL directly in browser.
- Refresh those pages and confirm no 404.
- Check browser console for missing asset errors.
