<template>
  <div>
    <h1>网络 AJAX</h1>
    <div class="part">
      <h2>基本介绍</h2>
      <div> Asynchronous JavaScript And XML, 就是异步请求。分 XMLHttpRequest 和 Fetch</div>
    </div>

    <div class="part">
      <h2>XMLHttpRequest</h2>
      <pre v-highlight><code>
    let request = new XMLHttpRequest(); // 新建一个请求对象
    request.open('GET', './test.txt', false); // 请求方式用 get，false 表示同步请求（true 异步）
    request.onreadystatechange = function () {
      //请求回调，如果上面的 open 方法是异步，就需要在这里接回调，同步可以不用在这里接回调
      if (this.readyState === 4 && this.status === 200) {
        console.log('request success', this)
      }
    };
    request.send() // 发送请求
    let resultText = request.responseText // 获取请求结果，注意如果是异步请求，这里返回的是空
    console.log(resultText)
    console.log(JSON.parse(resultText))
      </code></pre>
    </div>

    <div class="part">
      <h2>fetch</h2>
      <pre v-highlight><code>
    fetch('./test2.txt').then(function (response) {
      console.log(response)
      if (response.status === 200) {
        return response.text()
      }
      throw response.statusText
    }).then(function (success) {
      // 成功
      console.log('fetch success', success)
    }, function (error) {
      // 失败
      console.log('fetch error', error)
    })
      </code></pre>
    </div>
  </div>
</template>

<script>

export default {
  name: "AjaxUse",
  data() {
    // let request = new XMLHttpRequest(); // 新建一个请求对象
    // request.open('GET', './test.txt', false); // 请求方式用 get，false 表示同步请求（true 异步）
    // request.onreadystatechange = function () {
    //   //请求回调，如果上面的 open 方法是异步，就需要在这里接回调，同步可以不用在这里接回调
    //   if (this.readyState === 4 && this.status === 200) {
    //     console.log('request success', this)
    //   }
    // };
    // request.send() // 发送请求
    // let resultText = request.responseText // 获取请求结果，注意如果是异步请求，这里返回的是空
    // console.log(resultText)
    // console.log(JSON.parse(resultText))

    fetch('./test2.txt').then(function (response) {
      console.log(response)
      if (response.status === 200) {
        return response.text()
      }
      throw response.statusText
    }).then(function (success) {
      // 成功
      console.log('fetch success', success)
    }, function (error) {
      // 失败
      console.log('fetch error', error)
    })
    return {}
  },
}
</script>

<style scoped>

</style>