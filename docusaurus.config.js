// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Attrace - Referral Protocol for Web3 Assets",
  tagline: "Referral Protocol for Web3 Assets",
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
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/develop/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]    
    // [
    //   "classic",
    //   /** @type {import('@docusaurus/preset-classic').Options} */
    //   ({
    //     docs: {
    //       sidebarPath: require.resolve("./sidebars.js"),
    //       editUrl: "https://github.com/attrace/homepage/edit/master/",
    //     },       
    //     blog: {
    //       showReadingTime: true,
    //       editUrl: "https://github.com/attrace/homepage/edit/master/",
    //     },
    //     theme: {
    //       customCss: require.resolve("./src/css/custom.css"),
    //     },
    //   }),
    // ],
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
            to: "/about", 
            activeBasePath: 'about',
            label: "About", 
            position: "left" 
          },
          { 
            to: "/guides", 
            activeBasePath: 'guides',
            label: "Guides", 
            position: "left" 
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
        '@docusaurus/plugin-content-docs',
        {
          id: 'about',
          path: 'about',
          routeBasePath: 'about',
          editUrl: 'https://github.com/attrace/docs/edit/master/',
          includeCurrentVersion: true,
          lastVersion: 'current',
          sidebarPath: require.resolve('./sidebars.about.js'),
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'guides',
          path: 'guides',
          routeBasePath: 'guides',
          editUrl: 'https://github.com/attrace/docs/edit/master/',
          includeCurrentVersion: true,
          lastVersion: 'current',
          sidebarPath: require.resolve('./sidebars.guides.js'),
        },
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'updates',
          path: 'updates',
          showReadingTime: true,
          routeBasePath: 'updates',
          include: ['*.md', '*.mdx'],
          editUrl: 'https://github.com/attrace/docs/edit/master/',
        },
      ],
    ]  
};

module.exports = config;
