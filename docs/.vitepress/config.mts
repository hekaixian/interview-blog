import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题选项会进入 themeConfig，供主题读取
const teekConfig = defineTeekConfig({
  teekTheme: true,
  teekHome: false,
  vpHome: false,
  loading: false,
  author: {
    name: "hekaixian",
  },
  // 侧边栏自动读取 docs/blog 下的目录结构
  vitePlugins: {
    sidebar: true,
    sidebarOption: {
      indexSeparator: "-",
      sortNumFromFileName: true,
      titleFormMd: true,
      // blog 下的子目录直接作为侧边栏分组
      initItems: false,
      // 默认只展开「首页」，其他分组折叠
      collapsed: (_relativePath, text) => text !== "首页",
      restart: true,
      ignoreIndexMd: true,
      scannerRootMd: false,
      /**
       * 自动侧边栏默认挂在 /blog/ 下。
       * 根路径 / 也复用同一份，避免跳转前或落在首页时左侧空白。
       */
      sidebarResolved: (sidebar) => {
        if (Array.isArray(sidebar)) return sidebar;
        const blogSidebar = sidebar["/blog/"];
        if (!blogSidebar) return sidebar;
        return {
          ...sidebar,
          "/": blogSidebar,
          "/blog/": blogSidebar,
        };
      },
    },
  },
  footerInfo: {
    copyright: {
      name: "hekaixian",
    },
  },
});

export default defineConfig({
  extends: teekConfig,
  title: "kk小站",
  description: "个人技术面试与学习笔记",
  base: "/interview-blog/",
  lang: "zh-CN",
  lastUpdated: true,
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/interview-blog/kk-logo.svg" }]],

  themeConfig: {
    logo: "/kk-logo.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/hekaixian/interview-blog" },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      pattern:
        "https://github.com/hekaixian/interview-blog/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    lastUpdated: {
      text: "上次更新",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outline: {
      label: "本页目录",
      level: [2, 4],
    },
    nav: [
      {
        text: "编辑简历",
        link: "https://hekaixian.github.io/resume-tool/",
        target: "_blank",
      },
    ],
  },
});
