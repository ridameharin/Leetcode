/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let a=n.toString().split("").reduce((a,b)=>Number(a)+Number(b),0)
    let b=n.toString().split("").reduce((a,b)=>a*b,1)
    if(n % (a+b)===0){
        return true
    }
    return false
};