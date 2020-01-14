// 可以被运行的对象叫函数
function LRUCache (capacity) {
  this.capacity = capacity; //容量
  this.obj = {};  // get put 存储数据
  // push splice pop unshift
  this.arr = [];  //优先级
}

LRUCache.prototype.get = function (key) {
  var val = this.obj[key];
  //处理优先级
  if (val) {
    var index =this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return this.obj[key]
  }
  else{
      //如果没有 -1
    return -1;
  }
}

LRUCache.prototype.put = function (key, value) {
  if(this.obj[key]){
    //已存在
    this.obj[key] = value;//更新值
    //调整它的优先级， 在某个位置？先删除，在将新值移到最前面
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return;
  }
  
  
  if(this.capacity === this.arr.length){
    //放满了
    var k = this.arr.pop();
    this.obj[k] = undefined;
  }
  this.obj[key] = value;
  //数组头部插入， 最前面是最优先
  this.arr.unshift(key);
}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));

console.log(cache.arr, cache.obj);
// console.log(cache.capacity);