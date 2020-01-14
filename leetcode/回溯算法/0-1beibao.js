const W = [1, 2, 3]
const V = [3, 2 ,1]
let path = [0 , 0, 0]
let CurW = 0;
let CurV = 0;
const BagV = 3;
let BestV = 0;
let BestPath = []

function backTrack(start){
  if(start > path.length-1){
    if(CurV > BestV){
      BestV = CurV
      for(let i=0; i<path.length; i++){
        BestPath[i] = path[i]
      }
    }
  }
  else{
    for(let i=0; i<=1; i++)
    {
      path[start] = i
      if(i==0)
      {
        backTrack(start+1)
      }
      else{
        if((CurW+W[start]) <= BagV){
          CurW += W[start]
          CurV += V[start]
          backTrack(start+1)
          CurW -= W[start]
          CurW -= V[start]
        }
      }
    }
  }
}

backTrack(0)