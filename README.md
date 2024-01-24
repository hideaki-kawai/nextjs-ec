## Getting Started

First, run in docker containers:

```bash
cp .example .env

docker compose up -d
```

## Create

1. Create project

```bash
npx create-next-app@latest
```

2. Add Dockerfile docker-compose.yml

3. Hot reload configuration
   next.config.js
   `webpackDevMiddleware()`

## Getting Started

```bash
cp .env.example .env
```

First, run the development server:

```bash
docker compose up -d --build
```

## When adding library

docker compose up again.

## Prisma

### generate（コンテナ立ち上げ時に実行される）

```bash
cd project-root
npx prisma generate
```

### migrate

```bash
docker compose exec -it app bash
cd project-root
npx prisma migrate dev
```

### reset

```bash
docker compose exec -it app bash
cd project-root
npx prisma migrate reset
```

### deploy

```bash
docker compose exec -it app bash
cd project-root
npx prisma migrate deploy
```
