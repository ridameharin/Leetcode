/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let arr=nums[0]
    for(let i=1;i<nums.length;i++){
        arr=arr.filter((value)=>nums[i].includes(value))
    }
    return arr.sort((a,b)=>a-b)
};