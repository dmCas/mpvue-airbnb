var array = [5,-1, 2, -1]
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let sum = 0;
  for(let i = 0; i<array.length; i++){
    // if(maxSum < nums[i]+nums[i+1]){
    //   if(nums[i+1] > maxSum && nums[i] < 0){
    //     maxSum = nums[i+1]
    //     // console.log(nums[i+1])
    //   }
    //   else maxSum = nums[i]+nums[i+1]
    // }
    // else {
    //   if(nums[i]+nums[i+1] > 0 && nums[i+1]>0){
    //     maxSum += nums[i+1]
    //   }
    //   else{
    //     maxSum = maxSum
    //   }
    //   // console.log(1)
    // }
    if(sum < 0){
      sum = 0;
    }
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  console.log(maxSum)
  return maxSum;
};
// i = 0 maxSum = 1
// i = 1 maxSum = -1
// i = 2 maxSum = 4
// i = 3 maxSum = 3
// i = 4 
maxSubArray(array)