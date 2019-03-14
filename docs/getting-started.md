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
Some information on installing the dependencies and using npm commands.
- Install
  - Node JS
    - Using NVM
    - Using a package

## Running the site
- What it means to run the site locally
- How to run the site locally

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