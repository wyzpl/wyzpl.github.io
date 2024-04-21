import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "JSZhiShu",
  base: "/blog/",
  description: "朝如青丝暮成雪 人生得意须尽欢",
  logoText:'JSZhiShu',
  // icon: "/rspress-icon.png",
  // logo: {
  //   light: "/rspress-light-logo.png",
  //   dark: "/rspress-dark-logo.png",
  // },
  route:{
    cleanUrls:true
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
  },
});
