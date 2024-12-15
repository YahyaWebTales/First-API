import { z } from "zod";
import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config());

const EnvSchema = z.object({
    PORT: z.coerce.number().default(9999)
});


export type env = z.infer<typeof EnvSchema>;

let env: env;
try{
    env = EnvSchema.parse(process.env);
}catch(e){
    const error = e as zodError;
    console.error("❌ Invalid env : ")
    console.error(error.flatten().fieldErrors());
    process.exit(1);
}


export default env;