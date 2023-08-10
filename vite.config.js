import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  base: "rainbow6siegeVue3",
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "./src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
});
