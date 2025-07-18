# Next.js + Dockerized Fullstack App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), extended to run with **PostgreSQL**, **pgAdmin**, and **Nginx reverse proxy** via **Docker Compose**.

---

## 🐳 Running with Docker

### 📆 Prerequisites

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)

---

### 🔧 Local Development (Hot Reload)

```bash
docker compose up --build
```

* Starts:

  * Next.js in development mode (`npm run dev`)
  * PostgreSQL with persistent volume
  * pgAdmin at [http://localhost:5050](http://localhost:5050)
  * Nginx reverse proxy at [http://localhost:8080](http://localhost:8080)
* Edits to your local files will reflect instantly due to volume mounts.

---

### 🚀 Production Mode (Optimized Build)

```bash
docker compose --profile production up --build
```

* Starts:

  * Compiled Next.js app (`npm run build && npm run start`)
  * All other services as before
* No hot reload, optimized for deployment.

---

### 🧼 Stop and Clean Up

```bash
docker compose down
```

To remove all volumes (including database):

```bash
docker compose down -v
```

---

## 🌐 Accessing the App

| Service     | URL                                            | Notes                                      |
| ----------- | ---------------------------------------------- | ------------------------------------------ |
| Next.js     | [http://localhost:3000](http://localhost:3000) | Direct Next.js server                      |
| pgAdmin     | [http://localhost:5050](http://localhost:5050) | Default login: `admin@admin.com` / `admin` |
| Nginx Proxy | [http://localhost:8080](http://localhost:8080) | Reverse proxy to app                       |

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

* Edit your pages in `app/page.tsx` or other files under `app/`
* Fonts are optimized using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) and [Geist](https://vercel.com/font)

---

## 📚 Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Learn Next.js (Tutorial)](https://nextjs.org/learn)
* [Next.js GitHub](https://github.com/vercel/next.js)

---

## ⚡ Deploy on Vercel

The easiest way to deploy your Next.js app is on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), by the creators of Next.js.

Read the [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

---
