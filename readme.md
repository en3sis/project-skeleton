# Hello there!
![alt text](http://dev.codibrie.cl/_resources/github/skeleton/banner.png "Tecnology")

This is my personal skeleton that I use when I start a new project.
I use it mostly for Front-end Web Design making use of SASS and Browser Sync to preview the changes on PC, mobile etc.

Feel free to create requests and improve it.
[Issues](https://github.com/en3sis/project-skeleton/issues) / [Pull Request](https://github.com/en3sis/project-skeleton/pulls)


## ⚙️ Where to start ##

Make sure you have [Node.js](https://nodejs.org/en/) installed, [Grunt](http://gruntjs.com/), [Ruby](https://rubyinstaller.org/) and [Sass](http://sass-lang.com/install)

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins.


###### Install all the packages and dependencies
```
~ npm install
```

## Grunt Tasks ##

###### For development:

Run [Browser-sync](https://www.browsersync.io/) and watch SASS files.
```
~ grunt
```
###### For production:

Use the task

```
~ grunt dist
```
This will generate content inside dist/ with inline HTML/CSS and Autoprefixer.


## Grunt taks ##
* grunt-contrib-cssmin
* grunt-contrib-htmlmin
* grunt-contrib-sass
* grunt-contrib-watch
* grunt-browser-sync



## SASS Files
[Sass](http://sass-lang.com/) is a preprocessor that adds nested rules, variables, mixins and functions, selector inheritance, and more to CSS. Sass files compile into well-formatted, standard CSS to use in your site or application.

Main SASS File: /sass/style.scss
* [Roboto Font](https://fonts.google.com/specimen/Roboto)
* [Material-Icons](https://google.github.io/material-design-icons/)
* [Normalize](https://necolas.github.io/normalize.css/)
* [Bootstrap 4 Grid](https://github.com/m-spyratos/bootstrap-4-grid)
<!-- * [Flexblox Mixin for SASS](https://github.com/mastastealth/sass-flex-mixin) -->



And other folder structure for components and imports.

## UPDATES ##
* ✖️ Removed Flexbox Mixin, added Autoprfixer instead for better browser support.
* ✔️ Added ESLint with Browser, Vanilla JS, ES6 and jQuery.
* ✔️ Added Bootstrap 4 Grid (Flex, SASS Version).