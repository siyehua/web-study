<template>
  <div>
    <h1>JS 基础</h1>

    <div class="part">
      <h2>变量，常量</h2>
      <span>javascript 中的变量有两种 var 和 let, 常量 const<br/>
      常量 const 类似于 java 中的 final，虽然不允许重新赋值，但是如果这是一个对象，可以修改对象里面的值<br/>
      let 是 var 的升级版，一般来说，能用 let 就不要用 var,他们之间的区别是：<br/>
      1.var 会声明提升，let 不会（即 var 生命的变量可以提前使用，不会报错）<br/>
2.var 是函数作用域，let 是块级作用域(在函数中声明，会被提到函数的最前面)<br/>
3.var 允许重复声明，let 不会（共享同一个值）<br/>
4.var 声明的全局变量，会成为全局对象的属性，let不会（var 全局声明的变量可以绑定在window上，直接window.***可以拿到该数据，let声明的变量，用window.****是undefined）<br/>

      </span>

    </div>

    <div class="part">
      <h2>数据类型</h2>
      <span>基本类型和对象是不一样的<br/>
      </span>
      <pre class="code-pre">
    let a = 'fefef'
    let b = new String('fefef')
    </pre>
      <span>上面的例子，a,b 是不一样的，如果 a == b , 比较的值，同等。<br/>
      但是 a === b, 则返回 false，他们的类型不一样。<br/>
      同样的，Number 数值也是，这个类似于 java 的包装类型和基本类型<br/>
      </span>
    </div>

    <div class="part">
      <h2>类型</h2>
      <span>typeof 用来判断一个变量是什么类型，<br/>
      instanceof 用来判断当前类型是不是某个类型
      </span>
    </div>

    <div class="part">
      <h2>数字</h2>
      <span>所有的数字都是浮点型，都是 64 位<br/>
      toString() 将数字转成字符串 <br/>
      toPrecision(length)  (四舍五入)返回字符串值，它包含了指定长度的数字 <br/>
      toFixed(length) 返回字符串值，它包含了指定长度的数字 <br/>
      valueOf() 如果是 Number 对象，则会返回拆包装（转成了基本类型 number）<br/>
      Number() 将字符串转成 Number 对象<br/>
      parseFloat() 转成浮点数或者 NaN<br/>
      parseInt() 转成整数或者 NaN<br/>
      Number.MAX_VALUE; 最大值<br/>
      Number.MIN_VALUE; 最小值<br/>
      Number.NEGATIVE_INFINITY;表示负的无穷大（溢出返回）。<br/>
      Number.POSITIVE_INFINITY;表示无穷大（溢出返回）。<br/>
      Number.NaN;（Not a Number 不是一个数字）。<br/>
      </span>
    </div>

    <div class="part">
      <h2>数组</h2>
      <span>基本操作：
    </span>
      <pre class="code-pre">
    let cars = ["Saab", "Volvo", "BMW"]; // 新建一个数组
    cars[0];// 访问第一个元素
    cars[1] = "fefe";// 修改第二个元素
    cars.length;// 数组的长度
    cars[cars.length] = '4';//增加一个元素1
    cars.push('4');//增加一个元素2
    cars.unshift("a");//增加一个元素到最前面
    cars.pop();//删除最后一个元素
    cars.shift();//删除第一个元素
    cars[100] = 100;//增加很多个元素，中间没有的值是 undefined

    //这句话的意思是，在 index = 1 的位置，，删除 0 个元素，添加了一个元素 '3'
    //这个方法也可以用来删除多个元素
    cars.splice(1, 0, '3')

    let myGirls = ["Cecilie", "Lone"];
    myGirls.concat(cars);   // 连接 myGirls 和 cars

    cars.slice(1, 3);// 裁剪数组，类似于字符串的操作

    cars.forEach(aaa) //循环访问1
    function aaa(value) {
      console.log(value)
    }

    for (let i = 0; i 小于 cars.length; i++) {//循环访问2
      console.log(cars[i])
    }
    </pre>
      <span><br/>如何识别数组？因为数组是 object，假设使用 typeof cars, 返回的是 object, 为了避免这个问题，可以使用：
        Array.isArray(cars); 来检查是不是数组， 或 fruits instanceof Array
    </span>

      <span><br/>join(str) 方法能将数组合并成一个字符串<br/>
        sort();            // 对 fruits 中的元素进行排序<br/>
        reverse();         // 反转元素顺序<br/>
       自定义排序 var points = [40, 100, 1, 5, 25, 10];<br/>
points.sort(function(a, b){return a - b}); <br/>
    </span>

      <span>
        数组的迭代方法, 和 java，kotlin 的流很像：<br/>
        forEach() 迭代<br/>
        map() 变幻（产生新数组）<br/>
        filter() 过滤<br/>
        every() 检查<br/>
        indexOf() 索引得到符合条件的 index<br/>
        lastIndexOf() 索引得到最后一个符合条件的 index<br/>
        find() 索引得到符合条件的元素<br/>
        findIndex() 同 indexOf <br/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "JsBase",
  data() {
    let cars = ["Saab", "Volvo", "BMW"]; // 新建一个数组
    cars[0];// 访问第一个元素
    cars[1] = "fefe";// 修改第二个元素
    cars.length;// 数组的长度
    cars[cars.length] = '4';//增加一个元素1
    cars.push('4');//增加一个元素2
    cars.unshift("a");//增加一个元素到最前面
    cars.pop();//删除最后一个元素
    cars.shift();//删除第一个元素
    cars[100] = 100;//增加很多个元素，中间没有的值是 undefined

    //这句话的意思是，在 index = 1 的位置，，删除 0 个元素，添加了一个元素 '3'
    //这个方法也可以用来删除多个元素
    cars.splice(1, 0, '3')

    let myGirls = ["Cecilie", "Lone"];
    myGirls.concat(cars);   // 连接 myGirls 和 cars

    cars.slice(1, 3);// 裁剪数组，类似于字符串的操作

    cars.forEach(aaa) //循环访问1
    function aaa(value) {
      console.log(value)
    }

    for (let i = 0; i < cars.length; i++) {//循环访问2
      console.log(cars[i])
    }
  },
}
</script>

<style scoped>

</style>