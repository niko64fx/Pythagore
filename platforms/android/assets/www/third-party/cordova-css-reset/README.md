CSS-Reset
=========

CSS Resetter adapted to Cordova & Phonegap projects including :

* Making link selections transparent
* Preventing callout to copy image
* Preventing webkit from resizing text to fit
* Preventing copy paste (add a `body { -webkit-user-select: text; }` to allow it)

Installation
------------

### Bower

`bower install cordova-css-reset`

Releases Notes
--------------

* Version 2.1 : + `textarea { resize: none; }` to avoid textarea resizing. (08/10/2013)
* Version 2.2 : + `a { outline: none; }` to avoid dots around links. (02/12/2013)
* Version 2.3 : I implemented many stuff from [YUI 3.5.0 reset.css](http://yuilibrary.com/yui/docs/cssreset/). (03/12/2013)
* Version 2.4 : + `body { -webkit-font-smoothing: antialiased; }` to avoid aliasing on Chrome. (21/01/2014)
* Version 2.5 : + `a { color: inherit; text-decoration: none; }` to avoid links auto-formatting. (28/01/2014)
* Version 2.6 : + `button { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }` to avoid buttons auto-formatting. (23/11/2014)
