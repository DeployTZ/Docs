import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Deploy Docs",
  description:
    "A modern platform for seamless deployment and scaling of your applications",

  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "Your First App", link: "/docs/first-app" },
          { text: "Shipfile", link: "/docs/shipfile" },
          { text: "Connecting Github", link: "/docs/github" },
          { text: "Supported Stacks", link: "/docs/stacks" },
        ],
      },

      {
        text: "Examples",
        items: [
          { text: "Python", link: "/docs/examples/python" },
          { text: "Node", link: "/docs/examples/node" },
          { text: "Static", link: "/docs/examples/static" },
          { text: "Go", link: "/docs/examples/go" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/DeployTZ" },
      { icon: "x", link: "https://x.com/DeployTZ" },
      { icon: "linkedin", link: "https://linkedin.com/company/SubCodeAfrica" },
    ],
  },
});
