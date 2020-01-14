var a = [1, 2 ,3]
for(let i=0; i<a.length;i++){
  a.splice(a.indexOf(Math.max(...a)),1)
  console.log(a)
}