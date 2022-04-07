module.exports = {
  title: "windmetaverse",
  tagline: " A metaverse on Solana",
  url: "https://www.windprotocol.org/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/wind.jpg",
  organizationName: "biveivk", // Usually your GitHub org/user name.
  projectName: "windmetaverse-docs", // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en','zh-hk'],
  },themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",
    },navbar: {
      title: "Windmetaverse",
      logo: {
        alt: "windmetaverse logo",
        src: "img/wind.jpg",
      },items: [
        {
          type: 'localeDropdown',
          position: "right",
        },
       
        {
          href: "https://www.windmetaverse.com/",
          label: "website",
          position: "left",
        },
      ],
    },footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/9PyKRev8TE",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/windmetaverse",
            },
            {
              label: "Telegram",
              href: "https://t.me/joinchat/mNxJoJn4p4JhYjU1",
            },
          ],
        },
      
      ],
      copyright: `Copyright © ${new Date().getFullYear()} windmetaverse. Built with Docusaurus.`,
    },
  },presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
  
};
