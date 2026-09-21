/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
      let ordering=s.split(" ").sort((a,b)=>{return Number(a[a.length-1])-Number(b[b.length-1])})
       let removing=ordering.map((word)=>word.slice(0,-1)).join(" ")
      return removing
};