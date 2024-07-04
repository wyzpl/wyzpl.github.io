import type { RspressPlugin } from "@rspress/shared";
import path from "path";

export function pluginExample(slug: string): RspressPlugin {
  // 组件路径，组件的内容你需要自己实现
  const componentPath = path.join(__dirname, "rspress-card-nav.tsx");
  return {
    // 插件名称
    name: "plugin-rspress-card-nav",
    // 全局组件的路径
    globalUIComponents: [componentPath],
    // 构建阶段的全局变量定义
    builderConfig: {
      source: {
        define: {
          "process.env.SLUG": JSON.stringify(slug),
        },
      },
    },
  };
}
