// 185974
// 3 -> 1859 找 9
// 7 -> 7
// 4 -> 4
// 749
// 474656043
// 4 474656-> 7
// 4656043 -> 6

var data = "178543";
var Num = data.split("");
var Num_data = Num.map(Number);
console.log("原数组:" + Num_data)
var maxAll="";
function removeSdigits(num, s){
  for(let i=num.length-s;i>0;i--){
   
    //找第一个数
    // console.log("ad"+((num.length-i)+1))
    var num1 = num.slice(0,(num.length-i)+1);
    //找到最大的那个数
    var Max1 = Math.max.apply(null,num1)
    maxAll += Max1.toString();
    // console.log(Max1)
    num.splice(0, num.indexOf(Max1)+1); 
    
  }
  console.log(maxAll)
}

removeSdigits(Num_data,4)

