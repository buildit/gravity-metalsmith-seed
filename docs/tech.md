# Tech

- [Gravity](#gravity)
- [Gulp](#gulp)
- [Metalsmith](#metalsmith)
  - [Plugins](#metalsmith_plugins)
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

<a name="gravity"/>

## Gravity - [link][gravity home]

Gravity is Buildit's design system.

To find out what a "design system" is you can [read this article].

This shell was built primarily to allow rapid creation of websites (internal/external) which use the Buildit design
system for consistency and future proof brand alignment.

<a name="gulp"/>

## Gulp - [link][gulp home]

Gulp is a build system.

A build system allows us to automate many tasks associated with developing and generating software. Gulp provides a
framework for you to define methods and tasks in javascript and then to run them by name.

Our gulpfile defines a lot of the extra functionality of generating the website. It configures the image optimisation,
the copying of files, the cleaning of the folder between generations, running the live-reloading local web server,
kicking off the Metalsmith build, compiling css and javascript, and many other tasks too!

<a name="metalsmith"/>

## Metalsmith - [link][metalsmith home]

Metalsmith is a static site generator.

A static site doesn't require a database or logic to be performed on the server side. In our case the logic to generate
web pages from content is done on 'build'. We build the site when we make changes and then deploy each time.

Metalsmith is cool because it's javascript based (and the rest of our stack is js too) and it sports a modular plugin
system.

<a name="metalsmith_plugins"/>

### Plugins

We've preconfigured several Metalsmith plugins and they, along with the order they execute, allow for many of the more
interesting automatic processes we use to generate our websites.

The following list is all the Metalsmith plugins we use and a quick word on what they do.

#### metalsmith-fs-metadata - [link][mplugin mfsm]

Loads extra global metadata from files on the filesystem.

We load the site config information in `config/site.json` so that it's available for the rest of the generation.

#### metalsmith-path - [link][mplugin mpath]

Adds a `path` property to the metadata for each processed file.

This allows us to create links to pages such as the top menu and articles page.

#### ./lib/metalsmith-build-info

A custom plugin that adds global metadata detailing information about the current build such as the current git commit
and whether the build is local or on a CI server.

#### ./lib/metalsmith-env-info

A custom plugin that adds global metadata containing the correct section of the `config/envs.json` file. The choice of
environment is based on a parameter given to the build command.

#### metalsmith-collections - [link](mplugin mcol)

Creates arrays of metadata based on tags added to frontmatter.

This is the main driver behind the top navigation and article listing page as it groups together the pages with the
correct collection tags.

#### metalsmith-frontmatter-file-loader - [link](mplugin mfmfl)

Loads files from paths defined in frontmatter and adds the contents of those files to the metadata.

We use it to load content files, such as from `content/`.

Between this, `metalsmith-frontmatter-renderer` and some special layouts we can keep our content separate from our
layouts.

#### metalsmith-frontmatter-renderer - [link](mplugin mfmr)

Parses text in frontmatter and renders it as html.

We use this to convert markdown in frontmatter (such as that loaded from content files by
`metalsmith-frontmatter-file-loader`) into html.

Between this, `metalsmith-frontmatter-file-loader` and some special layouts we can keep our content separate from our
layouts.

#### metalsmith-in-place - [link][mplugin mip]

Parses the content of files and renders them as html.

We use this to convert markdown or nunjucks contents of our pages. e.g. if you create a page `pages/about.md` then this
plugin would convert any of the contents below the frontmatter from markdown to html.

#### metalsmith-layouts - [link][mplugin mlay]

We use this to renders layouts from the `layouts/` folder based on one being chosen in frontmatter. 

#### metalsmith-beautify - [link][mplugin mbeaut]

This takes our generated html code and formats it to have consistent indentation and line spaces. It makes the generated
code look nicer basically. 

#### metalsmith-drafts - [link][mplugin mdrafts]

This plugin removes all the files which have `draft: true` in their frontmatter. It's allows some very basic publishing
control.

#### ./lib/metalsmith-html-minifier-optimise

A custom plugin that minifies the generated files based on the environment configuration. Minification removes any
characters which are not required (such as nice looking whitespace and longer variable names) to save on file size.

#### ./lib/metalsmith-mapsite-currentenv

A custom plugin that wraps `metalsmith-mapsite` ([link][mplugin mmap]) so that the sitemap is generated with the correct
urls for the current environment.

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

[mplugin mfsm]: https://github.com/dw-buildit/metalsmith-fs-metadata
[mplugin mpath]: https://github.com/greduan/metalsmith-path
[mplugin mcol]: https://github.com/segmentio/metalsmith-collections
[mplugin mfmfl]: https://github.com/djfwilkinson/metalsmith-frontmatter-file-loader
[mplugin mfmr]: https://github.com/djfwilkinson/metalsmith-frontmatter-renderer
[mplugin mip]: https://github.com/metalsmith/metalsmith-in-place
[mplugin mlay]: https://github.com/metalsmith/metalsmith-layouts
[mplugin mbeaut]: https://github.com/boushley/metalsmith-beautify
[mplugin mdrafts]: https://github.com/segmentio/metalsmith-drafts
[mplugin mmap]: https://github.com/quercy/metalsmith-mapsite
[gravity home]: https://github.com/buildit/gravity-ui-sass
[gulp home]: https://gulpjs.com/
[metalsmith home]: https://metalsmith.io/
