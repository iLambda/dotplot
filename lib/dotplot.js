var _ = require('lodash')
var smb = require('sparse-binary-matrix')
var Canvas = require('canvas')

// SPARSE MATRIX
// instead of saving the matrix (n*n)
// we save ordered lists of integers that
// represent the true (=1) coefficients in the matrix
//   if the matrix has p = m% probability of picking a 1 at random,
//   then we store p*n*n instead of n*n coefficients. the worst case is a
//   matrix full of 1, which is n*n coeffs.

// compute language matching density : ratio of 1 over 0

module.exports = {

  pattern: function(a) {
    // returns the dotplot of a language
    return this.correlation(a, a)
  },

  correlation: function(a, b) {
    // defaulting arguments
    a = (a && _.isArray(a)) ? a : []
    b = (b && _.isArray(b)) ? b : a
    // returning the dotplot
    return smb.make(function (i, j) { return a[i] === b[j] }, { x: a.length, y: b.length })
  },

  dataUri: function(dotplot) {
    // creating canvas from node-canvas
    var canvas = new Canvas(dotplot.x, dotplot.y)
    var ctx = canvas.getContext('2d')
    // check for density : if > 0.5, clear blck and plot white.
    var d = smb.density(dotplot)
    var positive = d < 0.5
    var back = positive ? "#FFF" : "#000"
    var front = positive ? "#000" : "#FFF"
    // fill back
    ctx.fillStyle = back
    ctx.clearRect(0,0,dotplot.x,dotplot.y)
    // start filling front
    ctx.fillStyle = front
    // check if positive
    if (positive) {
      // we draw black every point in the matrix
      _.forEach(dotplot.data, function (column, x) {
        _.forEach(column, function (y) {
          ctx.fillRect(x, y, 1, 1)
        })
      })
    } else {
      // we draw white every rect that isn't in the array
      if (positive) {
        _.forEach(dotplot.data, function (column, x) {
          if (column.length == 0) {
            ctx.fillRect(x, 0, 1, dotplot.y)
          } else {
            var lasty = undefined
            _.forEach(column, function (y) {
              ctx.fillRect(x, lasty || 0, 1, y - (lasty || 0))
            })
          }

        })
      }
    }
    // when drawn, return data uri
    return canvas.toDataURL()
  }

}
