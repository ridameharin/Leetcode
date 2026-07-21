/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let n1=n.toString(2)
    let n2=n1.padStart(32,"0").split("").reverse().join("")
    let n3=parseInt(n2,2)
    return n3
};