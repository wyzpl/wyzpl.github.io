"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["310"],{3461:function(e,n,s){s.r(n),s.d(n,{default:()=>c});var r=s(5893),t=s(65),i=s(5293);function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h3:"h3",strong:"strong",pre:"pre",code:"code",h4:"h4"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"vue3-项目配置自动引用",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue3-项目配置自动引用",children:"#"}),"vue3 项目配置自动引用"]}),"\n","\n",(0,r.jsx)(n.p,{children:"自动导入分为自动导入 api 和自动导入组件，原理都是通过 vite 插件来实现的。"}),"\n",(0,r.jsxs)(n.h3,{id:"自动导入组件",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动导入组件",children:"#"}),"自动导入组件"]}),"\n",(0,r.jsx)(n.p,{children:"封装过后的组件可以直接在template中使用，组件自动引入且注册。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"安装"})}),"\n",(0,r.jsx)(i.SourceCode,{href:"https://github.com/unplugin/unplugin-vue-components"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i unplugin-vue-components -D\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"自动导入 ElementPlus(可选)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i unplugin-element-plus -D\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"在-vite-中配置",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-vite-中配置",children:"#"}),"在 Vite 中配置"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'// vite.config.ts\nimport Components from "unplugin-vue-components/vite";\n\nexport default defineConfig({\n  plugins: [\n    Components({\n      dirs: ["src/components", "src/layouts/components"], // 指定自动导入组件的路径\n      extensions: ["vue"], // 组件的有效文件扩展名\n      deep: true, // 搜索子目录\n      dts: path.resolve("types", "components.d.ts"), // 指定自动导入函数TS类型声明文件路径\n      resolvers: [ElementPlusResolver()], // ElemenPlus 自动导入\n    }),\n  ],\n});\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"自动导入-api",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动导入-api",children:"#"}),"自动导入 api"]}),"\n",(0,r.jsxs)(n.p,{children:["像",(0,r.jsx)(n.code,{children:"ref,reactive,useRoute,useRouter"}),"等api直接使用，无需手动引入。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"安装"})}),"\n",(0,r.jsx)(i.SourceCode,{href:"https://github.com/unplugin/unplugin-auto-import#readme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i -D unplugin-auto-import\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"在-vite-中配置-1",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-vite-中配置-1",children:"#"}),"在 Vite 中配置"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// vite.config.ts\nimport AutoImport from "unplugin-auto-import/vite";\n\nexport default defineConfig({\n  plugins: [\n    AutoImport({\n      imports: ["vue", "vue-router", "vue-i18n", "pinia"], // 需要自动导入API的库\n      vueTemplate: true,\n      dirs: ["./src/utils/**", "./src/api/**", "./src/store/**"], // 需要自动导入的目录\n      dts: path.resolve("types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径\n      resolvers: [ElementPlusResolver()],\n    }),\n  ],\n});\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["web%2Fbasic%2F3.mdx"]={toc:[{id:"自动导入组件",text:"自动导入组件",depth:3},{id:"在-vite-中配置",text:"在 Vite 中配置",depth:4},{id:"自动导入-api",text:"自动导入 api",depth:3},{id:"在-vite-中配置-1",text:"在 Vite 中配置",depth:4}],title:"vue3 项目配置自动引用",headingTitle:"vue3 项目配置自动引用",frontmatter:{}}}}]);