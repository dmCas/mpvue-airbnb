// 缓存算法
// 函数 es5 首字母大写的函数， 就是一个类
function LRUcache (title) {
  // 构造函数 
  //类的属性
  //this 是指针 只有指向要生成的对象
  console.log(this);
  this.title = title;
}
// 加方法
LRUcache.prototype.sayHello = function () {
  console.log(`你好，${this.title}`);
}
// 静态方法
LRUcache.buyCar = function() {
  console.log('买车');
}
//对象 实列
let cache = new LRUcache('井柏然');
// console.log(cache.title);
console.log(cache.sayHello());
// console.log(cache.buyCar());
LRUcache.buyCar();
// console.log(cache);
console.log(cache.__proto__ == LRUcache.prototype);
console.log(cache instanceof LRUcache);//获取某个对象是否是这个类的实例
