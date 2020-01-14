let Initiative = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
let extra = [9, 8, 1, 2, 1, 2, 1, 4, 5, 1]
function sumHurm(arry, extraArray) {
  let sumhurm = 0;
  const copy = [...extraArray]
  //首先击杀附加伤害最高的 
  for(let i=0; i<copy.length; i++){
    var max = Math.max(...extraArray)
    //找到附加伤害最高的下标
    sumhurm = arry[index] + sum(extraArray)
    // console.log(extraArray)
    console.log("第"+ `${i+1}` +"次击杀杀害："+sumhurm)
  }
  
}
function sum(arr) {
  return eval(arr.join("+"));
};
sumHurm(Initiative,extra)