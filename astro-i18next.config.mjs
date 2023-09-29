/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "en",
    locales: ["en", "es"],
    routes: {
      es: {
        about: "about",
        services: "services",
        contact: "contact",
        gallery: "gallery"
      }
    }
  };