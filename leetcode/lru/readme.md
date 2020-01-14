- es5 
  js中， 函数是一等公民
  js的过去 没有Class 关键字
  function LRUCache
  类的构造函数
  定义了一个类， new LRUCache 可以被实例化
  new 过程发生了什么？ 
  生成了一个对象 {} Object 
  内存中空的 { } new  
  加上属性  构造函数 给对象添加属性 
  this 
  类添加一个方法 LRUCache.prototype

  面向对象 类， 构造函数 方法 属性
          class       constructor
        function A    函数本身 prototype this.
  函数具有prototype属性 
  火车头是构造函数 prototype对象 基于原型的面向对象

  - 任何函数都有prototype属性 它的值是对象 
    通过 key => function(){}
  - 任何对象都有__proto__属性， 指向构造函数的prototype属性
    JS的面向对象， 类和实例的关系， 不是父子关系，没有血缘
    基于原型的 
  - new的过程 构造函数 被执行， 创造一个this 指向对象 加了属性
    对象的__proto__属性 可以找到原型链上的方法
    cache instanceof LRUCache 
    JS中没有类的概念， LRUCache 也是对象 
- es6 7 8 9

空间内            容量
1                  1
[1 2]              0
get(1)             0 
[2 1]              0 


- 数组 能装 有容量的
- 添加元素 push 最后一个元素是 最重要的
- [0]这个元素可以被删除的
- 移除的临界点 是判断空间是否剩余 
  有则直接push 没有则移除后添加
- get 在哪？ 放到最后来 在原位置删除， 放到最后