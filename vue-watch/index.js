(function(){
  var o = { a: 1}
  //监听对象 可以修改或增加一个key值
  Object.defineProperty(o, 'b',  {
    get () {
      return this.a
    },
    set (newValue) {
      this.a = newValue
    },
    configurable: true // b 是否可以被再次配置
  })

  console.log(o.b)
  o.b = 2
  console.log(o.a)
})()