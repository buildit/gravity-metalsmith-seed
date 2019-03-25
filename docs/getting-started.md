# Getting Started

So, you want to create a website powered by [Gravity][gravity home] - Buildit's design system.

This guide will give you some basics on how to use what's here, and some topics you can research if you want to go that
bit further.

_If you want to know what a "design system" is, then you could read [this article][wtfdesignsystem]._

_If you want an introduction to Gravity as a design system specifically then we've got [an article][gravity about] for
that too!_

## Tools

You will need:

- A code editor. [Atom][atom download] is a good choice.
- A web browser.
- Knowledge of Terminal or Command Prompt.

  Terminal is an application that comes pre-installed on Mac computers. You can run it by pressing [Cmd + Space], then
  typing 'Terminal'. Or you can open it from your Applications folder. You can read [this article][terminal help] to
  find out how to change folders so that you can open Terminal in the folder your unzipped files are in.
  
  Command Prompt is an application that comes pre-installed on Windows computers. You can run it by pressing the
  [windows key + r], then typing 'cmd'. You can read [this article][cmdprompt help] to find out how to change folders so
  that you can open Command Prompt in the folder your unzipped files are in.
  
  _Note: the rest of the docs refer to Terminal, but if you're on Windows then you should use Command Prompt instead._

## Tech

This is a quick introduction to the main tech in use. There's more detailed info in the [tech][tech docs] docs.

If you want to get going and the tech is not that important to you then move on to the Installation instructions that
follow!

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

You will need to install NPM to run commands which control this shell. The instructions are in the next section but
all you need to know is that once installed you will need to enter commands in Terminal which start with the word `npm`.

## Installation

### Download the shell

[Download the shell from Github.][download]

This will download a zip archive containing all the files and folders that make up the Gravity & Metalsmith Shell.

You should unzip this archive somewhere on your computer. The folder you unzip this archive to will be the folder you
want Terminal to be open in.

### NPM

This shell uses a program called NPM (Node Package Manager) to keep a track of any other software that it relies on.
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
shell's dependencies:
```
npm install
```
Note that this command, and all `npm` commands, has to be run in the folder where you've put the files from this shell.
You can see the section above "Tools" for links to articles to help with how to do that.

## Running the site on your machine

Running the site on your machine allows you to check that it is functioning as you expect before you publish it to
whatever platform your audience will view it on.

This is called "Running the site locally", where locally indicates your machine. You will be able to open your browser
and go to a special URL where your local site is running. Usually these local URLs begin with `localhost`. You'll see
that's true for this shell too.

The quickest way to run your site locally is to run the command `npm start` in Terminal. Terminal should be in the
folder you unzipped the files for this shell. This should take a few seconds to complete and when it completes it will
automatically open a webpage in your browser. The URL of that webpage will be something like `http://localhost:8080/`
and as long as you keep that Terminal/Command Prompt window open then the site will be available. If you close the
Terminal window (or you can end the running task by pressing `cmd + c` [`ctrl + c` on windows]) then the site will no
longer be running and if you refresh the page it will show:
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
  
    _The file can be called whatever you want, but a good way of organising your pages is to create a sub-folder witin
    `pages/` and create a file called `index.html` within that. This has the benefit of nice looking URLs to your new
    page._
  
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
`pages/index.html` to see how that is achieved with the `blocks` frontmatter. It uses an external file in the `content/`
folder and renders that file into the `main` block (which is a part of the Basic Page layout you specified in your
frontmatter).

### Adding a page to the navigation

So, you've created a new page and if you know the URL you can view it on your website. This section will show you how to
quickly add that page to the navigation links in your page header.

1. The navigation links which are present within the basic page layout are generated from a Metalsmith collection. You
   can add pages to a collection by changing their frontmatter.
  
   Add the following line to the frontmatter within your page file:
   
   ```collection: colMainNav```

That's it. The page should now appear in the main nav. It's frontmatter `title` will be used as the link text.
   
### Add images and other content

