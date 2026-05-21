# Portfolio Forge

Personal portfolio built with React + Vite and deployed on Vercel.

## Daily Update Checklist

1. Pull latest changes.
2. Make content/code updates.
3. Run local quality checks.
4. Push to GitHub.
5. Verify Vercel preview.
6. Promote to production (or merge to production branch).

## Quick Command Flow

```powershell
git pull origin main
npm install
npm run build
npm test
git add .
git commit -m "Update portfolio"
git push origin main
```

## Deploy Options

### Option A: Git Auto-Deploy (recommended)

If your Vercel project is connected to this repository:

1. Push to your working branch for a preview deploy.
2. Merge/push to production branch (usually `main`) for live deploy.

### Option B: Vercel CLI Deploy

Preview deploy:

```powershell
npx vercel
```

Production deploy:

```powershell
npx vercel --prod
```

## Release Safety Steps

Before production:

1. Confirm homepage loads.
2. Check language switch (EN/DE).
3. Check project links and contact links.
4. Verify mobile layout quickly.

After production:

1. Open live URL in normal and private browser window.
2. Hard refresh once (`Ctrl+F5`).
3. Re-check hero, projects, experience, and contact sections.

## Rollback (Vercel)

1. Open Vercel dashboard.
2. Go to your project -> Deployments.
3. Select last healthy deployment.
4. Click Redeploy or Promote to Production.

## Notes for this repo

- Build output: `dist`
- Vercel build command: `npx vite build`
- Vercel install command: `npm install`
