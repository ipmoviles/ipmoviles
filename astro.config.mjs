import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), preact()],
  output: "server",
  adapter: vercel()
});