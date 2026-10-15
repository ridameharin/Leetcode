/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let a=Math.max(...nums)
    let b=Math.min(...nums)
    while(b !== 0){
        let c=b
        b=a%b
        a=c
    }
    return a
};