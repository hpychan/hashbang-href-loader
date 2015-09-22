# hashbang-href-loader
AngularJS hashbang href rewriter loader module for Webpack

This is useful in situations where AngularJS HTML5 mode does not work (e.g. Cordova), 
but where you want to use HTML5 mode style URLs. For example, this may happen when
the same html template is to be used on a html5-mode enabled desktop browser as with Cordova).

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var htmlContent = require("raw!hashbang-href!./file.html");
// => returns file.html content as string, with #! added to all root-relative href="" attributes
```

### Example

The following source HTML content:

``` html
<a href="/page">Go to page</a>
<a href="relativeLink">Go to relative page</a>
```

becomes:

``` html
<a href="#!/page">Go to page</a>
<a href="relativeLink">Go to relative page</a>
```

## Note

To use href links in this form, configure your AngularJS application with:
``` javascript
$locationProvider.html5Mode(false).hashPrefix('!')
```

[More information: AngularJS HTML5 mode](https://docs.angularjs.org/guide/$location)


## License

MIT (http://www.opensource.org/licenses/mit-license.php)

