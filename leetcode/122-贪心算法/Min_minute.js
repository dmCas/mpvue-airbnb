//概率为 1 则所有磁盘占满一个空间
let arr = [60, 50, 133, 542]
let pro = [0.3, 0.2, 0.15 ,0.15]
var Sum_minute = 0;
function Average(){
  let averArr = []
  let a = []
  for(let i=0;i<arr.length;i++){
    var data = arr[i]*pro[i]
    averArr.push(data)
    a.push(data)
  }
  console.log("加权数组为："+averArr)
  var j = averArr.length;
  // 排序 并返回位置
  for(let i=0;i<j;i++){
    var index = averArr.indexOf(averArr.sort()[0])
    var valueof = a.indexOf(averArr.sort()[0])
    console.log("排列后的原数组下标为："+valueof)
    averArr.splice(index, 1);
    
  }
}
Average()