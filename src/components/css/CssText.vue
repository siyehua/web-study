<template>
  <div>
    <h1>样式化文本</h1>
    <div class="part">
      给 text 设置字体，例如：<br/>
      font-family：字体<br/>
      font-style：斜体<br/>
      font-weight：粗细<br/>
      text-decoration：下划线，上划线<br/>
      <div style="font-family: cursive;
      font-style: italic;
      text-decoration: underline;
      font-size: 2em;">我是特殊字体
      </div>
    </div>
    <div class="part">
      <h2>文本对齐:text-align</h2>
      left: 左对齐文本。<br/>
      right: 右对齐文本。<br/>
      center: 居中文字(内联，行内局中)<br/>
      justify: 使文本展开，改变单词之间的差距，使所有文本行的宽度相同。<br/>
      <div style="padding:1em;width: 10em;height: 5em; background-color: tan; text-align: center">测试文本</div>
    </div>
    <div class="part">
      <h2>行高, line-height, 设置行高等于 height，能让整个文本在盒子中局中</h2>
      <div style="padding:1em;width: 10em;height: 5em; background-color: tan; text-align: center; line-height: 5em;">
        测试文本
      </div>
    </div>

    <div class="part">
      <h2>文本局中对齐的三种方式</h2>


      <pre><code class="language-javascript language-css">
    display: table-cell; //表示设置成 table 的一个元素 td
    text-align: center; // 水平局中
    vertical-align: middle;  //垂直局中
      </code></pre>
      <div style="width: 10em;
    height: 10em;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    background-color: #b1d069
    ">
        第一种
      </div>

      <br/>
      <pre><code class="language-javascript language-css">
    text-align: center; //水平局中
    line-height: 10em;  // 行高等于高度，则垂直局中
      </code></pre>
      <div style="width: 10em;
    height: 10em;
    text-align: center;
    line-height: 10em;
    background-color: #b1d069
    ">
        第二种
      </div>

      <br/>
      <pre><code class="language-javascript language-css">
    display: flex; // 开启 flex 弹性布局之后
    text-align: center; //无效
    justify-content: center; // 水平局中
    align-items: center; // 垂直局中
      </code></pre>
      <div style="width: 10em;
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b1d069
    ">
        第三种
      </div>

    </div>


    <div class="part">
      <h2>文本后面加省略号</h2>
      <pre><code class="language-javascript language-css">
        .text-ellipsis{
        width: 5em;
        /*height: 5em;*/ 如果不是高度是多行，无效
        white-space: nowrap; // 设置这个表示文本不换行
        overflow: hidden; //设置这个表示文本溢出了要截断，不然不会有效果
        text-overflow: ellipsis; //文本过长就会添加省略号
        }
      </code></pre>
      <h3>例如下面的例子</h3>
      <div class="text-ellipsis">我是很长很长的文本我是很长很长的文本我是很长很长的文本我是很长很长的文本我是很长很长的文本我是很长很长的文本</div>
    </div>
    <div class="part">
      设置表格有 border，这么设置：<br>
      <pre><code class="language-javascript language-css">
          table {
          border-collapse: collapse;
          border-spacing: 0;
          }

          tr, td {
          padding: 0.5em;
          border: 1px solid #CCC;
          }</code></pre>
    </div>
    <div class="part"><br/>
      <h3>超链接设置</h3>
      Link (没有访问过的): 这是链接的默认状态，当它没有处在其他状态的时候，它可以使用:link 伪类来应用样式。<br/>
      Visited: 这个链接已经被访问过了 (存在于浏览器的历史纪录), 它可以使用 :visited 伪类来应用样式。<br/>
      Hover: 当用户的鼠标光标刚好停留在这个链接，它可以使用 :hover 伪类来应用样式。<br/>
      Focus: 一个链接当它被选中的时候 (比如通过键盘的 Tab 移动到这个链接的时候，或者使用编程的方法来选中这个链接 HTMLElement.focus() (en-US)) 它可以使用 :focus
      伪类来应用样式。<br/>
      Active: 一个链接当它被激活的时候 (比如被点击的时候)，它可以使用 :active 伪类来应用样式。<br/>
      <a href="https://www.baidu.com" style="padding: 2em;">测试超链接样式</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssText"
}
</script>

<style scoped>
.text-ellipsis {
  width: 5em;
  /*height: 5em;*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

a:link {
  color: skyblue;
}

a:visited {
  color: teal;
}

a:hover {
  color: pink;
}

</style>