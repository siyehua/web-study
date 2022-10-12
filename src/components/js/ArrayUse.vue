<template>
  <div class="part">
    <h1>数组</h1>
    <span>基本操作：
    </span>
    <pre><code class="language-javascript language-css">
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
    </code></pre>

  </div>

  <div class="part">
    <h2>识别数组</h2>
    <span><br/>如何识别数组？因为数组是 object，假设使用 typeof cars, 返回的是 object, 为了避免这个问题，可以使用：<br/>
        Array.isArray(cars); 来检查是不是数组， 或 fruits instanceof Array
    </span>
  </div>

  <div class="part">
    <h2>排序</h2>
    <span><br/>sort();            // 对 fruits 中的元素进行排序<br/>
    reverse();         // 反转元素顺序<br/>
    自定义排序 var points = [40, 100, 1, 5, 25, 10];<br/>
    points.sort(function(a, b){return a - b}); <br/>
    </span>

  </div>
  <div class="part">
    <h2>其他常用的方法</h2>
    <table>
      <tr class="title">
        <td>方法名</td>
        <td>作用</td>
        <td>例子</td>
      </tr>
      <tr class="item">
        <td>forEach()</td>
        <td>迭代</td>
        <td>注意，这个方法就好像 java 中的流，kotlin 中的方法是一样的，不可打断。<br/>如果你非要打算，说明你不应该使用这个方法
        </td>
      </tr>
      <tr class="item">
        <td>map()</td>
        <td>变幻（产生新数组）</td>
        <td></td>
      </tr>
      <tr class="item">
        <td>filter()</td>
        <td>过滤</td>
        <td></td>
      </tr>
      <tr class="item">
        <td>every()</td>
        <td>检查每一个</td>
        <td></td>
      </tr>
      <tr class="item">
        <td>indexOf()</td>
        <td>索引得到符合条件的 index</td>
        <td>返回的是 index</td>
      </tr>
      <tr class="item">
        <td>join()</td>
        <td>将数组合并成一个字符串</td>
        <td></td>
      </tr>
      <tr class="item">
        <td>lastIndexOf()</td>
        <td>索引得到最后一个符合条件的 index</td>
        <td>返回的是 index</td>
      </tr>
      <tr class="item">
        <td>find()</td>
        <td>索引得到符合条件的元素</td>
        <td>返回的是符合条件的元素</td>
      </tr>
      <tr class="item">
        <td>findIndex()</td>
        <td>同 indexOf</td>
        <td></td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: "ArrayUse",
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
    return {}
  },
}
</script>

<style scoped>

</style>