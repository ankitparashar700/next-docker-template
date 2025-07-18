import fs from "fs";

function createDockerfile() {
  const content = `# next-app/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
`;

  fs.writeFileSync("Dockerfile", content);
  console.log("✅ Dockerfile created.");
}

function createDockerCompose() {
  const content = `version: '3.8'

services:
  web:
    container_name: nextjs_app
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    command: npm run dev

  db:
    image: postgres:16
    container_name: postgres_db
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "5050:80"
    volumes:
      - pgadmin_data:/var/lib/pgadmin

volumes:
  pgdata:
  pgadmin_data:
`;

  fs.writeFileSync("docker-compose.yml", content);
  console.log("✅ docker-compose.yml created.");
}

function createDockerignore() {
  const content = `node_modules
.next
npm-debug.log
.env
.DS_Store
`;

  fs.writeFileSync(".dockerignore", content);
  console.log("✅ .dockerignore created.");
}

function generateAll() {
  createDockerfile();
  createDockerCompose();
  createDockerignore();
}

generateAll();

console.log("✅ All files created.");