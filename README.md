# Gravity & Metalsmith Shell - [![Build Status][buildstatus image]][buildstatus url]

_Quickly create your own static site powered by [Gravity][gravity home]!_

The primary purpose of this shell is to allow rapid creation of websites (internal or external) - which use Buildit's
design system for consistency and future proofed brand alignment.

- **[Getting Started documentation][gettingstarted docs]**

  **This is where you should start if you don't know where else to start!**
  
  Follow this documentation to understand more about this project and how to install, run and create new content for a
  site generated using it. This documentation is geared towards a wide audience.

- **[Tech documentation][tech docs]**

  This documentation explains what each portion of the tech stack in use is, and what it does. It's geared towards users
  with some development experience.

## Quick Start

There are more instructions in the [Getting Started][gettingstarted docs] docs.

- Node v8.10.0 or higher is required.

### Installation

Most of the time you will want to take a copy of this code base and use it as a starting point for your own project.

1. [Download the source files from GitHub][download]
1. Unzip the files into your project directory
1. `npm install` in that directory

### Build, Development & Testing

To use the live-reloading development site you need to build your project using one of the following commands:

- `npm start` - Generates a minified local build and a local server instance
- `npm run dev` - Generates a non minified local build and a local server instance. This is useful if you want to look
  at the generated site's code for example.

You can build the site without running the site too:
- `npm run build` - Generates a minified local build

You can lint your code separately (linting ensures the code style fits our guidelines):

- `npm run lint` - lints the js and sass within the `.\src` folder

There are accessibility and smoke tests included in the base project.
The accessibility tests will help ensure the generated site can support all users.
The smoke tests check that the build process hasn't broken and that some required site assets are being generated.

You can run the tests separately:

- `npm run test` - Run the accessibility and smoke tests. *Note: these test look for a website at
`http://localhost:8080` so make sure the local development server is running before using this command.*

Local hosting is at http://localhost:8080 and a browser window should open automatically when using the start or build
commands.

### Deployment

The website is built to the `dist/` folder.

Your CI system should run `npm run ci` to build, lint and test.

*Note that your CI system of choice should also run a local webserver before running these tests. You can use `npm run
http-server` to do this - your CI system should have documentation on where to run this command.*  

[gravity home]: https://github.com/buildit/gravity-ui-sass
[gettingstarted docs]: docs/getting-started.md
[tech docs]: docs/tech.md
[download]: https://github.com/buildit/gravity-metalsmith-shell/archive/master.zip
[buildstatus image]: https://travis-ci.org/buildit/gravity-metalsmith-shell.svg?branch=master
[buildstatus url]: https://travis-ci.org/buildit/gravity-metalsmith-shell
[buildit home]: https://buildit.wiprodigital.com/

---

made with ❤ -  [Buildit][buildit home]