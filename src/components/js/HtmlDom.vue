<template>
  <div>
    <h1>Html Dom</h1>
    <div><br>网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。
      HTML DOM 模型被结构化为对象树
      <br></div>

    <div class="part">
      <h2>查找 HTML 元素</h2>
      <table>
        <tr class="title">
          <td>方法</td>
          <td>描述</td>
        </tr>
        <tr class="item">
          <td>document.getElementById(id)</td>
          <td>通过元素 id 来查找元素</td>
        </tr>
        <tr class="item">
          <td>document.getElementsByTagName(name)</td>
          <td>通过标签来查找元素, 返回的是一个集合</td>
        </tr>
        <tr class="item">
          <td>document.getElementsByClassName(name)</td>
          <td>通过类名来查找元素，返回的是一个集合</td>
        </tr>
        <tr class="item">
          <td>document.querySelectorAll(name)</td>
          <td>通过标签名+类名来查找元素，返回的是一个集合</td>
        </tr>
        <tr class="item">
          <td>document.querySelector(name)</td>
          <td>通过标签名+类名来查找元素，返回第一个被查找到的元素</td>
        </tr>
      </table>

      <div><br>举个例子：<br></div>
      <pre v-highlight><code>
    document.getElementsByClassName("item") // 通过 item 拿到元素
    document.getElementsByTagName("p")      // 通过标签 p 拿到元素

    // getElementsByClassName 无论是用当前元素搜 索还是用 document搜索，都是搜索整个树，拿到的结果也是动态变化的
    // querySelector 则以当元素进行为根节点进行搜索
    let e1 = example.getElementsByClassName('example')
    console.log(e1) // 返回 对应的 example 元素
    let e2 = example.querySelectorAll('div.example')
    console.log(e2) // 已当前 example搜索，搜不到，返回 null
    let e3 = document.querySelectorAll('div.example')
    console.log(e3) // 用document 搜索，等同于 getElementsByClassName
      </code></pre>
    </div>

    <div class="part">
      <h2>获取/改变元素属性</h2>
      <table>
        <tr class="title">
          <td>方法</td>
          <td>描述</td>
        </tr>
        <tr class="item">
          <td>element.innerHTML = new html content</td>
          <td>改变元素的 inner HTML</td>
        </tr>
        <tr class="item">
          <td>element.attribute = new value</td>
          <td>改变 HTML 元素的属性值(这个 attribute 就是具体的某个属性)</td>
        </tr>
        <tr class="item">
          <td>element.setAttribute(attribute, value)</td>
          <td>改变 HTML 元素的属性值</td>
        </tr>
        <tr class="item">
          <td>element.style.property = new style</td>
          <td>改变 HTML 元素的样式(property 是具体某个属性)</td>
        </tr>
      </table>

      <div><br>举个例子，下面是一个正方形：
        <br>
        <div class="example" style="display: inline-block;">
        </div>
        代码如下：
        <pre v-highlight><code>
.example {
  height: 5em;
  width: 5em;
  background: #9900ff;
}

