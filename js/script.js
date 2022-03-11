// Created by: Marshall
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  // this function does basic math
document.getElementById('area-math').innerHTML = '<p>The area is:' + (5 * 3) + '</p>'
document.getElementById('perimeter-math').innerHTML = '<p>The perimeter is:' + (2 * (3 + 5)) + '</p>'
}