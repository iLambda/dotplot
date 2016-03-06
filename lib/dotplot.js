var _ = require('lodash')

module.exports = {

  pattern: function(a) {
    // returns the dotplot of a language
    return this.correlation(a, a)
  },

  correlation: function(a, b) {
    // defaulting arguments
    a = (a && _.isArray(a)) ? a : []
    b = (b && _.isArray(b)) ? b : a
    // creating the dotplot
    var dotplot = {
      x: a.length,
      y: b.length,
      matrix: []
    }
    // populating the similarity matrix
    for (var i = 0; i < dotplot.x; i++) {
      dotplot.matrix.push([])
      for (var j = 0; j < dotplot.y; j++) {
        dotplot.matrix[i].push((a[i] === b[j]) ? 1 : 0)
      }
    }
    // returning the dotplot
    return dotplot
  },

  transpose: function(dotplot) {
    // transpose the matrix
    var tmatrix = []
    // populating the similarity matrix
    for (var i = 0; i < dotplot.y; i++) {
      tmatrix.push([])
      for (var j = 0; j < dotplot.x; j++) {
        tmatrix[i].push((a[j] === b[i]) ? 1 : 0)
      }
    }
    // return the transposed dotplot
    return {
      x: dotplot.y,
      y: dotplot.x,
      matrix: tmatrix
    }
  },


  save: function(dotplot) {

  }

}
