# Hello there!
![alt text](http://dev.codibrie.cl/_resources/github/skeleton/banner.png "Tecnology")

This is my personal skeleton that I use when I start a new project.
I use it mostly for Front-end Web Design making use of SASS and Browser Sync to preview the changes on PC, mobile etc.

Feel free to create requests and improve it.
[Issues](https://github.com/en3sis/project-skeleton/issues) / [Pull Request](https://github.com/en3sis/project-skeleton/pulls)




## Where to start ##

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
This will generate a style.min.css file and and in-line the HTML files.



**NOTE:** You still need to manualy link the .min.css inside the inlined HTML File for now (fix in next relase)


## Grunt taks ##
* grunt-contrib-cssmin
* grunt-contrib-htmlmin
* grunt-contrib-sass
* grunt-contrib-watch
* grunt-browser-sync



## SASS Files
[Sass](http://sass-lang.com/) is a preprocessor that adds nested rules, variables, mixins and functions, selector inheritance, and more to CSS. Sass files compile into well-formatted, standard CSS to use in your site or application.

Imported inside the main SASS file /sass/style.scss:
* [Roboto Font](https://fonts.google.com/specimen/Roboto?selection.family=Roboto)
* [Material-Icons](https://google.github.io/material-design-icons/)
* [Normalize](https://necolas.github.io/normalize.css/)
* [Flexblox Mixin for SASS](https://github.com/mastastealth/sass-flex-mixin)


And other folder structure for components and imports.




The MIT License (MIT)
=====================

Copyright © `2017` `@en3sis`

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentatio files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