&lt;div class=&quot;example&quot;&gt;
&lt;/div&gt;
        </code></pre>

        <button @click="changeColorUseStyle" style="padding: 1em;margin: 1em;">修改颜色</button>
        <span>代码如下：</span>
        <pre v-highlight><code>
      let example = document.getElementsByClassName('example').item(0) // 先拿到元素
      example.style.background = 'blue' // 接着修改背景
        </code></pre>

        <button @click="setInnerText" style="padding: 1em;margin: 1em;">设置 innerText</button>
        <span>代码如下：</span>
        <pre v-highlight><code>
      let example = document.getElementsByClassName('example').item(0)
      example.innerHTML = '我是通过 document 设置的文字'
        </code></pre>
      </div>
    </div>


    <div class="part">
      <h2>添加和删除元素</h2>
      <table>
        <tr class="title">
          <td>方法</td>
          <td>描述</td>
        </tr>
        <tr class="item">
          <td>document.createElement(element)</td>
          <td>创建元素</td>
        </tr>
        <tr class="item">
          <td>document.removeChild(element)</td>
          <td>移除元素</td>
        </tr>
        <tr class="item">
          <td>document.appendChild(element)</td>
          <td>添加元素</td>
        </tr>
        <tr class="item">
          <td>document.replaceChild(element)</td>
          <td>替换元素</td>
        </tr>
        <tr class="item">
          <td>document.write(text)</td>
          <td>写入 HTML 输出流（如果在网页加载完成后写入，会替换整个网页的内容）</td>
        </tr>
      </table>

      <div>还是上面那个例子：
        <div class="example" style="display: inline-block;">
        </div>

        <button @click="addElement" style="padding: 1em;margin: 1em;">添加元素</button>
        <button @click="removeElement" style="padding: 1em;margin: 1em;">移除元素</button>
        <span>代码如下：</span>
        <pre v-highlight><code>
    function removeElement() {
      let example = document.getElementsByClassName('example')[1]
      example.removeChild(example.children.item(0))
    }

    function addElement() {
      let example = document.getElementsByClassName('example')[1]
      let newNode = document.createElement('span')
      newNode.innerText = '我是被添加进来的'
      example.appendChild(newNode)
    }
        </code></pre>
      </div>
    </div>

    <div class="part">
      <h2>添加事件处理程序</h2>
      <table>
        <tr class="title">
          <td>方法</td>
          <td>描述</td>
        </tr>
        <tr class="item">
          <td>document.getElementById(id).onclick = function(){code}</td>
          <td>向 onclick 事件添加事件处理程序</td>
        </tr>
        <tr class="item">
          <td>addEventListener("click", function,useCapture =false);</td>
          <td>向 onclick 事件添加事件监听,useCapture 意思是是否使用捕获</td>
        </tr>
        <tr class="item">
          <td>removeEventListener("click", function);</td>
          <td>移除 onclick 事件添加事件监听</td>
        </tr>
      </table>

      <div class="example"></div>
      <button @click="setOnClick" style="padding: 1em;margin: 1em;">给上面的正方形添加点击事件</button>
      <button @click="addClickListener" style="padding: 1em;margin: 1em;">增加事件监听</button>
      <button @click="removeClickListener" style="padding: 1em;margin: 1em;">移除事件监听</button>
      <pre v-highlight><code>
      let example = document.getElementsByClassName('example')[2]
      example.onclick = function (){
        alert("我被点击了")
      }

      example.addEventListener('click', clickListener)
      example.removeEventListener('click', clickListener)
      </code></pre>
      <br><br>

      <div>
        <h3>其他事件监听</h3>
        <div>除了上面的click，还有很多其他的事件监听，例如：<br></div>
        <table>
          <tr class="title">
            <td>事件</td>
            <td>作用</td>
          </tr>
          <tr class="item">
            <td>click</td>
            <td>点击</td>
          </tr>
          <tr class="item">
            <td>mouseover</td>
            <td>鼠标移动到当前位置</td>
          </tr>
          <tr class="item">
            <td>mouseout</td>
            <td>鼠标离开</td>
          </tr>
          <tr class="item">
            <td>resize</td>
            <td>窗口大小调整</td>
          </tr>
        </table>
      </div>

      <div>
        <h3>事件的类型</h3>
        <div>上面的 event 监听的事件类型有两种，分别是：捕获和冒泡，useCapture的就是是否使用捕获，所以默认是冒泡事件 <br>
          在冒泡中，最内侧元素的事件会首先被处理，然后是更外侧的：首先处理 p 元素的点击事件，然后是 div 元素的点击事件。<br>
          在捕获中，最外侧元素的事件会首先被处理，然后是更内侧的：首先处理 div 元素的点击事件，然后是 p 元素的点击事件。<br>
          总结就是：冒泡是从小到大，捕获是从大到小。<br>
          举个例子，下面例子中，点第一个 div 区域先显示子元素，再显示父元素，因为它是冒泡事件，第二个是捕获事件，则相反：
        </div>
        <pre v-highlight><code>
&lt;div id=&quot;myDiv1&quot;&gt;
  &lt;h2&gt;Bubbling:&lt;/h2&gt;
  &lt;p id=&quot;myP1&quot;&gt;锟斤拷锟斤拷锟揭ｏ拷&lt;/p&gt;
