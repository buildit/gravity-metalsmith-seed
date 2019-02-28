# Gravity + Metalsmith Shell

This shell can be used as a base to quickly create your own site.

The features out the box include:
- [Metalsmith](https://metalsmith.io/) static site generator - preconfigured with extra features:
  - [Nunjucks](https://mozilla.github.io/nunjucks/) templates
  - [Markdown](https://en.wikipedia.org/wiki/Markdown) content
  - Beautified HTML output
  - Site Map
  - Simple publishing (draft status)
- [Gulp](https://gulpjs.com/) build system
  - [Browsersync](https://www.browsersync.io/) to watche for changes and serve a dev site
  - Minify js scripts
  - SASS compilation
- Basic accessibility testing
- Basic smoke testing
- Linting

## Requirements

Node v8.10.0 or higher is required.

If you use [NVM](https://github.com/creationix/nvm) for managing Node, you can just issue the following command to install the right node version

    $ nvm install

and before running any other npm command, run

    $ nvm use

## Installation

Once you've installed Node install the dependencies by running

    $ npm install

## Build and development

There are three ways to build and run the website:

- `npm start` - Generates a minified local build and a local server instance
- `npm run build` - Generates a minified local build
- `npm run dev` - Generates a non minified local build and a local server instance

Local hosting is at http://localhost:8080 and a browser window should open automatically.

Distribution goes into `./dist`.