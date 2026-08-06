/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let srt=prices.sort((c,d)=>c-d)
    let a=prices[0]+prices[1]
    if(a<=money){
        return money-a
    }
    return money
};