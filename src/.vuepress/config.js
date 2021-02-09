const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Documentation Platform',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://stentle.com/wp-content/themes/stentle/dist/images/logo-stentle-az.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    activeHeaderLinks: true,
    smoothScroll: true,
    nav: [
      {
        text: 'Guide API',
        link: '/guide/',
      },
      {
        text: 'Stentle',
        link: 'https://stentle.com/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide API',
          sidebarDepth: 1,
          //collapsable: false,
          initialOpenGroupIndex: -1,
          children: [
            '',
            'product-controller',
            'product-category-controller',
            'errors',
          ]

        },
        {
          title: 'DOCS 2',
          sidebarDepth: 1,
          children: [ 
          'Testnav',
         ],
          initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
