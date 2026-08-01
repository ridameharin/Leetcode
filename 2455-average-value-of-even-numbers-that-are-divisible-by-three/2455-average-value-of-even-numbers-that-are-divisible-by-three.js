/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
   let arr=nums.filter(a=>
   (a%2===0 && a%3===0))
   let str=arr.reduce((b,c)=>b+c,0)
   if(arr.length===0){
    return 0;
   }return Math.floor(str/arr.length)
};