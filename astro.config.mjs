import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), tailwind(), react()],
  output: "server",
  adapter: vercel()
});