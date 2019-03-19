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

The first steps you might want to take are to change the generated site's name and some other basic configuration.

This is stored in a `.json` file. Json is a format of storing data which makes it easy for the computer to read. It is
made up of `key: value` pairs. Unless you know what you're doing you will only want to change the `value` portions of
the data.

1. Open the file: `config/site.json`
1. Change the values to whatever you want, e.g.
    ```json
    "title": "My new site title",
    "shortTitle": "New site",
    "description": "A short description of this new site",
    ```
1. Save the file

_At this point, if you have the server running, the site should automatically update with your changes. You should see
in your Terminal that everything has been regenerated with the new information. If the site is open in your browser it
will automatically refresh too! If the site is not running you will need to run the site on your machine using the
instructions above._

A full description of the contents of `site.json` is available [in the tech docs][tech config_site]. 

### Create a new page

Now let's add a new page to your site.

1. Create a new `.html` file within the `pages/` folder.
  
    _The file can be called whatever you want, but a good way of organising your pages is to create a sub-folder witin `pages/` and create a file called `index.html` within that. This has the benefit of nice looking URLs to your new page._
  
    _e.g. Create a file called `pages/my-new-page/index.html` and you would be able to load it in a browser at
    `http://.../my-new-page/`._
1. Next we add **frontmatter**. Frontmatter is a concept of having specially formatted information at the start (front)
   of a file - before any critical information.
  
   For now, paste the following in to your new file:
   
   _pages/my-new-page/index.html_
   <pre><code>&mdash;&mdash;&mdash;
   layout: basic-page.njk
   title: My new page
   &mdash;&mdash;&mdash;</code></pre>
   
   This tells your new page to use the Basic layout and in the title bar it will show `My new page`.
1. If you view your page at this point it will have the header and footer but no content!

   There are two methods of adding content. The simplest is to write HTML below the frontmatter. e.g.
   
   _pages/my-new-page/index.html_
   <pre><code>&mdash;&mdash;&mdash;
   layout: basic-page.njk
   title: My new page
   &mdash;&mdash;&mdash;
   &lt;h1&gt;This is my page's header&lt;/h1&gt;
   </code></pre>

#### Using markdown for content

The method above requires you to know some HTML for writing content. If you don't want to learn HTML then Markdown is
much simpler and you can use online editors to generate it!

If you add a `.md` extension to your new file (keep the `.html` too, so it becomes `index.html.md`) then you can use
markdown content below the frontmatter instead of html! e.g.

_pages/my-new-page/index.html.md_
<pre><code>&mdash;&mdash;&mdash;
layout: basic-page.njk
title: My new page
&mdash;&mdash;&mdash;
# This is my page's header
</code></pre>

There's one final method for content which is to store it in another file. Take a look at the existing
`pages/index.html` to see how that is achieved with the `blocks` frontmatter.

### Adding a page to the navigation

So, you've created a new page and if you know the URL you can view it on your website. This section will show you how to
quickly add that page to the navigation links in your page header.

1. The navigation links which are present within the basic page layout are generated from a Metalsmith collection. You
   can add pages to a collection by changing their frontmatter.
  
   Add the following line to the frontmatter within your page file:
   
   ```collection: colMainNav```

That's it. The page should now appear in the main nav. It's frontmatter `title` will be used as the link text.
   
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
[twitter s_l_i]: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image.html
[opengraph]: http://ogp.me/

[tech config_site]: /docs/tech.md#config_site