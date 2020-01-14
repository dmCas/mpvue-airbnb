# 预编译 四部曲 发生在函数执行之前
  1. 创建一个AO对象
  2. 找形参和变量声明,将变量声明和形参作为AO属性名,值为Undefined
  3. 将实参值和形参值统一
  4. 在函数体找函数声明,将函数名作为AO对象的属性名，值赋予函数体

  AO { 
    a: function() {},
    b: undefined,
    d: funtion () {}
  }
  1. (1)->AO{}
  2. a: undefined
     b: undefined
  3. a: undefined -> a: 1
  4. a: function() {},
     d: funtion () {} 
  
  执行后fn(1)

    AO { 
    a: 123,
    b: function() {},
    d: funtion () {}
  }

# 预编译也发生在全局
  1. 创建一个GO对象
  2. 找形参和变量声明,将变量声明和形参作为GO属性名,值为Undefined
  3. 在函数体里找函数声明，将函数名作为GO对象的属性名，值赋予函数体
  GO == Window
  GO {

  }


