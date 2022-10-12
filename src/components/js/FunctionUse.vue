<template>

  <div>
    <h1>函数</h1>
    <div class="part">
      <h2>基本使用和介绍</h2>
      <div>函数基本形态：</div>
      <pre class="code-pre">
    function functionName(param1, param2....) {
       return //可选
    }
      </pre>

      <div><br/>举个例子</div>
      <pre class="code-pre">
    function myFunction(x, y) {
      return x + y;
    }
    let t3 =  function (x, y) { return x + y } // 匿名函数，函数没有名称，但是它用 t3 变量存储起来了
    t3();// 调用 t3 函数
      </pre>

      <div><br>函数自调用:其实就是调用一下自己，无论是否匿名，都可以自调用</div>
      <pre class="code-pre">
    (function myFunction(x, y) {
      return x + y;
    })()
    (function (x, y) {
      return x + y;
    })()
      </pre>

      <div><br>箭头函数：类似于 java 的 lambada 形态</div>
      <pre class="code-pre">
    let t =  (x, y) => x + y // 函数 t 和上面的函数功能等同
    let t2 = () => { // 如果有多行，则不能省略大括号
      console.log('I do not have this')
      console.log('I do not have this')
    }
      </pre>

      <div><br>箭头函数与普通函数的区别：</div>
      <ol>
        <li>箭头函数一定是匿名函数</li>
        <li>箭头函数可以省略大括号（只有一行代码）</li>
        <li>省略大括号的情况下，当前代码行的返回值即箭头函数的返回值</li>
        <li>箭头函数没有自己的 this</li>
        <li>箭头函数不适合定义成对象方法，因为它没有名字, 也没有 this</li>
      </ol>
    </div>

    <div class="part">
      <h2>函数的属性和方法</h2>
      <div><br>在 js 中除了基本类型，一切皆对象，函数也不例外，可以理解成函数是一种特殊的对象。<br>
        作为对象，它就有自己的属性和方法。
      </div>

      <div><br>参数</div>
      <pre class="code-pre">
    function myFunction2(a, b) {
      let count = arguments.length // 获取真实的参数长度
      for (let i = 0; i 小于 count; i++) {
        console.log(arguments[i]) // 打印每个参数
      }
    }
    myFunction2(1, 2, 3, 4) // 传入的比实际上要多
      </pre>

    </div>

    <div class="part">
      <h2>call() 与 apply() 方法</h2>
      <div>call() 方法允许调用另一个对象的方法</div>
      <pre class="code-pre">
    let person = {
      fullName: function(city, country) {
        // 此时 this 对象就是 person1
        return this.firstName + " " + this.lastName + "," + city + "," + country;
      }
    }
    let person1 = {
      firstName:"Bill",
      lastName: "Gates"
    }
    person.fullName.call(person1, "Seattle", "USA");
      </pre>

      <div><br><br>apply() 方法与 call()方法类似，不同的是，apply 方法在接收参数时，接收的是一个数组</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FunctionUse",
  data() {
    function myFunction2(a, b) {
      let count = arguments.length
      for (let i = 0; i < count; i++) {
        console.log(arguments[i])
      }
    }

    // myFunction2(1, 2, 3, 4)

    // (function myFunction(x, y) {
    //   return x + y;
    // })()
    // (function (x, y) {
    //   return x + y;
    // })()


    let t1 = (x, y) => x + y
    let t3 = function (x, y) {
      return x + y
    }
    let te = () => {
      console.log('I do not have this')
      console.log('I do not have this')
    }
    return {}
  },
}
</script>

<style scoped>
ol {
  padding-left: 1em;
}

li {
  list-style: decimal;
}
</style>