(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["267"],{5053:function(n,e,r){"use strict";r.r(e);var s=r("2676"),a=r("453"),l=r("5962");function t(n){let e=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",pre:"pre"},(0,a.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"vue-i18n-\u7684\u57FA\u672C\u4F7F\u7528",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-i18n-\u7684\u57FA\u672C\u4F7F\u7528",children:"#"}),"vue-i18n \u7684\u57FA\u672C\u4F7F\u7528"]}),"\n","\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://vue-i18n.intlify.dev/guide/introduction",target:"_blank",rel:"noopener noreferrer",children:"\u5B98\u65B9\u6587\u6863"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5B89\u88C5"})}),"\n",(0,s.jsx)(l.PackageManagerTabs,{command:"install vue-i18n@10"}),"\n",(0,s.jsxs)(e.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:[(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u672C\u4F7F\u7528",children:"#"}),"\u57FA\u672C\u4F7F\u7528"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 locales \u4E0B\u521B\u5EFA",(0,s.jsx)(e.code,{children:"index.js"}),"\uFF0C\u8D1F\u8D23\u5BFC\u51FA\u56FD\u9645\u5316\u914D\u7F6E"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",meta:'title="/locales/index.js"',children:'import { createI18n } from "vue-i18n";\r\n// \u8BED\u8A00\u914D\u7F6E\u6587\u4EF6\r\nimport en from "./en.json";\r\nimport zh from "./zh-Cn.json";\r\n\r\nconst messages = {\r\n  en,\r\n  "zh-CN": zh,\r\n};\r\n\r\nconst i18n = createI18n({\r\n  legacy: false, // \u8BBE\u7F6E\u4E3A false\uFF0C\u542F\u7528 composition API \u6A21\u5F0F\r\n  messages,\r\n  locale: localStorage.getItem("lang") || "en", // \u8BBE\u7F6E\u9ED8\u8BA4\u8BED\u8A00\r\n  silentTranslationWarn: true,\r\n  globalInjection: true, // \u5168\u5C40\u6CE8\u5165\r\n});\r\n\r\nexport { i18n };\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 main.js \u4E2D\u5F15\u5165"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",meta:'title="main.js"',children:'// ...\r\nimport { i18n } from "./locales";\r\n\r\n// app \u4E3AVue\u5B9E\u4F8B\r\napp.use(i18n);\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 vue \u4E2D\u4F7F\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",meta:"",children:'<template>\r\n  <div>\r\n    <h1>{{ $t("hello") }}</h1>\r\n  </div>\r\n</template>\r\n\r\n<script setup>\r\n  // \u53EA\u80FD\u5728setup\u4E2D\u8FD9\u4E48\u5199\r\n  import { useI18n } from "vue-i18n";\r\n  const { t } = useI18n();\r\n\r\n  console.log(t("hello"));\r\n<\/script>\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 js \u6587\u4EF6\u4E2D\u4F7F\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",meta:"",children:'// \u5F15\u5165\r\nimport { i18n } from "../locales";\r\n\r\n// \u8C03\u7528\r\nconsole.log(i18n.global.t("hello"));\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(t,n)})):t(n)}e.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["web%2Flib%2F2.mdx"]={toc:[{id:"\u57FA\u672C\u4F7F\u7528",text:"\u57FA\u672C\u4F7F\u7528",depth:2}],title:"vue-i18n \u7684\u57FA\u672C\u4F7F\u7528",frontmatter:{}}}}]);