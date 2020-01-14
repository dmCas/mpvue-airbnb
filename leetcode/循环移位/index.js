// var list = [-1, -100, 3, 99], k = 2
var list = [-1, -100, 3, 99]
function RShift(arr, k){
  const copy = [...arr]
  const n = arr.length
  if(k % n === 0) return 
  for(let i=0; i<n; i++){
    arr[i] = copy[(k+1) % n]
  }
  console.log(arr)
  return arr
}
RShift(list, 2)



//三次反转
//[0, n-k-1]
//[n-k, n-1]
//[0, n-1]
function reverse(list, start, end) {
  let t = null;
  while (start < end) {
    t = list[start]
    list[start] = list[end]
    list[end] = t
    start++
    end--
  }
}

function RShift(list, k){
  const n = list.length
  if(k % n === 0) {return list}
  reverse(list, 0, n-k-1)
  reverse(list, n-k, n-1)
  reverse(list, 0 ,n-1)
  return list
}