<template>
  <div>
    <h1>BOM 浏览器对象模型（Browser Object Model）</h1>
    <div class="part">
      <h2>基本介绍</h2>
      <div>浏览器对象模型（Browser Object Model (BOM)）<br>
        现代的浏览器已经（几乎）实现了 JavaScript 交互相同的方法和属性，因此它经常作为 BOM 的方法和属性被提到。<br><br>
        Window 对象 :所有浏览器都支持 window 对象。它代表浏览器的窗口。<br>
        所有全局 JavaScript 对象，函数和变量自动成为 window 对象的成员。<br>
        全局变量是 window 对象的属性。<br>
        全局函数是 window 对象的方法。<br>
        下面列举一些常用的属性或方法：
      </div>

      <table>
        <tr class="title">
          <td>属性或方法</td>
          <td>描述</td>
        </tr>
        <tr class="item">
          <td>window.innerWidth</td>
          <td>窗口的宽度（等于网页的宽度）</td>
        </tr>
        <tr class="item">
          <td>window.innerHeight</td>
          <td>窗口的高度</td>
        </tr>
        <tr class="item">
          <td> window.open()</td>
          <td>打开一个新的窗口(注意必须包含 http:// ，如果不包含则是以当前域名作为 baseUrl 打开)</td>
        </tr>
        <tr class="item">
          <td> window.close()</td>
          <td>关闭当前窗口</td>
        </tr>
        <tr class="item">
          <td> window.moveTo()</td>
          <td>移动当前窗口（只是适用于独立的窗口）</td>
        </tr>
        <tr class="item">
          <td> window.moveTo()</td>
          <td>移动当前窗口（只是适用于独立的窗口）</td>
        </tr>
        <tr class="item">
          <td> window.resize()</td>
          <td>调整窗口的大小</td>
        </tr>
        <tr class="item">
          <td>screen.width</td>
          <td>屏幕宽度</td>
        </tr>
        <tr class="item">
          <td>screen.height</td>
          <td>屏幕高度</td>
        </tr>
        <tr class="item">
          <td>screen.availWidth</td>
          <td>屏幕可用宽度（去掉了屏幕自带的菜单栏，任务栏等等）</td>
        </tr>
        <tr class="item">
          <td>screen.availHeight</td>
          <td>屏幕可用高度（去掉了屏幕自带的菜单栏，任务栏等等）</td>
        </tr>
        <tr class="item">
          <td>window.location.href</td>
          <td>返回当前页面的 href (URL), 与之前介绍的 document.baseURL 的区别是 <br>
            一个网页只能有一个 window，但是它可以有多个 document <br> 大部分时候，它们是相等的
          </td>
        </tr>
        <tr class="item">
          <td>window.location.hostname</td>
          <td>返回 web 主机的域名</td>
        </tr>
        <tr class="item">
          <td>window.location.pathname</td>
          <td>返回当前页面的路径或文件名</td>
        </tr>
        <tr class="item">
          <td>window.location.protocol</td>
          <td>返回使用的 web 协议（http: 或 https:）</td>
        </tr>
        <tr class="item">
          <td>window.location.assign</td>
          <td>加载新文档</td>
        </tr>
        <tr class="item">
          <td>window.history.back()</td>
          <td>后退</td>
        </tr>
        <tr class="item">
          <td>window.history.forward()</td>
          <td>前进</td>
        </tr>
        <tr class="item">
          <td>window.history.go(number)</td>
          <td>正数表示向前进几步，负数是向后</td>
        </tr>
        <tr class="item">
          <td>window.history.forward()</td>
          <td>前进</td>
        </tr>
        <tr class="item">
          <td>navigator.appName</td>
          <td>浏览器名称</td>
        </tr>
        <tr class="item">
          <td>navigator.appCodeName</td>
          <td>版本</td>
        </tr>
        <tr class="item">
          <td>navigator.platform</td>
          <td>平台（系统）</td>
        </tr>
        <tr class="item">
          <td>navigator.cookieEnabled</td>
          <td>cookie 是否可用</td>
        </tr>
        <tr class="item">
          <td>navigator.userAgent</td>
          <td>用户代理报头</td>
        </tr>
        <tr class="item">
          <td>navigator.language</td>
          <td>语言</td>
        </tr>
      </table>
    </div>

    <div class="part">
      <h2>各种弹窗</h2>
      <div>默认的弹窗样式分别有三种：</div>
      <ol>
        <li>alert('内容') 只有一个确定按钮</li>
        <li>confirm('内容') 有确定取消两个按钮，返回 true or false</li>
        <li>prompt('标题'，'输入框默认内容') 输入框，返回用户的输入内容</li>
      </ol>
    </div>

    <div class="part">
      <h2>cookie 使用</h2>
      <div>
      Cookie 是在您的计算机上存储在小的文本文件中的数据。<br>
      当 web 服务器向浏览器发送网页后，连接被关闭，服务器会忘记用户的一切。<br><br>

      Cookie 是为了解决“如何记住用户信息”而发明的：<br>
      当用户访问网页时，他的名字可以存储在 cookie 中。<br>
      下次用户访问该页面时，cookie 会“记住”他的名字。<br><br>

      Cookie 保存在名称值对中，如：<br>
      username = Bill Gates<br>
      当浏览器从服务器请求一个网页时，将属于该页的 cookie 添加到该请求中。这样服务器就获得了必要的数据来“记住”用户的信息。<br>
      如果浏览器已关闭本地 cookie 支持，则以下实例均无法工作。<br>
      </div>

      <div>
        创建cookie：
        <pre v-highlight><code>
          //expires 表示过期时间
document.cookie = "username=Bill Gates; expires=Sun, 31 Dec 2017 12:00:00 UTC";
        </code></pre>
        删除 cookie：
        <pre v-highlight><code>
          //设置空或者自动过期
document.cookie = "username=; ";
        </code></pre>
      </div>
    </div>

    <div>
      <h2>web 扩展</h2>
      <div>扩展了一些浏览器的功能，例如位置信息等</div>
      <table>
        <tr class="title">
          <td>方法</td>
          <td>描述</td>
        </tr>
        <tr class="item">
          <td>navigator.geolocation</td>
          <td>位置</td>
        </tr>
        <tr class="item">
          <td>navigator.geolocation</td>
          <td>位置</td>
        </tr>
        <tr class="item">
          <td>checkValidity()</td>
          <td>如果 input 元素包含有效数据，则返回 true。</td>
        </tr>
        <tr class="item">
          <td>setCustomValidity()</td>
          <td>自定义检查</td>
        </tr>
        <tr class="item">
          <td>setCustomValidity()</td>
          <td>自定义检查</td>
        </tr>
        <tr class="item">
          <td>localStorage.setItem("name", "Bill Gates");<br>
            localStorage.getItem("name");</td>
          <td>简单存储和获取数据</td>
        </tr>
        <tr class="item">
          <td>sessionStorage.setItem("name", "Bill Gates");<br>
            sessionStorage.getItem("name");</td>
          <td>跟上面的一样，但是浏览器关闭会清空数据</td>
        </tr>
        <tr class="item">
          <td>localStorage.clear()</td>
          <td>清空数据</td>
        </tr>
        <tr class="item">
          <td>localStorage.removeItem(key)</td>
          <td>从存储中删除该键</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BomUse",
  data() {
    return {}
  },
}
</script>

<style scoped>
li {
  margin-left: 1em;
  list-style: decimal;
}
</style>