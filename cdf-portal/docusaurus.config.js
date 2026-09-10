// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Conservation Data Framework',
  tagline: 'Zentrale Dokumentation des Conservation Data Frameworks (CDF)',
  favicon: 'img/favicon.ico',

  url: 'https://nfdi4objects.github.io',
  baseUrl: '/n4o_conservation_data_framework/',

  organizationName: 'nfdi4objects',
  projectName: 'n4o_conservation_data_framework',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Deutsch ist die Quellsprache -> als "root"-Locale ohne Pfadpräfix (/conservation-metadataschema/...)
  // Englische Übersetzungen kommen später Seite für Seite in i18n/en/docusaurus-plugin-content-docs/current/...
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeConfigs: {
      de: { label: 'Deutsch' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Doku direkt unter "/", wie bisher bei Just-the-Docs
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nfdi4objects/n4o_conservation_data_framework/tree/main/cdf-portal/',
        },
        blog: false, // kein Blog benötigt
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/CDF_logo.png',
      navbar: {
        title: 'Conservation Data Framework',
        logo: {
          alt: 'CDF Logo',
          src: 'img/CDF_Logo_klein.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'metadataschemaSidebar',
            position: 'left',
            label: 'Conservation Metadata Schema',
          },
          {
            to: '/conservation-ontology',
            label: 'Conservation Ontology',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/nfdi4objects/n4o_conservation_data_framework',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Conservation Data Framework · NFDI4Objects · Inhalte lizenziert unter CC BY 4.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Cookie-freie, DSGVO-konforme Seitenaufruf-Statistik.
      // Vor dem ersten Deploy: eigenen Code unter goatcounter.com anlegen und hier eintragen.
      scripts: [
        {
          src: '//gc.zgo.at/count.js',
          async: true,
          'data-goatcounter': 'https://cdf-portal.goatcounter.com/count',
        },
      ],
    }),
};

module.exports = config;
