import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://shaheerbinijaz.com",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon({ include: { lucide: ["*"] } }),
  ],
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
