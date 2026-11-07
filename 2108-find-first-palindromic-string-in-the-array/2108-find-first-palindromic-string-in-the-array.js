/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
   let palli= words.find(word=>word===word.split("").reverse().join(""))
   return palli || ""
};