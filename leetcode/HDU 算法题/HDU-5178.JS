const array = [-100, 0, 100, 101, 102]
function Pairs(arr, k){
  var count = 0;
  var Mid = 0;
  arr.sort((a,b) => {return a-b})
  for(let i=0; i<arr.length; i++){
    let m = i+1;
    let r = arr.length - 1;
    while(m<=r){
      Mid=(m+r)/2;
      if(Math.abs(arr[Mid]-arr[i]) > k) 
      {
        r = Mid -1
      }
      else m = Mid + 1;
    }
    count = count + r -i;
    console.log(count)
  }
  return count
}
Pairs(array,5 )