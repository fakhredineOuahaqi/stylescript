# Welcome to your AutoCoder.cc project

## Project info

- **Project ID:** PROJ_d6d2bb86_snap_20260304_033524_835
- **Version:** Updated page image
- **URL:** [AutoCoder.cc](https://www.autocoder.cc/platform/generate/3604134790?PROJECTID=PROJ_d6d2bb86)
- **Test account (no registration required):**

Please create account/password in website by yourself
---

## Getting Started

**Prerequisites:** Node.js (recommend [nvm](https://github.com/nvm-sh/nvm)) and [pnpm](https://pnpm.io/).

```bash
cd AutoCoder.cc

# Install dependencies and run post-install setup
pnpm run init

# Start the frontend dev server (port 3000)
pnpm run dev

# In another terminal: start the backend API server (port 3001)
pnpm run server
```

Then open [http://localhost:3000](http://localhost:3000). The backend API runs at [http://localhost:3001](http://localhost:3001).

**Quick Links**
- **Website** — [http://localhost:3000/](http://localhost:3000/)
- **Backend** — [http://localhost:3000/admindashboardpage](http://localhost:3000/admindashboardpage)

**Other scripts**

- `pnpm run build` — Production build
- `pnpm run start` — Start production server
- `pnpm run server` — Start backend API server (port 3001)
- `pnpm run lint` — Run ESLint

---

## How can I edit this project?

You can work on this project in several ways:

### Use AutoCoder.cc

Visit [AutoCoder.cc](https://www.autocoder.cc/platform/generate/3604134790?PROJECTID=PROJ_d6d2bb86) and use the editor. Changes are committed automatically to the connected repo.

### Use your IDE locally

Clone the repo, then from the project root:

1. Install dependencies: `pnpm run init`
2. Start frontend: `pnpm run dev` (port 3000)
3. Start backend: `pnpm run server` (port 3001) — run in a separate terminal
4. Edit files; the dev server will reload. Push changes to sync with AutoCoder.cc.

---

## Tech stack

This project is built with:

- **Next.js 16** — React framework
- **React 19** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Prisma** — Database ORM
- **shadcn/ui** — UI components (Radix UI)
- **Lucide React** — Icons

---

## Production readiness updates

The project now supports environment-driven backend connectivity and deployment-safe defaults:

- Frontend entities endpoint can be configured via:
  - `NEXT_PUBLIC_ENTITIES_ENDPOINT` (full endpoint, highest priority), or
  - `NEXT_PUBLIC_API_BASE_URL` (base URL, app appends `/api/entities`).
- Backend mount path is configurable with `BACKEND_BASE_PATH`.
- Backend CORS allowlist is configurable with `CORS_ORIGIN` (comma-separated origins).
- Backend includes a health endpoint at `/healthz`.

Use `.env.example` as the reference for all required variables.

---

## Deploy to Render (free tier)

This repo includes a `render.yaml` blueprint that defines:

- `stylescript-api` (Node web service for Express backend)
- `stylescript-web` (Static site for Next export `out/`)

### 1) Prepare external database

Render free tier does not provide free MySQL by default. You should:

- use an external MySQL provider (PlanetScale/Aiven/etc.), or
- migrate to PostgreSQL in Prisma before deployment.

Set `DATABASE_URL` for the API service.

### 2) Create services from blueprint

1. Push this repo to GitHub.
2. In Render, choose **New +** → **Blueprint**.
3. Select this repo so Render reads `render.yaml`.

### 3) Set required env vars in Render

For `stylescript-api`:

- `DATABASE_URL`
- `CORS_ORIGIN` (set to your frontend URL, e.g. `https://stylescript-web.onrender.com`)
- optionally adjust `BACKEND_BASE_PATH`

For `stylescript-web`:

- `NEXT_PUBLIC_API_BASE_URL` = `<api-public-url><BACKEND_BASE_PATH>`
  - e.g. `https://stylescript-api.onrender.com/BACKEND_PROJ_d6d2bb86_snap_20260304_033524_835`
- Cloudinary public vars if you use image upload widget:
  - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
  - `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

### 4) Validate after deploy

- API health: `https://<api-domain>/healthz`
- Frontend loads data from products/categories
- Admin add-product image upload works via Cloudinary widget

### Notes

- Current auth/session is localStorage token-based (demo style). For stricter production security, move to server-validated JWT/cookie sessions.
- If you serve frontend and backend on different domains, keep `CORS_ORIGIN` strict and explicit.
