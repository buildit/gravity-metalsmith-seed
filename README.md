# Gravity & Metalsmith Shell - [![Build Status](https://travis-ci.org/dw-buildit/gravity-metalsmith-shell.svg?branch=master)](https://travis-ci.org/dw-buildit/gravity-metalsmith-shell)

This shell can be used as a base to quickly create your own static site with [Gravity](https://github.com/buildit/gravity-ui-sass).

## Features

This is the list of the out-the-box features:
- Proud consumer of [Gravity](https://github.com/buildit/gravity-ui-sass)
- [Metalsmith](https://metalsmith.io/) static site generator - preconfigured with extra features:
  - [Nunjucks](https://mozilla.github.io/nunjucks/) templates with a few starter templates
  - [Markdown](https://en.wikipedia.org/wiki/Markdown) content seperate to templates
  - Beautified or minified HTML output depending on environment
  - Sitemap generation
  - Simple publishing control (draft status)
- [Gulp](https://gulpjs.com/) build system
  - [Browsersync](https://www.browsersync.io/) to watch for changes and serve a dev site
  - JS scripts linting, rollup and minification
  - SASS compilation and minification
- [pa11y](http://pa11y.org/) accessibility tests
- [Cypress](https://www.cypress.io/) smoke tests

## How to use

### Requirements

Node v8.10.0 or higher is required.

If you use [NVM](https://github.com/creationix/nvm) for managing Node, you can just issue the following command to install the right node version

    $ nvm install

and before running any other npm command, run

    $ nvm use

### Installation

Most of the time you will want to take a copy of this code base and use it as a starting point within your own project.
The simplest way of doing this would be to [download the source files from github](https://github.com/dw-buildit/gravity-metalsmith-shell/archive/master.zip).

Unzip them into your project directory and install the dependencies by running:

    $ npm install

## Build, Development & Testing

To use the live-reloading development site you need to build your project using one of the following commands:
- `npm start` - Generates a minified local build and a local server instance
- `npm run dev` - Generates a non minified local build and a local server instance. This is useful if you want to look at the generated site's code for example.

You can build the site without running the site too:
- `npm run build` - Generates a minified local build

You can lint your code separately (linting ensures the code style fits our guidelines):

- `npm run lint` - lints the js and sass within the `.\src` folder

There are accessibility and smoke tests included in the base project.
The accessibility tests will help ensure the generated site can support all users.
The smoke tests check that the build process hasn't broken and that the required site assets are being generated.

You can run the tests separately:

- `npm run test` - Run the accessibility and smoke tests *Note: a local server needs to be running at port 8080 so make sure the local development server is running before using this command.*

Local hosting is at http://localhost:8080 and a browser window should open automatically.

Distribution goes into `./dist`.

## Deployment

Serve the `dist/` folder using your choice of platform.

Preferably hook up continuous deployment. Your CI system should run `npm run ci`; to lint, build and test; before deploying the `dist/` folder.