&lt;/div&gt;&lt;br&gt;

&lt;div id=&quot;myDiv2&quot;&gt;
  &lt;h2&gt;Capturing:&lt;/h2&gt;
  &lt;p id=&quot;myP2&quot;&gt;锟斤拷锟斤拷锟揭ｏ拷&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
document.getElementById(&quot;myP1&quot;).addEventListener(&quot;click&quot;, function() {
  alert(&quot;myP1&quot;);
}, false);

document.getElementById(&quot;myDiv1&quot;).addEventListener(&quot;click&quot;, function() {
  alert(&quot;myDiv1&quot;);
}, false);

document.getElementById(&quot;myP2&quot;).addEventListener(&quot;click&quot;, function() {
  alert(&quot;myP2&quot;);
}, true);

document.getElementById(&quot;myDiv2&quot;).addEventListener(&quot;click&quot;, function() {
  alert(&quot;myDiv2&quot;);
}, true);
&lt;/script&gt;

        </code></pre>
      </div>
    </div>


    <div class="part">
      <h2>获取其他 html 对象</h2>
      <table>
        <tbody>
        <tr class="title">
          <th>属性</th>
          <th>描述</th>
          <th>DOM</th>
        </tr>

        <tr class="item">
          <td>document.domain</td>
          <td>返回文档服务器的域名</td>
          <td>1</td>
        </tr>
        <tr class="item">
          <td>document.baseURI</td>
          <td>返回文档的绝对基准 URI</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.documentURI</td>
          <td>返回文档的 URI</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.URL</td>
          <td>返回文档的完整 URL</td>
          <td>1</td>
        </tr>

        <tr class="item">
          <td>document.cookie</td>
          <td>返回文档的 cookie</td>
          <td>1</td>
        </tr>
        <tr class="item">
          <td>document.doctype</td>
          <td>返回文档的 doctype</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.documentMode</td>
          <td>返回浏览器使用的模式</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.implementation</td>
          <td>返回 DOM 实现</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.inputEncoding</td>
          <td>返回文档的编码（字符集）</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.lastModified</td>
          <td>返回文档更新的日期和时间</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.readyState</td>
          <td>返回文档的（加载）状态</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.referrer</td>
          <td>返回引用的 URI（链接文档）</td>
          <td>1</td>
        </tr>
        <tr class="item">
          <td>document.strictErrorChecking</td>
          <td>返回是否强制执行错误检查</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.title</td>
          <td>返回 &lt;title&gt; 元素</td>
          <td>1</td>
        </tr>


        <tr class="item">
          <td>document.documentElement</td>
          <td>返回 &lt;html&gt; 元素</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.body</td>
          <td>返回 &lt;body&gt; 元素</td>
          <td>1</td>
        </tr>
        <tr class="item">
          <td>document.anchors</td>
          <td>返回拥有 name 属性的所有 &lt;a&gt; 元素。</td>
          <td>1</td>
        </tr>
        <tr class="item">
          <td>document.embeds</td>
          <td>返回所有 &lt;embed&gt; 元素</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.forms</td>
          <td>返回所有 &lt;form&gt; 元素</td>
          <td>1</td>
        </tr>
        <tr class="item">
          <td>document.head</td>
          <td>返回 &lt;head&gt; 元素</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.images</td>
          <td>返回所有 &lt;img&gt; 元素</td>
          <td>1</td>
        </tr>
        <tr class="item">
          <td>document.scripts</td>
          <td>返回所有 &lt;script&gt; 元素</td>
          <td>3</td>
        </tr>
        <tr class="item">
          <td>document.links</td>
          <td>返回拥有 href 属性的所有 &lt;area&gt; 和 &lt;a&gt; 元素</td>
          <td>1</td>
        </tr>

        </tbody>
      </table>
    </div>

    <div class="part">
      <h2>导航（遍历，索引，查找）</h2>
      <div>要查找一个元素，除了上面介绍的通过特定的方法查找之外，还可以通过导航的方式进行查找。<br>
        例如，当我们找到了 body 节点，想找它的子节点。或者找到某个元素 div，想找到它的兄弟节点等等。<br>
        只有，节点不一定是元素，类似 div 包裹的文本，div 下面并没有任何子元素，但是它有子节点（一个文本节点）<br>
        此外，还可以获取当前节点的一些其他属性: <br>
      </div>
      <ol>
        <li> parentNode 父节点</li>
        <li> childNodes[nodenumber] 某个子节点</li>
        <li> firstChild 第一个子节点</li>
        <li> lastChild 最后一个子节点</li>
        <li> nextSibling 下一个兄弟节点</li>
        <li> previousSibling 上一个兄弟节点</li>
      </ol>

      <div>每个节点还有一些特殊的值，一般包含如下：
        <table>
          <tr class="title">
            <td>节点值</td>
            <td>描述</td>
          </tr>
          <tr class="item">
            <td>innerHTML</td>
            <td>返回子节点的 innerHTML 与 innerText 不同的是，它还会返回节点的标签</td>
          </tr>
          <tr class="item">
            <td>nodeValue</td>
            <td>返回当前节点的值 <br>
              元素节点的 nodeValue 是 undefined <br>
              文本节点的 nodeValue 是文本文本 <br>
              属性节点的 nodeValue 是属性值</td>
          </tr>
          <tr class="item">
            <td>nodeName</td>
            <td>nodeName 是只读的<br>
              元素节点的 nodeName 等同于标签名 <br>
              属性节点的 nodeName 是属性名称 <br>
              文本节点的 nodeName 总是 #text <br>
              文档节点的 nodeName 总是 #document
            </td>
          </tr>
          <tr class="item">
            <td>nodeType</td>
            <td>nodeType 是只读的<br>
            </td>
          </tr>
        </table>

        <div><br>举个例子：</div>
        <pre v-highlight><code>
    &lt;p id=&quot;siyehua&quot;&gt;fefef&lt;/p&gt;
    document.getElementById('siyehua').nodeValue //返回 null
    document.getElementById('siyehua').firstChild.nodeValue //返回 fefef
         </code></pre>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HtmlDom",
  data() {
    let clickListener = function () {
      alert('某个元素被点击了')
    }

    function removeClickListener() {
      let example = document.getElementsByClassName('example')[2]
      example.removeEventListener('click', clickListener)
    }

    function addClickListener() {
      let example = document.getElementsByClassName('example')[2]
      example.addEventListener('click', clickListener)
    }

    function setOnClick() {
      let example = document.getElementsByClassName('example')[2]
      example.onclick = function () {
        alert("我被点击了")
      }
    }

    function removeElement() {
      let example = document.getElementsByClassName('example')[1]
      example.removeChild(example.children.item(0))
    }

    function addElement() {
      let example = document.getElementsByClassName('example')[1]
      let newNode = document.createElement('span')
      newNode.innerText = '我是被添加进来的'
      example.appendChild(newNode)
    }

    function setInnerText() {
      let example = document.getElementsByClassName('example').item(0)
      example.innerHTML = '我是通过 document 设置的文字'
    }

    function changeColorUseStyle() {
      let example = document.getElementsByClassName('example').item(0)
      example.style.background = 'blue'


      // getElementsByClassName 无论是用当前元素搜索还是用 document搜索，都是搜索整个树，拿到的结果也是动态变化的
      // querySelector 则以当元素进行为根节点进行搜索
      let e1 = example.getElementsByClassName('example')
      console.log(e1) // 返回 对应的 example 元素
      let e2 = example.querySelectorAll('div.example')
      console.log(e2) // 已当前 example搜索，搜不到，返回 null
      let e3 = document.querySelectorAll('div.example')
      console.log(e3) // 用document 搜索，等同于 getElementsByClassName
    }

    return {
      removeClickListener,
      addClickListener,
      setOnClick,
      removeElement,
      addElement,
      setInnerText,
      changeColorUseStyle,
    }
  },
}
</script>

<style scoped>
.example {
  height: 5em;
  width: 5em;
  background: #9900ff;
}

li {
  margin-left: 1em;
  list-style: decimal;
}
</style>