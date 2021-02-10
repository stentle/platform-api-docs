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
        text: 'v1.0.0',
        link: '/1.0.0/',
      },
      {
        text: 'v2.0.0',
        link: '/2.0.0/',
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
      '/1.0.0/':[
        {
          title: 'v1.0.0',
          sidebarDepth: 1,
          initialOpenGroupIndex: -1,
          children: [            
            {
              title: 'Product',
              sidebarDepth: 1,
              children:[
                '/1.0.0/product/',
                '/1.0.0/product/create',
                '/1.0.0/product/update',
                '/1.0.0/product/delete',
                '/1.0.0/product/query'
              ]
            },
            {
              title: 'Attribute',
              sidebarDepth: 1,
              children:[
                '/1.0.0/attribute/',
                '/1.0.0/attribute/create',
                '/1.0.0/attribute/update',
                '/1.0.0/attribute/delete',
                '/1.0.0/attribute/query'
              ]
            },
            {
              title: 'Ancillarie',
              sidebarDepth: 1,
              children:[
                '/1.0.0/ancillarie/',
                '/1.0.0/ancillarie/create',
                '/1.0.0/ancillarie/update',
                '/1.0.0/ancillarie/delete',
                '/1.0.0/ancillarie/query'
              ]
            },
            {
              title: 'Category',
              sidebarDepth: 1,
              children:[
                '/1.0.0/category/',
                '/1.0.0/category/create',
                '/1.0.0/category/update',
                '/1.0.0/category/delete',
                {
                  title: 'Query',
                  sidebarDepth: 1,
                  children:[
                    '/1.0.0/category/query',
                    '/1.0.0/category/query-search-category',
                    '/1.0.0/category/query-get-category-by-id'
                  ]
                }
              ]
            },
            {
              title: 'EAN',
              sidebarDepth: 1,
              children:[
                '/1.0.0/ean/',
                '/1.0.0/ean/create',
                '/1.0.0/ean/update',
                '/1.0.0/ean/delete',
                '/1.0.0/ean/query'
              ]
            },
            {
              title: 'template',
              sidebarDepth: 1,
              children:[
                '/1.0.0/template/',
                '/1.0.0/template/create',
                '/1.0.0/template/update',
                '/1.0.0/template/delete',
                '/1.0.0/template/query',
                '/1.0.0/template/other'
              ]
            },
            'errors'
          ]
           // optional, defaults to 0, defines the index of initially opened subgroup
        }
      ],
      '/2.0.0/':[
        {
          title: 'v2.0.0',
          sidebarDepth: 1,
          initialOpenGroupIndex: -1,
          children: []
        }
      ]
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
