var maxProfit = function(prices) {
  let profit=prices[0];
  let deviceProfit = 0;
  for(let i = 0;i<prices.length; i++){
      if(prices[i]<prices[i+1]){
          profit = prices[i+1] - prices[i]
          // console.log(profit)
          deviceProfit += profit
          
      }
     
  }
  console.log(deviceProfit)
  // function sum(arr) {
  //     return eval(arr.join("+"));
  //     };

};
maxProfit([1, 2, 3, 4, 5])