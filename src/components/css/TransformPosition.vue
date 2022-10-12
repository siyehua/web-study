<template>
  <div>
    <h1>平移和旋转</h1>
    <div class="part">
      <h2>平移介绍</h2>
      <div>transform 一般有三方方向，分别是 X,Y,Z</div>

      <div><br/>举个例子，下面两个盒子：</div>
      <div>
        <div class="box1">1</div>
        <div class="box2">2</div>
      </div>
      <div>给盒子设置平移(鼠标移动即执行动画)：</div>
      <pre><code class="language-javascript language-css">
html{
  perspective: 800px; //如果设置 Z 轴，必须先给 html 设置一个距离用户的距离，才能体现出近大远小的效果
}

.transform{ //这里的 50% 是相对于盒子自身
  transform: translateX(50%) translateY(-100%);
  transition: 1s;  //动画1秒
}
      </code></pre>
      <div>
        <div class="box1 transform">1</div>
        <div class="box2">2</div>
      </div>
    </div>

    <div class="part">
      <h2>应用</h2>
      <div>让按钮在垂直方向上局中,对没有固定宽高的元素非常好用：</div>
      <pre><code class="language-javascript language-css">
position: absolute;
top: 50%; //这里距离顶部 50%，但是只是底部局中了，自身并没有局中
transform: translateY(-50%);    //通过平移自身 -50% 来达到局中
      </code></pre>
      <div style="height: 15em;width: 100%;background-color: #b1d069;position: relative;">
        <div style="position: absolute;top: 50%;transform: translateY(-50%);background-color: blanchedalmond;">按钮</div>
      </div>
    </div>


    <div class="part">
      <h2>旋转</h2>
      <div>旋转使用的属性是一样的，都是 transform, 用的方法是 rotate(xx deg)</div>

      <div>举个简单的例子：</div>
      <pre><code class="language-javascript language-css">
  transform: rotate(300deg); //表示转动 300 度
  transition: 2s; //动画时间两秒
      </code></pre>
      <div style="border: 1px solid palevioletred;width: 10em;height: 10em;">
        <div class="rotate"
             style="width: 5em;height: 5em; background-color: #b1d069;margin-top: 30%;margin-left: 30%;"></div>
      </div>
    </div>

    <div class="part">
      <h2>缩放</h2>
      <div>举个简单的例子：</div>
      <pre><code class="language-javascript language-css">
  transform: scale(.5); //缩小到 0.5 倍大小
  transition: 2s; //动画时间两秒
      </code></pre>
      <div style="border: 1px solid palevioletred;width: 10em;height: 10em;">
        <div class="scale"
             style="width: 5em;height: 5em; background-color: #b1d069;margin-top: 30%;margin-left: 30%;"></div>
      </div>

      <pre><code class="language-javascript language-css">
  transform: scale(1.1); //缩小到 1.1 倍大小
  transition: .5s; //动画时间0.5

  overflow: hidden; //限制了 img 的大小，可以做点击鼠标放到上面变大的效果
      </code></pre>
      <div style="border: 1px solid palevioletred;width: 10em;height: 10em;">
        <img class="scale2" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F23%2F20210623175340_03f0d.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663904679&t=c14f3255c22f413cbd6be438804bfea4"
             alt = '233'
             style="object-fit: cover;width: 5em;height: 5em; background-color: #b1d069;margin-top: 30%;margin-left: 30%; overflow: hidden;">
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "TransformPosition"
}
</script>

<style scoped>
.scale2:hover{
  transform: scale(1.1);
  transition: .5s;
}
.scale:hover{
  transform: scale(.5);
  transition: 2s;
}

.rotate:hover {
  transform: rotate(300deg);
  transition: 2s;
}

.transform:hover {
  transform: translateX(50%) translateY(-50%);
  transition: 2s;
}

.box1 {
  width: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #b1d069;
}

.box2 {
  text-align: center;
  width: 100px;
  line-height: 100px;
  background-color: rebeccapurple;
}
</style>