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
      <pre v-highlight><code>
    let a = 'fefef'
    let b = new String('fefef')
    </code></pre>
      <span>上面的例子，a,b 是不一样的，如果 a == b , 比较的值，同等。<br/>
      但是 a === b, 则返回 false，他们的类型不一样。<br/>
      同样的，Number 数值也是，这个类似于 java 的包装类型和基本类型<br/>
      </span><br/><br/>
      在 JavaScript 中有 5 种不同的可以包含值的数据类型：<br/>
      string<br/>
      number<br/>
      boolean<br/>
      object<br/>
      function<br/><br/><br/>
      有 6 种类型的对象：<br/>
      Object<br/>
      Date<br/>
      Array<br/>
      String<br/>
      Number<br/>
      Boolean<br/><br/><br/>
      以及 2 种不能包含值的数据类型：<br/>
      null<br/>
      undefined<br/>
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
      <h2>常用的数学方法</h2>
      <table>
        <tr class="title">
          <td>方法名</td>
          <td>作用</td>
        </tr>
        <tr class="item">
          <td>acos(x)</td>
          <td>返回 x 的反余弦值，以弧度计</td>
        </tr>
        <tr class="item">
          <td>cos(x)</td>
          <td>返回 x 的余弦值</td>
        </tr>
        <tr class="item">
          <td>asin(x)</td>
          <td>返回 x 的反正弦值，以弧度计</td>
        </tr>
        <tr class="item">
          <td>sin(x)</td>
          <td>返回 x 的正弦值</td>
        </tr>
        <tr class="item">
          <td>atan(x)</td>
          <td>以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。</td>
        </tr>
        <tr class="item">
          <td>tan(x)</td>
          <td>返回角的正切</td>
        </tr>
        <tr class="item">
          <td>atan2(x,y)</td>
          <td>返回从 x 轴到点 (x,y) 的角度</td>
        </tr>
        <tr class="item">
          <td>ceil(x)</td>
          <td>对 x 进行上舍入</td>
        </tr>
        <tr class="item">
          <td>floor(x)</td>
          <td>对 x 进行下舍入</td>
        </tr>
        <tr class="item">
          <td>round(x)</td>
          <td>把 x 四舍五入为最接近的整数</td>
        </tr>
        <tr class="item">
          <td>abs(x)</td>
          <td>绝对值</td>
        </tr>
        <tr class="item">
          <td>log(x)</td>
          <td>对数</td>
        </tr>
        <tr class="item">
          <td>max(x,y,z,...,n)</td>
          <td>最大值</td>
        </tr>
        <tr class="item">
          <td>min(x,y,z,...,n)</td>
          <td>最小值</td>
        </tr>
        <tr class="item">
          <td>min(x,y,z,...,n)</td>
          <td>最小值</td>
        </tr>
        <tr class="item">
          <td>pow(x,y)</td>
          <td>返回 x 的 y 次幂</td>
        </tr>
        <tr class="item">
          <td>sqrt(x)</td>
          <td>返回 x 的平方根</td>
        </tr>
        <tr class="item">
          <td>random()</td>
          <td>	返回 0 ~ 1 之间的随机数</td>
        </tr>
        <tr class="item">
          <td>round(x)</td>
          <td>把 x 四舍五入为最接近的整数</td>
        </tr>
      </table>

      <div><span>Math.floor(Math.random() * 10);		// 返回 0 至 9 之间的数</span></div>
    </div>

    <div class="part">
      <h2>for 循环对比</h2>
      除了 fori 循环，以及数组自带的forEach 方法，js 还有两种循环方法。<br/>
      for in是ES5标准，遍历key.    (遍历对象返回key, 遍历数组项返回数组的index)<br/>
      for of是ES6标准，遍历value. 它是应用与有迭代器的类型，普通的 object 没有迭代器无法遍历<br/>
    </div>

  </div>
</template>

<script>
export default {
  name: "JsBase",
  data(){
    let myobj={

      arr:[

        {id:1, name:"张三", remark:"100,30"},

        {id:2, name:"李四", remark:"100,40"},

        {id:3, name:"赵四", remark:"200,130"},

        {id:4, name:"钱三", remark:"300,30"},

        {id:5, name:"孟敏", remark:"400,50"},

      ],
      funName:function (){
        //方法
        console.log('方法', this);
      },

    }

    "use "
    function myFuncation() {
      // 函数
      console.log('函数', this)
    }


    for(let i in myobj){
      console.log(i);  //返回：arr
    }

    for(let i in myobj.arr){

      console.log(i);  //返回：0,1,2,3,4

    }

    for(let i of myobj.arr){

      console.log(i);  //返回如下结果列表

    }
    const person = {
      name: "Bill",
      age: 19,
      city: "Seattle"
    };

    JSON.parse(JSON.stringify(person))

    return {
      myobj,
      myFuncation,
    }

  },
}
</script>

<style scoped>

</style>