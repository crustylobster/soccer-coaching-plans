/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Soccer Coaching Plans',
  url: 'https://crustylobster.github.io',
  baseUrl: '/soccer-coaching-plans/', // Use the repo name
  projectName: 'soccer-coaching-plans',
  organizationName: 'crustylobster',
  trailingSlash: false,
  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/crustylobster/soccer-coaching-plans/edit/main/',
          routeBasePath: '/', // Makes docs the homepage
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Soccer Coaching Plans',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/crustylobster/soccer-coaching-plans',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'U6 Glossary',
              to: 'u6/glossary', 
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crusty Lobster. Built with Docusaurus.`,
    },
  },
};

module.exports = config;