const {description} = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Platform API Documentation',
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
/*       {
        text: 'Guide API',
        link: '/guide/',
      }, */
      {
        text: 'v1.0.0',
        link: '/1.0.0/',
      },
/*       {
        text: 'v2.0.0',
        link: '/2.0.0/',
      }, */
      {
        text: 'Stentle',
        link: 'https://stentle.com/'
      }
    ],
    sidebar: {
/*       '/guide/': [
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
      ], */
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
                {
                  title: 'Query',
                  sidebarDepth: 1,
                  children:[
                    '/1.0.0/attribute/query',
                    '/1.0.0/attribute/query-search-attributes',
                    '/1.0.0/attribute/query-get-specific-attribute'
                  ]
                }
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
                {
                  title: 'Query',
                  sidebarDepth: 1,
                  children:[
                    '/1.0.0/ancillarie/query',
                    '/1.0.0/ancillarie/query-get-ancillary-product-detail',
                    '/1.0.0/ancillarie/query-get-all-ancillary-products',
                    '/1.0.0/ancillarie/query-get-all-ancillary-reladedto'
                  ]
                }
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
                {
                  title: 'Query',
                  sidebarDepth: 1,
                  children:[
                    '/1.0.0/ean/query',
                    '/1.0.0/ean/query-search-by-ean',
                    '/1.0.0/ean/query-search-variant-by-ean'
                  ]
                }
              ]
            },
            {
              title: 'Import Product',
              sidebarDepth: 1,
              children:[
                '/1.0.0/import_product/',
                '/1.0.0/import_product/create',
                '/1.0.0/import_product/update',
                '/1.0.0/import_product/delete',
                {
                  title: 'Query',
                  sidebarDepth: 1,
                  children:[
                    '/1.0.0/import_product/query',
                    '/1.0.0/import_product/query-get-status-by-UUID',
                    '/1.0.0/import_product/query-error-file-by-UUID'
                  ]
                }
              ]
            },
            {
              title: 'Export Product',
              sidebarDepth: 1,
              children:[
                '/1.0.0/export_product/',
                '/1.0.0/export_product/create',
                '/1.0.0/export_product/update',
                '/1.0.0/export_product/delete',
                '/1.0.0/export_product/query'
              ]
            },
            'errors'
          ]
           // optional, defaults to 0, defines the index of initially opened subgroup
        }
      ],
/*       '/2.0.0/':[
        {
          title: 'v2.0.0',
          sidebarDepth: 1,
          initialOpenGroupIndex: -1,
          children: []
        }
      ] */
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
