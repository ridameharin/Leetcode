/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str=s.trim().split(" ").at(-1).length
    return str
};