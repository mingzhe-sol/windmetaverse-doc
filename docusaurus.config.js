module.exports = {
  title: "windmetaverse",
  tagline: " A metaverse on Solana",
  url: "https://www.windmetaverse.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/PsyOps.svg",
  organizationName: "biveivk", // Usually your GitHub org/user name.
  projectName: "windmetaverse-docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",
    },
    navbar: {
      title: "风元宇宙",
      logo: {
        alt: "windmetaverse logo",
        src: "img/wind.png",
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
       
        {
          href: "https://www.windmetaverse.com/",
          label: "官网",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "联系方式",
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
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://medium.com/psyoptions",
            },
            {
              label: "GitHub",
              href: "https://github.com/mithraiclabs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} windmetaverse. Built with Docusaurus.`,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
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
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        entryPoints: ['../windmetaverse-ts/packages/psy-american/src/index.ts'],
        tsconfig: '../windmetaverse-ts/packages/psy-american/tsconfig.json',
        // Plugin options
        out: 'javascript-api',
        sidebar: {
          categoryLabel: 'JavascriptApi',
          position: 0,
          fullNames: true
        },
      },
    ],
  ],
};
