let nums = [1,1,2]
var removeDuplicates = function(nums) {
  // 新建一个数组用于储存去重之后的数字
  let copy = [...nums]
  let newNums = []
  for(let i=0; i<=copy.length; i++){
    let m = copy.shift()
    // console.log(m)
    newNums.push(m)
    copy.lastIndexOf(m)
    copy.splice(0,copy.lastIndexOf(m)+1)
    i=0;
  }
  return newNums.length  
};
removeDuplicates(nums)