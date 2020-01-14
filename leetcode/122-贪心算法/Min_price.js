var Sum = 0;
let arrList = [3, 1, 5, 2];
function Min_price(arr){
  for(let i=arr.length; i>0; i--){
    Math.min.apply(null,arr)
    //从后往前 求每个月最小
    Sum=Sum+Math.pow(Math.min.apply(null,arr),i)
    //移除这个数
    var index = arr.indexOf(Math.min.apply(null,arr));
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  console.log("总钱数最少："+Sum*1000)
}

Min_price(arrList)

// console.log(Math.min.apply(null,[3, 1, 5, 6]))
