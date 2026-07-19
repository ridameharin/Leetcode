/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str=strs[0];
    for(let i=1;i<strs.length;i++){
        while(!strs[i].startsWith(str)){
            str=str.slice(0,-1)
        }
    }
    return str
};