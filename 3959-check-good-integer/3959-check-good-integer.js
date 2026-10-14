/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let a=n.toString().split("").reduce((a,b)=>Number(a)+Number(b),0)
    let b=n.toString().split("").map((c)=>c*c).reduce((a,b)=>Number(a)+Number(b),0)
    if(b-a>=50){
        return true
    }
    return false
};