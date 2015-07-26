# IRB Rocks! ghost theme
Ghost template used on http://irb.rocks

# Develop

To work with IRB Rocks! theme you will need to install [NodeJS](https://nodejs.org/), [NPM](https://www.npmjs.com/) and [Gulp](http://gulpjs.com/).

After install base dependencies, clone the repository and run `npm install` to download development dependencies:

  git clone https://github.com/irbrocks/theme.git
  cd theme
  npm install

All changes must be performed on `assets/sass`, because `assets/css` folder are generated automatically with Gulp.

When you finish your changes, execute `gulp sass` on your terminal and all minified/compiled files CSS will be generated. If you want Gulp wait changes and automatically run `gulp sass`task when a SASS file changes, execute `gulp`.

# Contribute

To contribute IRB Rocks! theme:

* Create an issue with the contribution: bug, enhancement...
* Fork the repository and make all changes you need (See [develop](#develop))
* Compile all files with `gulp sass`
* Create a pull request when you finish

# License

IRB Rocks! theme is released under the MIT license. Copyright [@Laux_es](https://twitter.com/Laux_es) ;)