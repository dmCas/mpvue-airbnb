const a = {
  b: 1
}

function fn() {
  console.log('a的值发生改变了', a.b)
}
function bindData() {
  //返回a对象的所有key值
  Object.keys(a).map(key => {
    let v = a[key] // a[key] = a.b
    //用来监听对象的变化 修改对象中的属性 
    //监听的对象a 作用的key 
    Object.defineProperty(a, key, {
      get () {
        console.log('正在读取a里面的值')
        return v
      },
      set (newvalue) { //写入属性时调用的方法
        v = newvalue
        fn()
      }
    })
  }) 
}

bindData()
// console.log(a.b)
a.b = 123
a.b = 132