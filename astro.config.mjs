import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";

const base = (process.env.BASE_PATH || "/").replace(/\/$/, "");

export default defineConfig({
  site: process.env.SITE_URL || "https://cgchrfchscyrh.github.io",
  base: base || "/",
  trailingSlash: "always",
  integrations: [mdx()],
  markdown: { processor: unified({ gfm: true }) },
  server: { host: "127.0.0.1", port: 4322 },
  image: { responsiveStyles: true },
});
