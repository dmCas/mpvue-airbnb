var a = [[1,2,3],
         [2,3,4],
         [2,4,1]];
// console.log(a)

let path = []
let sum = 0
let min = 999

function Min_price(){
  for(let i=0; i<a.length; i++){
    path[i]=0
  }
  backTrack(0);
  console.log(min)
}

function backTrack(t){
  if(t==a.length) {
    if(sum<min) {
      min=sum;
    }
    return
  }
  else {
    // console.log(a.length)
    for(let i=0;i<a.length;i++) {			
      if(path[i]==0) {
        path[i]=1;
        // console.log(path)
        sum+=a[t][i];
        backTrack(t+1);
        sum-=a[t][i];
        //回溯
        path[i]=0;
      }
    }
  }	
}


Min_price()
