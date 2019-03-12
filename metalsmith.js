var Metalsmith = require("metalsmith");
var fsMetadata = require("metalsmith-fs-metadata");
var path = require("metalsmith-path");
var buildInfo = require("./lib/metalsmith-build-info");
var envInfo = require("./lib/metalsmith-env-info");
var frontmatterFileLoader = require("metalsmith-frontmatter-file-loader");
var frontmatterRenderer = require("metalsmith-frontmatter-renderer");
var layouts = require("metalsmith-layouts");
var beautify = require("metalsmith-beautify");
var drafts = require("metalsmith-drafts");
var htmlMinifierOptimise = require("./lib/metalsmith-html-minifier-optimise");
var mapsiteCurrentenv = require("./lib/metalsmith-mapsite-currentenv");

Metalsmith(__dirname)
  .source("./pages")
  .destination("./dist")
  .clean(false)
  .use(
    fsMetadata({
      config: "./config/site.json"
    })
  )
  .use(
    path({
      directoryIndex: "/index.html",
      extensions: [".html"]
    })
  )
  .use(buildInfo())
  .use(envInfo())
  .use(
    frontmatterFileLoader({
      key: "blocks-md",
      suppressNoFilesError: true
    })
  )
  .use(
    frontmatterRenderer({
      key: "blocks-md",
      out: "blocks",
      suppressNoFilesError: true
    })
  )
  .use(
    frontmatterFileLoader({
      key: "blocks-njk",
      suppressNoFilesError: true
    })
  )
  .use(
    frontmatterRenderer({
      key: "blocks-njk",
      out: "blocks",
      ext: "njk",
      suppressNoFilesError: true
    })
  )
  .use(layouts())
  .use(
    beautify({
      preserve_newlines: false
    })
  )
  .use(drafts())
  .use(
    htmlMinifierOptimise({
      minifierOptions: {
        removeComments: false
      }
    })
  )
  .use(
    mapsiteCurrentenv({
      omitIndex: true
    })
  )
  .build(function(err) {
    if (err) throw err;
    console.log("Metalsmith build complete!");
  });
