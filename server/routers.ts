
import { router, publicProcedure } from "./_core/trpc";
import { authRouter } from "./auth";
import { fantasyRouter } from "./fantasyRouter";
import { contestRouter } from "./contestRouter";
import { getStatistics } from "./db";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly

  auth: authRouter,
  fantasy: fantasyRouter,
  contest: contestRouter,
  
  statistics: router({
    getStats: publicProcedure.query(async () => {
      return await getStatistics();
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
