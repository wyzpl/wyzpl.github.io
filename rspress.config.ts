import * as path from "path";
import { defineConfig } from "rspress/config";
import alignImage from "rspress-plugin-align-image";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "植树计划",
  base: "/",
  description: "前端，技术，JavaScript，TypeScript，Node.js，Vue.js，React.js，Webpack，Nest.js，Next.js，Rspress",
  logoText: "植树计划",
  icon: "/logo.png",
  logo: {
    light: "/logo.png",
    dark: "/logo.png",
  },
  plugins: [alignImage()],
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    lastUpdated: true,
    footer: {
      message: "©2023-2024 Create By ☄️ 植树",
    },
  },
});
