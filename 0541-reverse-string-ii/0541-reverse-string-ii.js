/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result="";
    for(let i=0;i<s.length;i+=2*k){
     let ss=s.slice(i,i+k).split("").reverse().join("")
     result+=ss+s.slice(i+k,i+k+k)
    }
     return result
};