/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let rslt=new Set(nums).size;
    return nums.length!==rslt
};