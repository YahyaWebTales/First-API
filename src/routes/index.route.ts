import createRouter from "@/lib/create-app";
import { createRoute,z } from "@hono/zod-openapi";


const router = createRouter().openapi(createRoute({
    tags: ["Index"],
        method: "get",
        path: "/",
        responses: {
            200: {
                content: {
                    'application/json' : {
                        schema: z.object({
                            message: z.string(),
                        }),
                    },
                },
                description: "First API Index"
            }
        }
    }),
    (c)=>{
        return c.json({
            message: "First API",
        });
    },
);

export default router;