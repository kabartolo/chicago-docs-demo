| Name | Type | Info | Default | Description |
| --- | --- | --- | --- | --- |
| `title` | string | optional |  `''` (empty string) | Used to set the meta title tag for your site. Also appears in the browser tab and next to the logo in the header. |
| `description` | string | optional | `''` (empty string) | Used to set the meta description tag for your site. |
| `siteLanguage` | string | optional | `''` (empty string) | Used to set the meta language tag for your site. |
| `siteLogo` | string | optional | `''` (empty string) |  Filename for your logo, which should live in `src/assets` (or the `assetsPath` <a href="#theme-options">theme option</a>). This creates a logo that appears to the left of the site title with a fixed height of 30px. To customize the logo further, <a href="/docs/styling-and-shadowing/#component-example">shadow</a> the Logo component in `@kabartolo/gatsby-theme-chicago-docs/src/components/Layout/Header/logo.js`. |
| `siteUrl` | string | optional | `''` (empty string) |  Used to set the canonical URL for your site. |
| `githubUrl` | string | optional | `''` (empty string) | Used to create a GitHub icon in the header that opens your GitHub project in a new tab. |