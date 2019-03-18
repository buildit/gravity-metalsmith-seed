# Getting Started
So, you want to create a static site powered by Gravity - Buildit's design system.

This guide will give you some basics on how to use what's here, and some topics you can research if you want to go that
bit further.

## Tech
Here's a quick introduction to the main tech in use. There's more info in the [tech][tech docs] docs.

### Gravity - [link][gravity home]
Gravity is Buildit's design system. It defines the styling and structure of most of the UI components on the generated
website. When Gravity is updated you can quickly get those fixes or brand changes into your own site without having to
do any development.

Gravity is constantly in development and further information can be found on it's [Github page][gravity home].

### Metalsmith - [link][metalsmith home]
Metalsmith is a static site generator that runs on javascript. It's responsible for taking the content that's added to
specific folders and generating a website (with all the trimmings) which you can publish somewhere.

We've preconfigured Metalsmith with a variety of plugins to do most of the tasks that are required to build a simple
static site. We'd encourage you to take a look at [their website][metalsmith home] if you want to learn a bit more and
this will allow you to make more advanced changes.

### NPM
You will need to install NPM to run commands which control this generator. The instructions are in the
next section but all you need to know is that once installed you will need to enter commands in Terminal (comes
preinstalled on mac) which start with the word `npm`. Those commands start different processes which you will need to
develop and run your site.

## Installation

This generator uses a program called NPM (Node Package Manager) to keep a track of any other software that it relies on.
These are called dependencies.

You might have NPM installed - in which case you can move on to "Running the site".

To find out if NPM is installed open Terminal (on Mac) or Command Prompt (on Windows) and type `npm -v`. If you get a
version number in response then you have NPM installed - otherwise you need to follow the rest of these installation
instructions.

NPM comes as part of another piece of software called Node JS. You could read more technical information about Node JS
[on their website][nodejs about].

#### Installing Node JS
If you want to install and manage several versions of Node JS then have a look at [Node Version Manager (NVM)][nvm home].
However, the simpler option is to just install Node JS directly; and this is likely to be best for most users.

Node JS provide installers for many operating systems on their website.
- Visit [https://nodejs.org/][nodejs home]
- Select an installer to download - the `LTS` release is recommended for most users.
- Install the software and, after restarting your Terminal or Command Prompt, check that `npm` is available.

#### Installing dependencies
Once NPM is installed (or if it's already available) you can run the following command to install all of this
generator's dependencies:
```
npm install
```
Note that this command has to be run in the folder where you've put the files from this shell. For instructions on how
to change folder in Terminal (or check which folder you're in) see
[this article](https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html).

## Running the site on your machine
- What it means to run the site locally
- How to run the site locally

Running the site on your machine allows you to check that it is functioning as you expect before you publish it to
whatever platform your audience will view it on.

This is called "Running the site locally", where locally indicates your machine. You will be able to open your browser
and go to a special URL where your local site is running. Usually these local URLs begin with `localhost`. You'll see
that's true for this generator too.

The quickest way to run your site locally is to run the command `npm start` from within the folder you put the files for
this shell. This should take a few seconds to complete and when it completes it will automatically open a webpage in
your browser. The URL of that webpage will be something like `http://localhost:8081/` and as long as you keep that
Terminal/Command Prompt window open then the site will be available. If you close the Terminal window (or you can end
the running task by pressing `cmd + c` [`ctrl + c` on windows]) then the site will no longer be running and if you
refresh the page it will show:
> This site can’t be reached

## Making changes
### Change the site's name and config
- Steps to change the site's name and configuration
### Create a new page
- Steps to create a new page
  - Create html file in `pages/` folder
  - Linking to block content within frontmatter
### Add images and other content
- Steps to add static assets and images
- Steps to add markdown content

## Publishing the site (Deployment)
- What you need to deploy
- (?) Best practises such as CI/CD

## Where to go from here
- Further reading
- Other topics that might be important
- How to get help

[tech docs]: tech.md
[gravity home]: https://github.com/buildit/gravity-ui-sass
[metalsmith home]: https://metalsmith.io/
[nodejs about]: https://nodejs.org/about/
[nodejs home]: https://nodejs.org/
[nvm home]: https://github.com/creationix/nvm