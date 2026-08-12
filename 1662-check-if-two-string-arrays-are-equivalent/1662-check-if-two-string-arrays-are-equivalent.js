/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let a=word1.reduce((b,c)=>b+c,0)
    let aa=word2.reduce((d,e)=>d+e,0)
        return a===aa;
};