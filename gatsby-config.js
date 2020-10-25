module.exports = {
  pathPrefix: '/chicago-docs',
  siteMetadata: {
    title: 'Chicago Docs',
    description: 'Documentation and demo site for Chicago Docs Gatsby theme',
    siteLanguage: 'en',
    siteLogo: 'chicago-docs-logo.png',
    siteUrl: `https://kabartolo.github.io/chicago-docs`,
    githubUrl: `https://github.com/kabartolo/gatsby-themes/gatsby-theme-chicago-docs/`,
  },
  plugins: [
    {
      resolve: '@kabartolo/gatsby-theme-chicago-docs',
      options: {
        mainMenu: [
          {
            name: 'Documentation',
            path: '/docs/',
          },
          {
            name: 'Tutorials',
            path: '/tutorials/',
          },
        ],
        sidebarMenus: [
          {
            name: 'Documentation',
            slug: 'docs',
            items: [
              {
                slug: 'quick-start',
              },
              {
                name: 'Configuration',
                slug: 'configuration',
                isGroup: true,
                items: [
                  {
                    slug: 'site-options',
                  },
                  {
                    slug: 'menus',
                  },
                  {
                    slug: 'search-config',
                  },
                ],
              },
              {
                name: 'Guide to MDX',
                slug: 'mdx-guide',
                isGroup: true,
                items: [
                  {
                    slug: 'writing',
                  },
                  {
                    slug: 'errors',
                  },
                ],
              },
              {
                slug: 'styling-and-shadowing',
              },              
              {
                slug: 'components-and-hooks',
              },
              {
                slug: 'example-api-doc',
              },              
            ],
          },
          {
            name: 'Tutorials',
            slug: 'tutorials',
            items: [
              {
                slug: 'tutorial1',
              },
            ],
          },
        ],
      },
    },    
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chicago Docs Gatsby Theme',
        short_name: 'Chicago Docs',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#eee',
        display: 'standalone',
        icon: 'src/assets/chicago-docs-logo.png', // creates a favicon
      },
    },
    'gatsby-plugin-offline',
  ]
};
