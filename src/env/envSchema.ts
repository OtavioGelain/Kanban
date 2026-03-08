import z from "zod";
import "dotenv/config";

const envSchema = z.object({
  PORT: z.string().default("3000"),
  DB_HOST: z.string().default("localhost"),
  DB_PORT: z.coerce.number().default(3333),
  DB_USERNAME: z.string().default("postgres"),
  DB_PASSWORD: z.string().default("1234"),
  DB_NAME: z.string().default("kanban"),
  JWT_SECRET: z.string().default("123456"),
});

const _env = envSchema.safeParse(process.env);

if(!_env.success){
    throw new Error("Invalid environment variables");
}
export const env = _env.data;

