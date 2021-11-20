module.exports = {
  title: "windmetaverse",
  tagline: " A metaverse on Solana",
  url: "https://www.windmetaverse.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/wind.png",
  organizationName: "biveivk", // Usually your GitHub org/user name.
  projectName: "windmetaverse-docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",
    },
    navbar: {
      title: "Windmetaverse",
      logo: {
        alt: "windmetaverse logo",
        src: "img/wind.png",
      },
      items: [
        {
          href: "https://windmetaverse-doc-en.4everland.app/",
          label: "English",
          position: 'right',
        },
       
        {
          href: "https://www.windmetaverse.com/",
          label: "website",
          position: "left",
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
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/biveivk/windmetaverse-docs/",
        },
      },
    ],
  ],
  
};
