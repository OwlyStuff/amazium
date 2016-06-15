#Amazium [![Build Status](https://travis-ci.org/OwlyStuff/amazium.svg?branch=master)](https://travis-ci.org/OwlyStuff/amazium)

Responsive CSS Framework

__*Literally*__ Too orangey for crows!

See [Amazium.co.uk](http://www.amazium.co.uk)


###Ember-CLI application setup

It is not possible to directly import CSS assets into an ember-cli application at the moment and therefore the following configuration steps are required to get amazium working with an ember cli application.

####Install amazium

Run the following in your application root to install amazium:

```
npm install amazium --save-dev
```

####Install ember-cli addon to import css assets from node modules

Run the following in your application root:

```
ember install ember-cli-node-assets
```

####Import amazium compiled CSS in your application

Update the Ember CLI build file to include the amazium compiled CSS from the node package:

```javascript
// ember-cli-build.js
var app = new EmberApp(defaults, {
  ...
  nodeAssets: {
    'amazium': {
      srcDir: 'dist',
      import: ['amazium.css']
    }
  }
});
```

###Creating an Amazium build with a custom grid

####Adjust the grid parameters

The default parameters for the amazium grid are adjustable. You can set your own values in the _variables.scss file. When the SASS is compiled the grid values are calculated according to the set values. With these variable it is now possible to build a 1440px grid with 16 columns or whatever you wish.

```sass
/***** Define grid width *****/
$grid-width: 1200px;
$grid-width-smscreen: 960px;
$grid-width-tablet: 768px;

/***** Define column number *****/
$grid-columns: 12;

/***** Define gutter spacing *****/
$grid-gutter: 20px;

/***** Calculate gutter spacing for breakpoints / can also be set manually *****/
$grid-gutter-smscreen: $grid-gutter / 1.25;
$grid-gutter-tablet: $grid-gutter-smscreen / 1.1;
```

##### Variables in detail

* `$grid-width` controls how wide the initial grid is.
* `$grid-width-smscreen` controls how wide the grid on small screens is. This value also contols the smallscreen breakpoint.
* `$grid-width-tablet` controls how wide the grid on tablets is. This value also contols the tablet breakpoint.
* `$grid-columns` controls how much columns there are.
* `$grid-gutter` controls how much space there is between columns.
* `$grid-gutter-smscreen` calculates how much space there is between columns on small screens. Can also be set manually.
* `$grid-gutter-tablet` calculates how much space there is between columns on tablets. Can also be set manually.
