/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let uni=[...new Set(nums)]
    if(uni.length>=3){
    return uni.sort((a,b)=>b-a)[2]
    }
    return Math.max(...uni)
};