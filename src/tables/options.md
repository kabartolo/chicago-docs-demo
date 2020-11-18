| Name | Type | Info | Default | Description |
| --- | --- | --- | --- | --- |
| `assetsPath` | string | optional | `'src/assets'` | Directory for all assets used in your site. |
| `basePath` | string | optional | `''` (empty string) | Base path of your docs site, such as `/docs`. |
| `basePathLabel` | string | optional | `'Home'` | Label for base path in breadcrumb links. |
| `docsPath` | string | optional | `'src/docs'` |  Directory for all MDX docs for your site (i.e., MDX files that should use the Doc page component). |
| `pagesPath` | string | optional | `'src/pages'` |  Directory for your site's pages (i.e., MDX files that should use the Page page component). |
| `mainMenu` | array of objects | optional | `[]` | List of menu items that will appear in the header (see <a href="/docs/configuration/menus/#main-menu">Configuration: Main Menu</a>). |
| `sidebarMenus` | array of objects | optional | `[]` | List of menus that will appear in the sidebar of your site (see <a href="/docs/configuration/menus/#sidebar-menu">Configuration: Sidebar Menu</a>). |
| `allowDocsSearch` | boolean | optional | `true` |  Whether a search index is fully populated with MDX files from the `docsPath` folder. Set to `false` to use a different search strategy. |
| `alwaysShowBreadcrumb` | boolean | optional | `true` | Whether breadcrumb links are always displayed at the top of each doc. Can be overridden by the <a href="#frontmatter">`showBreadcrumb`</a> frontmatter field for an individual doc.|
| `alwaysShowPostNav` | boolean | optional | `true` | Whether to always show links to the previous and next docs at the bottom of a doc page. Can be overridden by the <a href="#frontmatter">`showPostNav`</a> frontmatter field for an individual doc. |
| `alwaysShowSidebar` | boolean | optional | `true` | Whether to always show the sidebar for docs. Can be overridden by the <a href="#frontmatter">`showSidebar`</a> frontmatter field for an individual doc. |
| `alwaysShowTOC` | boolean | optional | `true` | Whether to always show the table of contents (TOC component) for each doc. Can be overridden by the <a href="#frontmatter">`showTOC`</a> frontmatter field for an individual doc. |
| `primaryResultsOnly` | boolean | optional | `false` | When searching, whether to show only only matches in the title, description, and/or header. If set to `false`, will also show paragraph matches. |
| `sidebarAllowMultipleOpen` | boolean | optional | `true` | Whether multiple accordion menus in the sidebar can be open at the same time. |
| `sidebarAllowTOC` | boolean | optional | `true` | Whether to show a dropdown table of contents for each doc in the sidebar. |
| `sidebarDepth` | number | optional | `3` | Total depth of nested accordions to display in the sidebar (including table of contents). |
| `skipMDXConfig` | boolean | optional | `false` | Whether to skip <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/">`gatsby-plugin-mdx`</a> configuration for the theme. |
| `toggleTheme` | boolean | optional | `true` | Whether a theme toggle button should be shown in the header. |