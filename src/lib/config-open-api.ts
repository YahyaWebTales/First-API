import type { AppOpenAPI } from "./types";
import packaJSON from "../../package.json";
import {apiReference} from "@scalar/hono-api-reference";
export default function configureOpenAPI(app: AppOpenAPI){
    app.doc("/doc", {
        openapi: "3.0.0",
        info:{
            version: packaJSON.version,
            title: "Test Fiest API",
        },
    });



    app.get(
        "/reference",
        apiReference({
            theme:"kepler",
            layout:"classic",
            defaultHttpClient: {
                targetKey: "javascript",
                clientKey: "fetch"
            },
            spec: {
                url: "/doc",
            },
        }),
    );
}