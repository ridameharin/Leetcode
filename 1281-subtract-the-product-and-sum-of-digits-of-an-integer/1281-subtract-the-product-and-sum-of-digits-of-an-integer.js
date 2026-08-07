/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num=n.toString().split("")
    let num1=num.reduce((a,b)=>Number(a*b))
    let num2=num.reduce((a,b)=>Number(a)+Number(b))
    return num1-num2
};