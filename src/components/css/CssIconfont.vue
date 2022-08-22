<template>
  <div>
    <h1>Iconfont 字体图标</h1>
    <div>字体图标就是矢量图，可以无损放大，又拥有字体的特点</div>

    <div class="part">
      <h2>使用方法</h2>
      <div>下载地址：<a href="https://www.iconfont.cn">阿里巴巴iconfont</a></div>
      <div>登录之后，搜索自己想要的图标，加入到购物车，然后进入购物车，点击下载代码，即可得到压缩包</div>
      <div>里面有个 demo.index, 双击就能看到使用方法</div>
    </div>

    <div class="part">
      <h2>使用</h2>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-location"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import '../../assets/iconfont/iconfont.js'
export default {
  name: "CssIconfont",
}
</script>

<style scoped>
.icon {
  margin: 3em;
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>