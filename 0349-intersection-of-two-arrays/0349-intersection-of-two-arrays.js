/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr=nums1.filter((value)=>nums2.includes(value));
    return [...new Set(arr)];
};