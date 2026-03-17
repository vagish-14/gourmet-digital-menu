# Vercel Deployment

## Fix: push latest commits to trigger fresh build

Vercel was building old commit `788dc41`. Push the latest commits so Vercel deploys from HEAD:

```bash
git push origin main
```

This will trigger a new deployment from commit `c3b1af1` (or newer), which includes the Lovable removal and `installCommand` fix.

## Git integration check

If deployments show an old commit (e.g. `788dc41` instead of `07d9c11`):

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your project
2. Go to **Settings** → **Git**
3. Confirm repository: `github.com/vagish-14/gourmet-digital-menu`
4. Confirm **Production Branch** is `main`
5. If needed: **Disconnect** and **Reconnect** the Git integration, then redeploy

## Triggering a fresh deployment

- **Option A:** Push a new commit to `main` (triggers deploy from latest HEAD)
- **Option B:** In Deployments tab, use "Deploy" → "Deploy latest commit" (not "Redeploy" on an old failed build)

## Fallback: dashboard install override

If Vercel still builds an old commit:

1. **Settings** → **General** → **Build & Development Settings**
2. Enable **Override** for **Install Command**
3. Set to: `npm install --legacy-peer-deps`
4. Save and redeploy
