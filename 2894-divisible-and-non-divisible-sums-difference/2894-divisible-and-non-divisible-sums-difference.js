/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
       let arr=[];
    for(let i=1;i<=n;i++){
        arr.push(i)
    }
    let num1=arr.filter((a)=>a%m!==0).reduce((b,c)=>b+c,0)
    let num2=arr.filter((d)=>d%m===0).reduce((e,f)=>e+f,0)
    return num1-num2
};