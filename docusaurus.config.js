// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Attrace",
  tagline: "Referral Protocol for Web3 Assets",
  url: "https://attrace.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "attrace", // Usually your GitHub org/user name.
  projectName: "attrace/homepage", // Usually your repo name.
  customFields: {
    baseEditUrl: process.env.REACT_APP_GIT_URL,
    dappUrl: process.env.REACT_APP_DAPP_URL,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
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
        items: [
          {
            to: "/about",
            activeBasePath: "about",
            label: "About",
            position: "left",
          },
          {
            to: "/guides",
            activeBasePath: "guides",
            label: "Guides",
            position: "left",
          },
          {
            to: "/updates",
            activeBasePath: 'updates',
            label: "Updates",
            position: "left"
          },
        ],
      },
      footer: {
        style: "dark",
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about",
        path: "about",
        routeBasePath: "about",
        editUrl: 'https://github.com/attrace/homepage/edit/testnet/',
        includeCurrentVersion: true,
        lastVersion: "current",
        sidebarPath: require.resolve("./sidebars.about.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "guides",
        routeBasePath: "guides",
        editUrl: 'https://github.com/attrace/homepage/edit/testnet/',
        includeCurrentVersion: true,
        lastVersion: "current",
        sidebarPath: require.resolve("./sidebars.guides.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "updates",
        path: "updates",
        showReadingTime: true,
        routeBasePath: "updates",
        include: ["*.md", "*.mdx"],
        editUrl: 'https://github.com/attrace/homepage/edit/testnet/',
        feedOptions: {
          title: 'Attrace | Latest product and economics updates',
          description: 'Stay informed with the latests product, partnersships and economic updates',
        },
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/guides/referral-farming/how-it-works',
            from: '/guides/referral-farming/how-it-works-key-terms',
          },
        ],
      },
    ],
  ],
  scripts: [

    {
      src:
        '/js/loadtags.js',
      async: false,
    },
    {
      src:
        'https://improve.attrace.com/server/ust.min.js?v=4.4.0',
      async: true,
    },
  ],
};
module.exports = config;
