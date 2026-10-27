/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    let even=s.lastIndexOf("2")
    return s.slice(0,even+1)
};