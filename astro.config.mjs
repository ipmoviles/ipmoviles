import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
  output: "hybrid",
  adapter: vercel(),
});
