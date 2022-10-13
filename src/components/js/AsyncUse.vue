<template>
  <div>
    <h1>Async 异步</h1>
    <div class="part">
      <h2>回调</h2>
      <div><br>Js 主要通过 Promise 来实现异步，先来简单举一个回调的场景：<br></div>
      <pre v-highlight><code>
    let name = 'old Name'

    /**
     * 打印名字
     * @param name
     */
    function print(name) {
      console.log(name);
    }

    /**
     * 设置名称
     * @param print 回调，打印名字
     */
    function setName(print){
      name = 'new Name';
      // 回调
      print(name)
    }

    setName(print)
    </code></pre>
    </div>

    <div class="part">
      <h2>自带的异步回调函数</h2>
      <div><br>自带的异步函数主要是：setTimeout() 和 setInterval() 方法<br></div>
      <pre v-highlight><code>
    function print(name) {
      console.log(name);
    }

    setTimeout(print,3000,'siyehua') // 3 秒后打印名字
    </code></pre>

      <div><br>setInterval() 方法和 timeout 类似，只是它是一个循环的方法</div>
    </div>

    <div class="part">
      <h2>Promise</h2>
      <div><br>Promise 是一个封装好的异步回调，可以输出成功信息或者错误回调<br></div>
      <pre v-highlight><code>
    let p = new Promise(function (success, error) {
      let a = Math.round(Math.random() * 10);
      if (a % 2 === 0) {
        success('success:' + a)
      } else {
        error('error:' + a)
      }
    })
    p.then(
        function (value) {
          console.log(value)
        },
        function (error) {
          console.log(error)
        }
    )
      </code></pre>

      <div><br>上面是一个 Promise 的简单使用，本质上并不复杂，可以自定义一个，实现类似的功能:<br></div>
      <pre v-highlight><code>
    class MyPromise {
      constructor(fun) {
        this.fun = fun;
      }

      then(success, error) {
        this.fun(success, error)
      }
    }
    let myP = new MyPromise(function (success, error) {
      let a = Math.round(Math.random() * 10);
      if (a % 2 === 0) {
        success('success:' + a)
      } else {
        error('error:' + a)
      }
    })
    myP.then(function (value) {
      console.log( value)
    }, function (error) {
      console.log( error)
    })
      </code></pre>
    </div>


    <div class="part">
      <h2>async</h2>
      <div><br>Promise 很好用，但是写起来比较麻烦，有比较简单的形式, 把上面的例子改造一下：</div>
      <pre v-highlight><code>
    async function print() {
      let a = Math.round(Math.random() * 10);
      if (a % 2 === 0) {
        return ('success:' + a)
      } else {
        return ('error:' + a)
      }
    }

    print().then(function (value) {
      console.log(value)
    }, function (error) { // error 得到的应该是异常，正常都是 return 返回的
      console.log(error)
    })
      </code></pre>

      <div><br>可以看到，不需要借助于 Promise 即可实现</div>
    </div>


    <div class="part">
      <h2>await 关键字</h2>
      <div>await 可以配合 async , 实现当前函数直接处理结果，无需回调</div>
      <pre v-highlight><code>
    async function print112() {
      let p = new Promise(function (success, error) {
        let a = Math.round(Math.random() * 10);
        if (a % 2 === 0) {
          success('success:' + a)
        } else {
          error('error:' + a)
        }
      })
      console.log(await p)
    }
    print112();</code>
     </pre>
    </div>


  </div>
</template>

<script>
export default {
  name: "AsyncUse",
  data() {
    // async function print112() {
    //   let p = new Promise(function (success, error) {
    //     let a = Math.round(Math.random() * 10);
    //     if (a % 2 === 0) {
    //       success('success:' + a)
    //     } else {
    //       error('error:' + a)
    //     }
    //   })
    //   console.log(await p)
    // }
    // print112();
    //
    // async function print111() {
    //   let a = Math.round(Math.random() * 10);
    //   if (a % 2 === 0) {
    //     return ('success:' + a)
    //   } else {
    //     return ('error:' + a)
    //   }
    // }
    //
    // print().then(function (value) {
    //   console.log(value)
    // }, function (error) {
    //   console.log(error)
    // })
    //
    // /**
    //  * 打印名字
    //  * @param name
    //  */
    // function print(name) {
    //   console.log(name);
    // }
    //
    // setTimeout(print, 3000, 'siyehua')
    //
    // let p = new Promise(function (success, error) {
    //   let a = Math.round(Math.random() * 10);
    //   if (a % 2 === 0) {
    //     success('success:' + a)
    //   } else {
    //     error('error:' + a)
    //   }
    // })
    // p.then(
    //     function (value) {
    //       console.log(value)
    //     },
    //     function (error) {
    //       console.log(error)
    //     }
    // )
    //
    // class MyPromise {
    //   constructor(fun) {
    //     this.fun = fun;
    //   }
    //
    //   then(success, error) {
    //     this.fun(success, error)
    //   }
    // }
    //
    // let myP = new MyPromise(function (success, error) {
    //   let a = Math.round(Math.random() * 10);
    //   if (a % 2 === 0) {
    //     success('success:' + a)
    //   } else {
    //     error('error:' + a)
    //   }
    // })
    // myP.then(function (value) {
    //   console.log(value)
    // }, function (error) {
    //   console.log(error)
    // })

    return {}
  }
}
</script>

<style scoped>
h1 {
  width: 10em;
}

</style>