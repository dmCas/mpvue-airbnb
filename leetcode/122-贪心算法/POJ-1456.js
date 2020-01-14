//定义利润
const profit = [20, 2, 10, 100, 8, 5, 50] // 5 50 10 100 8 20 2
//定义最大期限
const ddl = [1, 1, 3, 2, 2, 20, 10] // 20 10 3 2 2 1 1
var a = []
var b = ddl;

//删除相同期限盈利小的
function deletePro(){
  for(let m=0; m<profit.length; m++){
    for(let n=m+1;n<profit.length;n++){
      if(ddl[m] == ddl[n]){
        if(profit[m]>profit[n]){
          profit[n] = 0;
        }
        else{
          profit[m] = 0;
        }
      }
    }
  }
  return profit;
}

function ddl_paixu(){
  deletePro()
  for(let i=0; i<profit.length;i++)
  {
    a.push(profit[b.indexOf(Math.max.apply(null,ddl))])
    // console.log(profit[b.indexOf(Math.max.apply(null,ddl))])
    //将这个最大的数变为0 -> 方便排序
    ddl[b.indexOf(Math.max.apply(null,ddl))] =0;
    // console.log(ddl)
  }
  var sum = 0;
  for(let j=0;j<6;j++){
    sum = sum + a[j]
  } 
  console.log(sum)
}

ddl_paixu()


