var dotplot = require('../lib/dotplot.js')
var sbm = require('sparse-binary-matrix')

var plot = dotplot.pattern("ATCGATCGCGATCATCGGG".split(''))
console.log(dotplot.dataUri(plot))
