/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result=[]
    let mapping=words.filter((a,b)=>{
        if(a.includes(x)){
            result.push(b)
        }})
    return result
};