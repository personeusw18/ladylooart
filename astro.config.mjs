// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://personeusw18.github.io',
  base: 'ladylooart',
  output: 'static',
  integrations: [tailwind(), react()],
});