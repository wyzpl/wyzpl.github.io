import * as path from "path";
import { defineConfig } from "rspress/config";
import alignImage from "rspress-plugin-align-image";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "TREEPLANTING",
  base: "/blog/",
  description: "朝如青丝暮成雪 人生得意须尽欢",
  logoText: "TREEPLANTING",
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
  },
});
