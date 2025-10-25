import type { PrismaConfig } from "prisma";

export default {
  migrations: {
    seed: "ts-node seed.ts"
  }
} satisfies PrismaConfig;