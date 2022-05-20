const { resolve } = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        homepage: resolve(__dirname, "homepage.html"),
        article: resolve(__dirname, "article.html"),
        homepageecole: resolve(__dirname, "homepageecole.html")
      }
    }
  },
  base: "https://ecolescommunales.marche.be/nouveau/",
});