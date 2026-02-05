/**
 * @file-docusaurus.config.js
 * @type {import('@docusaurus/types').DocusaurusConfig}
 */

module.exports = {
  // Usually your GitHub page/project name:
  // If you are deploying via GitHub Pages and your repo is named "my-blog", then url: "https://username.github.io/my-blog", and baseUrl: "/my-blog/".
  // If you are deploying via GitHub Pages and your repo is AT THE ROOT of your github.io page (e.g. username.github.io), then url: "https://username.github.io", and baseUrl: "/".
  // For a custom domain, use that domain here.
  url: 'https://crustylobster.github.io',
  baseUrl: '/soccer-coaching-plans/',
  projectName: 'soccer-coaching-plans',
  repoUrl: 'https://github.com/crustylobster/soccer-coaching-plans',
  organizationName: 'crusty lobster',
  title: 'Soccer Coaching Plans',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this config guide to set up languages your website normally supports. 
  // See: https://docusaurus.io/docs/customization#change-the-language
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/crusty lobster/soccer-coaching-plans/edit/main/packages/docusaurus-docs/ '',
          routeBasePath: '/', // Set to '/' to make docs root.
        },
        blog: false, // We don't have a blog in this project
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'Soccer Coaching Plans',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // { 
        //   type: 'doc',
        //   docId: 'intro', // This is the doc id for intro.md
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          href: 'https://github.com/crusty lobster/soccer-coaching-plans',
          label: 'GitHub',
          position: 'right',
        },
      ],
      style: 'primary',
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'U6 Coaching',
              to: '/docs/u6/practice_plan_01_introduction_to_soccer_fun_and_basic_skills',
            },
            // Add links for other age groups as needed
          ],
        },
        {
          title: 'Community',
          items: [
            // Add community links if applicable
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/crusty lobster/soccer-coaching-plans',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crusty Lobster. Built with Docusaurus.`, // Dynamic copyright year
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};
