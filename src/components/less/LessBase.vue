<template>
  <div>
    <h1>Less 介绍</h1>
    <div class="part">
      <h2>介绍与安装</h2>
      <p>一句话：less 就是 css 的扩展，类似于 typescript 对 JavaScript 的扩展</p>

      <div><br/>
        安装，使用npm，输入：
      </div>
      <pre v-highlight><code>
 sudo npm install less -g
    </code></pre>
      <p>安装好之后，在 Webstorm 中设置里：Setting → Tools → File Watchers → 点击加号 → 默认会自动选择 lessc，点击确定即可。</p>
      <img src="../../assets/setting_less.jpg" alt="123" style="width: 650px;object-fit: cover;">

      <p><br/>安装好后就可以直接新建 less 文件并编写了，注意:生成的 css 文件，会自动被 IDE 折叠，如果需要查看生成结果，可以展开：</p>
      <img src="../../assets/less_expend.png" alt="123" style="width: 400px;object-fit: cover;">
    </div>

    <div class="part">
      <h2>基本使用</h2>

      <h3>嵌套</h3>
      <p>css 写子代元素需要这么写：</p>
      <pre v-highlight><code>
.box1 {
  background-color: #b1d069;
}
.box1 .box2 {
  background-color: rebeccapurple;
}

.box1 .box2 .box3 {
  background-color: slateblue;
}
    </code></pre>

      <p>改成 less 可以直接这么写</p>
      <pre v-highlight><code>
.box1 {
  background-color: #b1d069;

  .box2 {
    background-color: rebeccapurple;

    .box3 {
      background-color: slateblue;
    }
  }
}
    </code></pre>


      <br/><br/>
      <h3>变量使用</h3>
      <p>默认变量定义使用 @，例如：</p>
      <pre v-highlight><code>
@theme: #b1d069; //定义变量,注意，必须以 ; 分号结尾

.user {
  background: @theme; //使用
}
.user2 {
  width: 200px;
  height: $width; //意思是让 height 的值等于 width
}
//用作类名要加上{}括号
@{theme}{
  //用作字符串要加上{}括号
  background: url("@{theme}/fefef.jpg");
}
      </code></pre>

      <h3>扩展</h3>
      <pre v-highlight><code>
.user3:extend(.user2){
  //相等于继承了 user2 的属性
  background: #9900ff;
}

//结果
.user2,
.user3 {
  width: 200px;
  height: 200px;
}
      </code></pre>

      <p><br/><br><br>混合，与扩展不同的时，混合是把所有的属性都复制过来</p>
      <pre v-highlight><code>
//生成一个 mix 类选择器，这个选择器不会编译到 css 中
.mix() {//后面追加() 括号就会生成
  width: 200px;
  height: $width;
}

.a {
  .mix;
  background: #9900ff;
}

.b {
  .mix;
  color: red;
}
      </code></pre>

      <p>编译结果,不会生成 mix 类选择器：</p>
      <pre v-highlight><code>
.a {
  width: 200px;
  height: 200px;
  background: #9900ff;
}
.b {
  width: 200px;
  height: 200px;
  color: red;
}
      </code></pre>
    </div>


  </div>
</template>

<script>
export default {
  name: "LessBase"
}
</script>

<style scoped>
.box1 {
  background-color: #b1d069;
}

.box1 .box2 {
  background-color: rebeccapurple;
}

.box1 .box2 .box3 {
  background-color: slateblue;
}


</style>