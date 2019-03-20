# Tech

- Gravity
- Gulp
- Metalsmith
  - Plugins
- Nunjucks
- Markdown
- pa11y
- Cypress
- Browsersync
- Linting
- Sass compilation
- Sitemap
- Config folder
  - [Site](#config_site)
  - Environments
- Robots
- Pages folder
- Layout folder
- Content folder
- Static folder
  - Icons
- Google Tag Manager

## Gravity

- What
- Why

## Gulp

- What
- Why

## Metalsmith

- What
- Why

### Plugins

#### metalsmith-fs-metadata

#### metalsmith-path

#### ./lib/metalsmith-build-info

#### ./lib/metalsmith-env-info

#### metalsmith-collections

#### metalsmith-frontmatter-file-loader

#### metalsmith-frontmatter-renderer

#### metalsmith-in-place

#### metalsmith-layouts

#### metalsmith-beautify

#### metalsmith-drafts

#### ./lib/metalsmith-html-minifier-optimise

#### ./lib/metalsmith-mapsite-currentenv
  
## Nunjucks

- What
- Why

### See layouts?

## Markdown

- What
- Why

### See content?

## pa11y

- What
- Why

### Accessibility tests out the box

## Cypress

- What
- Why

### Smoke tests out the box

## Browsersync

- What
- Why

### Local development

## Linting

- What
- Why

### eslint

### stylelint

## Sass compilation

### src folder explaination?

## Scripts compilation

### src folder explaination?

## Sitemap

- What
- Why

## Config folder: `config/`

<a name="config_site"/>

### Site: `config/site.json`
`config/site.json` is a file that contains basic configuration information for your site such as it's title and sharing
images.

Here is a description of each of the settings you can change in `site.json`:

- `title` - The title of your site. This will show in the browser when a page doesn't have it's own title. It's also
  used to tell search engines your site name.
- `shortTitle` - Where there is not a lot of space for a long title this shorter version will be used.
- `description` - A paragraph description on what your site is about. Generally used for search engines.
- `twitterCard` - This changes how your site shows up when shared in a tweet on twitter. The default is
  [summary_large_image](twitter s_l_i).
- `twitterSiteId` - This is the `@username` twitter username for your site.
- `ogType` - This is the [Open Graph](opengraph) object type. This should probably stay as `"website"` unless you know
  what you're doing.
- `ogImage` - This is the path to the [Open Graph](opengraph) image. When a user shares your site on a platform that supports open
  graph this image will be used to decorate that post/message. 
- `ogImageAlt` - This is the [Open Graph](opengraph) image alt text. This alt text is attached to the image for users
  who require the image describing to them. For example, visually impaired users.

### Environments: `config/envs.json`
- What an environment is.
- What each environment is.
- How to run each environment.
 
## Robots

- What
- Why

## Pages folder

## Layouts folder

## Content folder

## Static folder

### Icons

## Google Tag Manager

- What
- Why