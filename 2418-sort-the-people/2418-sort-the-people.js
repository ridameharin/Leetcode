/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let result=names.map((name,index)=>({name,num:heights[index]}))
    .sort((a,b)=>b.num-a.num)
    .map((item)=>item.name)
    return result
};