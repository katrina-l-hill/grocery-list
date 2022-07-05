// created tRPC hook (adds the data type of the router as generic on the createReactQueryHooks() function to make API calls)

import type { ServerRouter } from "@/server/router";
import { createReactQueryHooks } from "@trpc/react";

export const trpc = createReactQueryHooks<ServerRouter>();