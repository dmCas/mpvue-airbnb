const eachK = [2, 3, 1, 2, 5]
let count = 0;
function num_OfArr(start, end){
   for(var i=0; i<eachK.length; i++){
     if( (i+1) === end - eachK[i] ){
      count++;
      if((i+1) == start){
        console.log(count)
        return true
      }
      num_OfArr(start,(i+1))
     }
     else if((i+1)  === end + eachK[i]){
      count ++;
      //(1,4)
      if((i+1) == start){
        console.log(count)
        return true
      }
      num_OfArr(start,(i+1)) 
     }
   }
   return 
}
num_OfArr(1,5)