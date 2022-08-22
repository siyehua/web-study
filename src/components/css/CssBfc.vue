<template>
  <div>
    <h1>CSS 布局</h1>
    <div>
      <h2>BFC</h2>
      <div>BFC 开启后，会改变元素的布局，导致布局错乱。开启 BFC 的方式有很多种，其中一种方式就是使用浮动 float 属性，例如:</div>
      盒子 1 开启浮动后，导致外面的绿色父元素的高度塌陷了,下面那个蓝色的元素顶了上来
      <div class="part">
        <h3>例子 1</h3>
        <div style="background-color: #b1d069;">
          <div style="width: 10em;height: 10em;background-color: #2c3e50;float: left">1</div>
        </div>
        <div style="background-color: aqua;width: 15em;height: 15em;"></div>
      </div>

      <div class="part">
        <h3>例子 2</h3>
        <div>为了避免这个问题，也可以开始父元素的 BFC，最简单的方式就是，设置 overflow:auto 或者 overflow:hidden</div>
        <div>盒子 1 的父元素，设置了 overflow 属性：</div>
        <pre class="code-pre">
          overflow:hidden;
        </pre>

        <div></div>
        <div style="background-color: #b1d069;overflow:hidden;">
          <div style="width: 10em;height: 10em;background-color: #2c3e50;float:left;">1</div>
        </div>
        <div style="background-color: aqua;width: 15em;height: 15em;"></div>
      </div>

      <div class="part">
        <h3>例子 3</h3>
        <div>下面两个盒子，盒子 2 收到盒子 1 的影响，会导致盒子 1 上浮，文字 2 会自动环绕浮动元素</div>
        <div>盒子 2 设置了 clear 属性：</div>
        <pre class="code-pre">
          clear: left;
        </pre>

        <div style="background-color: palegreen;width: 10em;height: 10em;float: left;">1</div>
        <div style="background-color: teal;width: 10em;height: 10em;">2</div>

        <br><br><br><br>除了上面的例子 2 的方法，还可以设置clear 属性来清除浮动的影响,value 等于 both，则清除left or right 中比较大的<br><br>
        <div style="background-color: palegreen;width: 10em;height: 10em;float: left;">1</div>
        <div style="background-color: teal;width: 10em;height: 10em;clear: left;">2</div>
      </div>

      <div class="part">
        <h3>例子 4</h3>
        <div>根据例子 3，如果我们要清除高度塌陷问题，必须借助于另外一个元素，如果是父元素，那就给父元素追加伪元素来实现.</div>
        <pre class="code-pre">
          .bfc::after {
            clear: both;
            content: &quot;&quot;;
            display: block;
          }
        </pre>
        <div class="bfc" style="background-color: #b1d069;">
          <div style="width: 10em;height: 10em;background-color: #2c3e50;float:left;">1</div>
        </div>
        <div style="background-color: aqua;width: 15em;height: 15em;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssBfc"
}
</script>

<style scoped>
.bfc::after {
  clear: both;
  content: "";
  display: block;
}
</style>