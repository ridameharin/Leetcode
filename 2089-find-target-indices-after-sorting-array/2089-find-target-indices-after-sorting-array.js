/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let result=[];
    let sorting=nums.sort((a,b)=>a-b).filter((n,i)=>{
        if(n===target){
            result.push(i)
        }
    })
    return result
};