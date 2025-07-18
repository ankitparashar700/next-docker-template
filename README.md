# Next.js + Dockerized Fullstack App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), extended to run with **PostgreSQL** and **pgAdmin** via **Docker Compose**.

---

## 🐳 Running with Docker Compose

### 📆 Prerequisites

* [Docker Desktop](https://www.docker.com/products/docker-desktop) (includes Docker Compose)

---

## 1️⃣ Environment Setup

1. **Clone the repository**
2. **Create environment files** in the project root:

   - `.env.dev` for development
   - `.env.prod` for production

   Example `.env.dev`:
   ```env
   NODE_ENV=development
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=postgres
   PGADMIN_DEFAULT_EMAIL=admin@admin.com
   PGADMIN_DEFAULT_PASSWORD=admin
   ```
   Example `.env.prod`:
   ```env
   NODE_ENV=production
   POSTGRES_USER=prod_user
   POSTGRES_PASSWORD=prod_secret
   POSTGRES_DB=prod_db
   PGADMIN_DEFAULT_EMAIL=admin@admin.com
   PGADMIN_DEFAULT_PASSWORD=supersecret
   ```

---

## 2️⃣ Local Development (Hot Reload)

```bash
docker-compose -f docker-compose.dev.yml up --build
```

- Starts:
  - Next.js in development mode (`npm run dev`)
  - PostgreSQL with persistent volume
  - pgAdmin at [http://localhost:5050](http://localhost:5050)
- Edits to your local files will reflect instantly due to volume mounts.

---

## 3️⃣ Production Mode (Optimized Build)

```bash
docker-compose -f docker-compose.prod.yml up --build
```

- Starts:
  - Compiled Next.js app (`npm run build && npm run start`)
  - PostgreSQL and pgAdmin as above
- No hot reload, optimized for deployment.

---

## 4️⃣ Stop and Clean Up

```bash
docker-compose -f docker-compose.dev.yml down
# or for production
docker-compose -f docker-compose.prod.yml down
```

To remove all volumes (including database):
```bash
docker-compose -f docker-compose.dev.yml down -v
# or for production
docker-compose -f docker-compose.prod.yml down -v
```

---

## 🌐 Accessing the App

| Service     | URL                                            | Notes                                      |
| ----------- | ---------------------------------------------- | ------------------------------------------ |
| Next.js     | [http://localhost:3000](http://localhost:3000) | Direct Next.js server                      |
| pgAdmin     | [http://localhost:5050](http://localhost:5050) | Default login: `admin@admin.com` / `admin` |

---

## 🛠️ Troubleshooting

- **Credential Helper Error:**
  - If you see `docker-credential-desktop` errors, reinstall Docker Desktop to restore the credential helper.
- **Environment Variables:**
  - Ensure your `.env.dev` and `.env.prod` files exist and are correctly referenced in the compose files.
- **Port Conflicts:**
  - Make sure ports 3000 (Next.js) and 5050 (pgAdmin) are free.

---

## 🥚 Getting Started Without Docker (Optional)

If you prefer to run locally without Docker:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Development Notes

- Edit your pages in `app/page.tsx` or other files under `app/`
- Fonts are optimized using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js (Tutorial)](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

---
