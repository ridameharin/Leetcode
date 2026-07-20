/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let n1=[];
    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
             n1.push("FizzBuzz")
        }
        else if(i%3===0){
             n1.push("Fizz")}
        else if(i%5===0){
             n1.push("Buzz")}
        else{n1.push(i.toString())}
    }
    return n1
}