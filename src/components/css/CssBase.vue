<template>
  <div>
    <h1> CSS 相关知识</h1>
    <div class="area">
      <h2>参考资料</h2>
      <a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS">MDN 权威资料</a><br/>
      <a href="https://www.bilibili.com/video/BV1XJ411X7Ud?p=30&spm_id_from=pageDriver&vd_source=2f4061fc3b23895fcb9e8c4f34457290">尚硅谷
        视频教学，手把手教学</a>
      <br/>
    </div>
    <div class="area">
      <h2>选择器</h2>
      css 的选择器有很多种，分别是：
      <table>
        <tr>
          <td><strong>选择器</strong></td>
          <td><strong>实例</strong></td>
          <td><strong>使用方式</strong></td>
          <td><strong>优先级</strong></td>
        </tr>
        <tr>
          <td>标签选择器</td>
          <td><code> h1 { } </code></td>
          <td>自定使用</td>
          <td>0001</td>
        </tr>
        <tr>
          <td>标签属性选择器</td>
          <td><code> a[title] { } </code></td>
          <td>只有a标签有 title 属性才会应用</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>类选择器</td>
          <td><code> .part { } </code></td>
          <td><code> class="part" </code></td>
          <td>0010</td>
        </tr>
        <tr>
          <td>ID选择器</td>
          <td><code> #app { } </code></td>
          <td><code> id="app" </code></td>
          <td>0100</td>
        </tr>
        <tr>
          <td>伪类选择器</td>
          <td><code> p:hover { } </code></td>
          <td>鼠标悬停到这个标签</td>
          <td>0010</td>
        </tr>
        <tr>
          <td>伪属性选择器</td>
          <td><code> p::first-child { } </code></td>
          <td>p 段落的第一行被选中</td>
          <td>0001</td>
        </tr>
        <tr>
          <td>通配选择器</td>
          <td><code> * { } </code></td>
          <td></td>
          <td>0000</td>
        </tr>
        <tr>
          <td>后代选择器</td>
          <td><code> article p </code></td>
          <td>所有的后代 p 标签都会被应用</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>子代选择器</td>
          <td><code> article > p </code></td>
          <td>直接子代才会被应用</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>相邻兄弟选择器</td>
          <td><code> h1 + p </code></td>
          <td>即这两个标签必须相连</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>通用兄弟选择器</td>
          <td><code> h1 ~ p </code></td>
          <td>这两个标签可以不相连</td>
          <td>0000</td>
        </tr>
      </table>
      <br/>
      <div class="part">
        <h3>融合</h3>
        <div>默认情况下，CSS的规则是一个交集，即如果有相同的选择器，则里面的规则样式是融合在一起。如果有相同的样式冲突了，则以最后一个规则为准，比如设置设置了：</div>
        <code class="block-code">h1 { border:1px; color: red; }</code>
        <code class="block-code">h1 { color: blue; }</code>
        <div>则最后 h1 的字体颜色就是蓝色,边距是 1px 。同理，如果某个 css 加载在后面，则它的规则就会覆盖前面的规则</div>
        <br/>
      </div>
      <div class="part">
        <h3>继承</h3>
        <div>CSS 还有一个特点就是继承。因为标签之间可以相互嵌套，所以如果父标签写了某个规则，则子孙标签都会应用这个规则，例如：</div>
        <code class="block-code">h1 { color: red; }</code><br/>
        <div>如果有以下布局，则里面的都是红色的</div>
        <div style="color: red;">我是红色的
          <p>因为我的父标签 div 的字体颜色是红色的，所以我也是红色的</p>
        </div>
        <div>如果不想继承父标签的值，只需要将对应的属性设置为特殊值. all: unset; 即重置所有的属性</div>
        <ul>
          <li>inherit 设置该属性会使子元素属性和父元素相同。实际上，就是 "开启继承".</li>
          <li>initial 设置属性值和浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 inherit 。</li>
          <li>revert 将应用于选定元素的属性值重置为浏览器的默认样式，而不是应用于该属性的默认值。在许多情况下，此值的作用类似于 unset。</li>
          <li>revert-layer 将应用于选定元素的属性值重置为在上一个层叠层中建立的值。</li>
          <li>unset 将属性重置为自然值，也就是如果属性是自然继承那么就是 inherit，否则和 initial 一样</li>
        </ul>
        <div>上面那个例子，改写：color: initial</div>
        <div style="color: red;">我是红色的
          <p style="color: initial">虽然div 字体是红色的，但是我设置了 initial，所以字体颜色是默认的</p>
        </div>
        <br/>
      </div>
      <div class="part">
        <div>!important 会打破上面的规则，如果一个属性设置了这个，则以这个为准，尽管其他的类选择器的优先级更高</div>
        <code class="block-code">
          .better {
          background-color: gray;
          border: none !important;
          }
        </code>
      </div>
      <div class="area">
        多个选择器可以这么写 <code>h1, span {color:red;}</code><br>
        并集选择器可以这么写 <code>a.b {color:red;}</code><br>
      </div>

    </div>
    <div class="area">
      <h2>盒模型</h2>
      <div>CSS 中，所有的元素都可以分成块级和内联，简单点理解就是，块级是一个块，它会换行，内联则不会换行，所以也叫行内模型</div>
      <div><strong>块级盒子（Block box）</strong>
        <div class="part"><strong>特点</strong>
          <ul>
            <li>盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽</li>
            <li>每个盒子都会换行</li>
            <li> width 和 height 属性可以发挥作用</li>
            <li> 内边距（padding）, 外边距（margin）和 边框（border）会将其他元素从当前盒子周围“推开”</li>
          </ul>
        </div>
        <div class="part"><strong>例子</strong>
          常用的 &lt;h1&gt; &lt;p&gt; &lt;div&gt; 都是
        </div>
      </div>

      <div><strong>内联盒子（Inline box）</strong>
        <div class="part"><strong>特点</strong>
          <ul>
            <li>盒子不会产生换行。</li>
            <li>width 和 height 属性将不起作用。</li>
            <li>垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。</li>
            <li>水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。</li>
          </ul>
        </div>
        <div class="part"><strong>例子</strong>
          常用的 &lt;strong&gt; &lt;b&gt; &lt;a&gt; 都是
        </div>
      </div>

      <div>盒子的类型不是一成不变的，可以通过设置 display 来修改它的类型, flex 对外是 block，对内则根据当前的规则显示
        <div class="part"><strong>例如：</strong>
          我后面接的是一个 strong <strong style="display: block; color:red">标签</strong>，但是它变成了块级模型
        </div>
        <div class="part">inline-block 设置到内联中后，有以下作用:
          设置width 和height 属性会生效。<br>
          padding, margin, 以及border 会推开其他元素。<br>
          我后面接的是一个 strong <strong
              style="display: inline-block; color:red;width: 5em;height:5em;padding: 1em; border:1px solid salmon;">标签</strong>，但是它变成了块级模型
        </div>
      </div>

      <div>盒子的大小是由 宽,高 + padding + broder 决定的，margin 会决定它与同级之间的的间距<br/>
        <img src="../../assets/box-model.png"><br/>
        chrome 的开发工具能够很清晰的看出来<br>
        <img src="../../assets/chrome_box.png" style="width: 100%">
      </div>
    </div>
    <div class="area">
      <h2>背景与边框</h2>
      <div class="part">
        <div>同时设置了背景和颜色，则背景在前面，颜色在后面。background-size 能控制背景的缩放</div>
        <div>cover —浏览器将使图像足够大，使它完全覆盖了盒子区，同时仍然保持其高宽比。在这种情况下，有些图像可能会跳出盒子外.<strong>一般用这个，不然就用重复</strong></div>
        <div>contain — 浏览器将使图像的大小适合盒子内。在这种情况下，如果图像的长宽比与盒子的长宽比不同，则可能在图像的任何一边或顶部和底部出现间隙。</div>
        <div>background-position 控制图片的位置，可以使用 top , center ,或者 1em, 10%, 设置一个参数表示控制整体，两个参数表示x,y, 四个表示控制上下左右</div>
        <div class="part">
          <div
              class="test-bg"
              style='width: 30em; height: 30em; '>

          </div>
        </div>
      </div>
      <div class="part">
        <div>边框通常这么设置 <code>border: 1px solid blue</code> 表示设置边框宽度是 1px，样式是 solid, 颜色是蓝色<br/>
          <ul>
            <li> border-top: 1px solid black; 仅设置上边框</li>
            <li> border-width: 1px; 宽</li>
            <li> border-style: solid; 样式</li>
            <li> border-color: black; 颜色</li>
            <li> border-color: black; 颜色</li>
            <li> border-radius: 10px; 圆角</li>
            <li> border-top-right-radius: 1em 10%; 水平半径为 1em，垂直半径为 10％</li>
            <li> box-shadow: 10px 10px 10px #5C5C98FF; right,bottom, 模糊半径，颜色</li>
          </ul>
          <div style="background-color: palegreen;
          width: 200px;
          height: 200px;
          border: 2px solid aqua;
          border-radius: 1em;
          box-shadow: 10px 10px 10px #5C5C98FF;
