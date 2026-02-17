# New Preppathway (Payload + Next.js)

This repository is a Payload CMS website based on the website starter, customized to match PrepPathway.

## Prerequisites

- Node.js `^18.20.2` or `>=20.9.0`
- `pnpm` `^9` or `^10`

## Quick Start

1. Install dependencies:

```bash
pnpm install
```

2. Configure environment variables:

- If `.env` already exists, keep it.
- If not, create one and use SQLite:

```env
DATABASE_URL=file:./.db
PAYLOAD_SECRET=change-this-to-a-strong-secret
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
CRON_SECRET=YOUR_CRON_SECRET_HERE
PREVIEW_SECRET=YOUR_SECRET_HERE
```

3. Start the app:

```bash
pnpm dev
```

4. Open:

- Frontend: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`

## Seed / Database Note

- The SQLite database file `.db` is already committed to git in this repo.
- You do **not** need to run seed to get started.
- Running seed will replace existing content/users with seeded data.

## Default Admin Login (from committed DB)

- Email: `anirban@preppathway.com`
- Password: `password`

## Useful Scripts

- `pnpm dev` - run development server
- `pnpm build` - production build
- `pnpm start` - run production server
- `pnpm lint` - run linting
- `pnpm test` - run integration tests
- `pnpm generate:types` - regenerate `src/payload-types.ts`
- `pnpm generate:importmap` - regenerate admin import map
