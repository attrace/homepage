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
          {
            label: "Referral Farms",
            href: "https://app.attrace.com/farms",
          },
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
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "#",
              },
              {
                label: "Telegram",
                href: "#",
              },
              {
                label: "Twitter",
                href: "#",
              },
              {
                label: "Github",
                href: "#",
              },
              {
                label: "Medium",
                href: "#",
              },
            ],
          },
          {
            title: "$ATTR available on",
            items: [
              {
                label: "SushiSwap",
                href: "#",
              },
              {
                label: "Uniswap",
                href: "#",
              },
              {
                label: "Bittrex",
                href: "#",
              },
            ],
          },
          {
            title: "Project",
            items: [
              {
                label: "Referral Network",
                href: "#",
              },
              {
                label: "ATTR Token",
                href: "#",
              },
              {
                label: "Developers",
                href: "#",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Team",
                href: "#",
              },
              {
                label: "Governance",
                href: "#",
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} - Attrace Referral Network`,
      },
    }),
};

module.exports = config;
