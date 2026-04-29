# Luminiq Frontend

Next.js website for Luminiq.

## Tech Stack

- Next.js 14 + React 18
- shadcn/ui (Radix primitives)
- JavaScript (no TypeScript)

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server (port 3004)
npm run dev
```

Open [http://localhost:3004](http://localhost:3004).

## Environment Variables

Create `.env.local` in the project root:

```
NEXT_PUBLIC_API_URL=http://localhost:8004
```

## Build

```bash
npm run build
npm run start   # production on port 3000
```

## Ports

| Environment | Port |
|-------------|------|
| Local | 3004 |
| Production | 3000 |
