// pass contextual data to all router resolvers and prism client instance


import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { PrismaClient } from "@prisma/client";

// create contex
export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
const prisma = new PrismaClient();

return { prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;