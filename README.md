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
