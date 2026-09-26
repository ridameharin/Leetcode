/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let big=0
    for(let wealth of accounts){
        let sum=0
        for(let money of wealth){
            sum+=money
        }
        if(sum>big){
            big=sum
        }
    }
        return big
};