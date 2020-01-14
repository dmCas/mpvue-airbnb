var data = [2,5,3,8]

function breakArray(array, target){
  
  //对数组进行排序
  array.sort((a,b)=> b-a)
  //创建一个数组用于记录每一次符合要求的集合
  let path = []
  //用于返回结果
  let res = []
  const len = array.length
  const min = array[len-1]

  //回溯算法核心
  function backTrack(array, target, i, path){
    //跳出递归条件
    if(target === 0){
      return res.push(path.slice())
    }
    if(target < min){
      return
    }
    //循环查找
    for (let start = i; start < len; start++) {
      if (array[start] === array[start - 1] && start > i) continue;
      path.push(array[start])
      backTrack(array, target - array[start], start + 1, path)
      path.pop()
    }
  }
  backTrack(array, target, 0, path);
  return res;
}

console.log(breakArray(data,5))