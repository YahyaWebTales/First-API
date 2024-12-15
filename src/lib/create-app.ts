import { OpenAPIHono } from '@hono/zod-openapi';
import { pinoLogger } from '@/log/pino-logger';
import serveEmojiFavicon from "@/middlewares/serve-emoji-favicon";

export function createRouter(){
    return new OpenAPIHono({
        strict: false,
    })
}


export default function createApp(){

        const app = new OpenAPIHono({
            strict : false
        });
        app.use(serveEmojiFavicon("😜"));
        app.use('*',pinoLogger());
        return app;

    };