When you want to add files to your site which are static - ie they're an image/video/audio file, or a file that never
changes like a downloadable zip - they should be placed in the `static/` folder. These will get copied to the root of
your website.

So a file in the root of `static/` will appear at the root of your website. e.g. `static/image.png` would be at
`/image.png` in the generated website (remember the forward slash at the start of this website path). This is the path
you would use when specifying the image path in content and html. 

#### Image optimisation

There is a special folder at `/static/images`. This folder is special because a script is run to optimise all image
files placed within this folder when the copy is made for the website. Optimisation just reduces the file size and
should not affect the quality of the images.

The path of these files on the resulting website follows the same behaviour as mentioned above. A file at
`static/images/image.png` will be optimised and available at a website path of `/images/image.png`. 

## Publishing the site (Deployment)

The website files get generated into a folder called `dist/`. This folder is what the local web server uses as it's root
folder. It follows that to deploy the website the contents of this folder need to be copied in to root folder of the
server hosting your website.

_If you do not have any hosting then I would suggest you talk to one of the development team about how to host a static
website._

### Accessibility Tests and Smoke Tests

There is a script provided which will run Accessibility Tests and Smoke Tests. This script relies on a local development
server running at the time the tests are started. This script will also lint your code.

To run the tests you type `npm test` in your Terminal window.

_If you don't have a development server running (see above) then you should run one first. You might need to have two
Terminal windows open - one to run the development server and one to run the tests whilst that server is running._

**Accessibility Tests** are a suite of computer run tests which check if the colours used on the site are suitable for
audiences which might include users with visual impairments. If these fail then you should check the output to see what
issues your site has.

**Smoke Tests** are a couple of important computer run tests which check that certain important files are being
generated correctly. If these fail then it usually means a change that's been made has broken the generation of the
website. The output should tell you which file is failing and you can then check that file exists within the `dist/`
folder and look at it's contents to see if you can spot what is wrong.

**Linting** is the process of checking that coding style meets certain guidelines. This means that files in the `src/`
folder have to meet certain standards of code.

### CI/CD (Continuous Integration/Continuous Deployment)

There is a script provided for CI servers to use. If you don't have CI/CD set up then, as it's a bigger topic, i'd
suggest asking one of the development team what their thoughts are on setting one up.

If you do have CI then you can run `npm run ci`. Note that this relies on a webserver being run for the tests to work.
The file `.travis.yml` is an example of how this shell runs it's own tests on [Travis CI][travis home].

## Where to go from here

- You could read more detail about the tech in use in the [tech docs][tech docs].
- You could learn more about [Gravity][gravity home]!
- You could look in to learning more about [Metalsmith][metalsmith home].

This shell has been built by your team at [Buildit][buildit home]. If you're in the Wipro family then feel free to get
in touch internally. Everyone is welcome to ask general questions or to get help - you can open an issue
[on Github][github issues]. 

[tech docs]: tech.md
[wtfdesignsystem]: https://medium.com/buildit/design-systems-wtf-42956f673250
[gravity home]: https://github.com/buildit/gravity-ui-sass
[gravity about]: https://medium.com/buildit/introducing-buildits-gravity-design-system-44c3fe7a1d26
[metalsmith home]: https://metalsmith.io/
[nodejs about]: https://nodejs.org/about/
[nodejs home]: https://nodejs.org/
[nvm home]: https://github.com/creationix/nvm
[twitter s_l_i]: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image.html
[opengraph]: http://ogp.me/
[travis home]: https://travis-ci.org/
[buildit home]: https://buildit.wiprodigital.com/
[github issues]: https://github.com/buildit/gravity-metalsmith-shell/issues
[tech config_site]: /docs/tech.md#config_site
[atom download]: https://atom.io/
[terminal help]: https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html
[cmdprompt help]: https://www.digitalcitizen.life/command-prompt-how-use-basic-commands
[download]: https://github.com/buildit/gravity-metalsmith-shell/archive/master.zip

---

made with ❤ -  [Buildit][buildit home]