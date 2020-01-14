const arr = [12, 23, 123, 53, 67, 34, 24, 89]

// 1. 选择一个元素作为基准 （一般是中间元素）
// 2，所有小于基准的元素都移到基准的左边，所有大于基准的元素都移到基准的右边
// 3. 对基准左右两边的子集，重复 1 2 步骤

function quickSort(arr) {
  if(arr.length <= 1) {return arr}
  let midIndex = Math.floor((arr.length)/2)
  let pivot = arr.splice(midIndex, 1)[0] // 基数
  var left = []
  var right = []

  for (var i = 0; i<arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return  quickSort(left).concat([pivot],quickSort(right))
}
console.log(quickSort(arr))