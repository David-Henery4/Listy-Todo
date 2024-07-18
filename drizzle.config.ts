import { config } from "dotenv";
import {defineConfig} from "drizzle-kit"

config({path: ".env"})

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  out: "./supabase/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
})