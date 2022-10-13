<template>
  <div>
    <h1>HTML 结构</h1>

    <div class="part">
      <h2>一个简单的 html 结构</h2>
      <pre v-highlight><code>
      &lt;!-- 表示这是一个 html5 写的页面 --&gt;
      &lt;!DOCTYPE html&gt;
      &lt;html lang=&quot;&quot;&gt;&lt;!-- lang 可以设置语言，例如打开某些英文界面提示翻译成中文，就是设置了这个 --&gt;
      &lt;head&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;utf-8&quot;&gt;&lt;!-- 编码是 utf-8 --&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0&quot;&gt;&lt;!-- 视窗等于浏览器的视窗，初始化倍率是 1 --&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot;&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;my-blob&lt;/title&gt;
      &lt;script defer src=&quot;/js/chunk-vendors.js&quot;&gt;&lt;/script&gt;&lt;script defer src=&quot;/js/app.js&quot;&gt;&lt;/script&gt;
      &lt;/head&gt;
      &lt;body&gt;
      &lt;noscript&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;strong&gt;We&#x27;re sorry but my-blob doesn&#x27;t work properly without JavaScript enabled.
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please enable it to continue.&lt;/strong&gt;
      &lt;/noscript&gt;
      &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
      &lt;!-- built files will be auto injected --&gt;
      &lt;/body&gt;
      &lt;/html&gt;
    </code></pre>
    </div>

    <div class="part">
      <h2>字体</h2>
      <div>可以全局设置下载字体</div>
      <pre v-highlight><code>
        @font-face {
          font-family: myFont; //字体名字，以便下面用
          src: url("字体地址");
        }
      </code></pre>

      <div> 在 css 中使用</div>
      <pre v-highlight><code>
        font-family: myFont;
      </code></pre>
    </div>

  </div>
</template>

<script>
export default {
  name: "HtmlBase"
}
</script>

<style scoped>

h1 {
  font-size: 24px;
  font-weight: bold;
  color: #3f3f3f;
}

</style>