"></div>

        </div>
      </div>
    </div>
    <div class="area">
      <h2>书写模式：writing-mode </h2>
      <ul>
        <li>horizontal-tb: 块流向从上至下。对应的文本方向是横向的。</li>
        <li>vertical-rl: 块流向从右向左。对应的文本方向是纵向的。</li>
        <li>vertical-lr: 块流向从左向右。对应的文本方向是纵向的。</li>
      </ul>
      <div>举个例子：</div>
      <div
          style="
        writing-mode: vertical-rl;
        padding: 1em;
        margin: 1em;
        background-color: olive;
        color: white;
        border-top: 1px solid red;
        font-size: 4em;">
        测试书写模式
      </div>
    </div>
    <div class="area">
      <h2>溢出内容处理</h2>
      <div>使用 overflow:scroll 来控制即可,overflow: auto会自动根据当前浏览器的大小来决定是否要显示滚动条， overflow-x 或y 控制一个方向上的滚动</div>
      <div style="background-color: #b1d069; height: 5em;overflow: auto;">
        什么是溢出？
        我们知道，CSS 中万物皆盒，<br/>因此我们可以通过给width和height（或者 inline-size 和 block-size）赋值的方式来约束盒子的尺寸。<br/>溢出是在你往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS
        给了你好几种工具来控制溢出，在学习的早期理解这些概念是很有用的。在你写 CSS 的时候你经常会遇到溢出的情形，尤其是当你以后更加深入到 CSS 布局的时候。
        <br/>
        CSS 尽力减少“数据损失”<br/>
        我们从两个展示了在碰到溢出的时候，<br/>CSS 默认会如何处理的例子开始吧。<br/>
        <br/>
        第一个例子是，一个盒子，在块方向上已经受到height的限制。<br/>然后我们已经加了过多的内容，以至于盒子里面没有空间容纳。<br/>内容正在从盒子里面溢出，并让自己把盒子下面的段落弄得一团糟。<br/>
      </div>
    </div>
    <div class="area">
      <h2>单位</h2>
      <div class="part">
        <table>
          <tr>
            <td><strong>单位</strong></td>
            <td><strong>说明</strong></td>
          </tr>
          <tr>
            <td><code>em</code></td>
            <td>em 是相对于自身 font-size 大小，默认是 16px,如果 font-size 改成 20，则 1em =20px</td>
          </tr>
          <tr>
            <td><code>px</code></td>
            <td>像素</td>
          </tr>
          <tr>
            <td><code>lh</code></td>
            <td>元素的 line-height</td>
          </tr>
          <tr>
            <td><code>vw</code></td>
            <td> 视窗宽度的 1%，等于 1%</td>
          </tr>
          <tr>
            <td><code>vh</code></td>
            <td> 视窗高度的 1%</td>
          </tr>
        </table>
      </div>
      <div class="part">
        <h3>颜色 #FFFFFF</h3>
        <div>也可以这样表示 rgb(30,60,90)</div>
        <div>也可以这样表示 rgba(30,60,90,0.3)</div>
      </div>
      <div class="part">使用百分比作为元素外边距（margin）或填充（padding）的单位时，值是以包含块的内联尺寸进行计算的，也就是元素的水平宽度。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssBase"
}
</script>

<style scoped>

.test-bg {
  background-image: url('../../assets/logo.png');
  /*background-size: cover;*/
  background-repeat: no-repeat;
  background-position: center bottom;
  background-color: salmon;
}

.block-code {
  margin: 0.5em;
  display: block;
  padding: 0.5em;
  border: 1px solid #CCC;
}

</style>