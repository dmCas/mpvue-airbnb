var coinChange = function(coins, amount) {
    var count=0;
    for(let i=1; i<coins.length-1; i++){
        if( amount > coins[coins.length-1]){
            amount = amount - coins[coins.length-1]
            // console.log(amount)
            count++
            i=1
        }
        else if( coins[i-1]<=amount  && amount < coins[i]){
            amount = amount - coins[i-1]
            
            count++
            console.log(count)
            i=1
        }
        else if(amount === 0){
            return count
        }
        else return -1
    }
    
};
coinChange([1,2,5,10,15], 18)
// console.log(coinChange([1,2,5,10,15], 18))