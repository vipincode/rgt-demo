# Docs

[Project](https://github.com/ZulianTiger/next-auth-udemy/)

## Prisma Setup

- First install these packages
- `npm install prisma --save-dev`
- `npm install @prisma/client`
- `npx prisma init`
- `npx prisma migrate dev` or `npx prisma db push` use sync with database
- `npx prisma migrate dev --name migration name` else you can use this
- `db push` is only for mongodb and some other rum after schema created
- `npx prisma generate` use after db change
- `npx prisma format` use to format database

## Creating db connection

- utils > `prisma.ts` ot `db.ts` and write this code

```js
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

## Heading

Learn more about Git
