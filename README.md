# dotplot

This library allows you to *create* and *draw* dotplots. In bioinformatics, a **dot plot** is a graphical method that allows the comparison of two biological sequences and identify regions of close similarity between them. It is a type of recurrence plot. (Source : [wikipedia](https://en.wikipedia.org/wiki/Dot_plot_(bioinformatics)))

## install
If you're using node.js and npm, type into a terminal :
```sh
$ npm install dotplot --save
```
If you're using the browser, add to the beginning of your file:
```html
<script src="dotplot.js"></script>
```

## example
```js
var dotplot = require('dotplot')

// creates a dotplot for a DNA sequence
var plot = dotplot.pattern("ATCGATCGCGATCATCGGG".split(''))
// return its data uri
var uri = dotplot.dataURI(plot)
```

## api

The following methods are available:

### pattern
```js
var plot = dotplot.pattern(sequence)
```

Returns a dotplot of the given sequence. The data returned is formatted to be
able to be used with [sparse-binary-matrix](https://github.com/iLambda/sparse-binary-matrix), also [available on npm](https://www.npmjs.com/package/sparse-binary-matrix).

The output dotplot is square.

### correlation
```js
var plot = dotplot.pattern(sequence)
```

Returns a dotplot of correlation between two sequences. The data returned is formatted to be
able to be used with [sparse-binary-matrix](https://github.com/iLambda/sparse-binary-matrix), also [available on npm](https://www.npmjs.com/package/sparse-binary-matrix).

The output dotplot is not square.

### dataUri
```js
dotplot.dataUri(plot)
```

Returns a graphic representation of the dotplot in the form of a data URI.


## release History

* 0.1.0 Initial release

## license
[MIT](http://opensource.org/licenses/MIT)
