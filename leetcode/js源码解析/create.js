function create(obj) {
  // 返回一个实例对象
  // 对象，它的原型对象是obj
  // xxx.__proto__ = obj;
  // return xxx.__proto__;
  function F() {}
  F.prototype = obj;
  return new F();
}

var Person = {
  name: "noname",
  age: 0,
  greet:function(){
    console.log(`Hello, ${this.name}`)
  }
}
var tom = create(Person);
tom.name = 'tom';
tom.age = '18';
tom.greet();
