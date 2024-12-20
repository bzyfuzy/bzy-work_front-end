import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
