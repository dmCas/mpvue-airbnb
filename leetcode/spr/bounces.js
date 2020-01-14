//salary type

//ES6 箭头赋值
// const caculateBouns = () =>{

// }

// const caculateBouns = 1; //类型由值决定 const常量一定需要赋值 且不能修改常量
let caculateBouns = null;
// 对象字面量 发钱的策略 
let categories = {  //策略模式 职责分离
    'S': (salary) => {
        return salary* 60
    },
    'A': (salary) => {
        return salary* 24
    },
    'B': (salary) => {
        return salary* 18
    },
    'C': (salary) => {
        return salary* 15
    },
    'D': (salary) => {
        return salary* 12
    }
} 
//计算的过程
caculateBouns = (salary, type = 'C') => {
    let bounce = categories[type](salary)
    return bounce;
} 
console.log(caculateBouns(20000,'S'));