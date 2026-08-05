/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count=[];
    let count2=[];
    for(let i=1;i<=a;i++){
        if(a%i===0){
            count.push(i)
        }
    }
        for(let j=1;j<=b;j++){
            if(b%j===0){
                count2.push(j)
            }
        }
    const comm=[...new Set(count.filter(value=>count2.includes(value)))]
    return comm.length
};