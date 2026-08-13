/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let n=sentences.map((s)=>{
        return s.split(" ").length
    })
    let sorting=n.sort((a,b)=>b-a)
    return sorting[0]
};