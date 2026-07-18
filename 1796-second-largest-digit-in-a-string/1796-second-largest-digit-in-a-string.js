/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let rslt="";
    for(let num of s){
        if(num>="0" && num<="9"){
            rslt+=num
        }
    }
    let dup=[...new Set(rslt)];
    let nums=dup.sort((a,b)=>b-a)
    if(nums.length<2){
        return -1
        }
        return Number(nums[1])
    
};