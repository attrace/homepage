// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Attrace",
  tagline: "Attrace",
  url: "https://attrace.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "attrace", // Usually your GitHub org/user name.
  projectName: "attrace/homepage", // Usually your repo name.
  customFields: {
    baseEditUrl: "https://github.com/attrace/homepage/edit/master/",
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/attrace/homepage/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/attrace/homepage/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: "dark",
        logo: {
          alt: "Attrace",
          src: "img/logo.svg",
        },
        items: [
          { to: "/about", label: "About", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs & Help",
          },
        ],
      },
      footer: {
        style: "dark",
      },
    }),
};

module.exports = config;
