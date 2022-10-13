<template>
  <div>
    <h1>表格</h1>
    <div class="part">
      <h2>一个基本表格</h2>

      <div>代码：</div>
      <pre v-highlight><code>
  &lt;table&gt;
      &lt;tr&gt;
        &lt;td&gt;商品&lt;/td&gt;
        &lt;td&gt;价格&lt;/td&gt;
        &lt;td&gt;数量&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;牛奶&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;100&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;面包&lt;/td&gt;
        &lt;td&gt;5&lt;/td&gt;
        &lt;td&gt;200&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;鸡蛋&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;20&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    </code></pre>
      <table class="clear">
        <tr class="clear">
          <td>商品</td>
          <td>价格</td>
          <td>数量</td>
        </tr>
        <tr class="clear">
          <td>牛奶</td>
          <td>3</td>
          <td>100</td>
        </tr>
        <tr class="clear">
          <td>面包</td>
          <td>5</td>
          <td>200</td>
        </tr>
        <tr class="clear">
          <td>鸡蛋</td>
          <td>2</td>
          <td>20</td>
        </tr>
      </table>
    </div>

    <div class="part">
      <h2>移除默认样式</h2>
      <div>默认的 table 是有样式的，有一定的间距，要移除样式：</div>
      <pre v-highlight><code>
table {
    border-collapse: collapse; //合并边距
    border-spacing: 0; //边距为 0，设置了上面的属性，当前属性就无效了
}

tr, td {
    padding: 0.5em;
    border: 1px solid #CCC;
}
    </code></pre>
      <div>经过上面的设置之后，再来看看表格：</div>
      <table>
        <tr>
          <td>商品</td>
          <td>价格</td>
          <td>数量</td>
        </tr>
        <tr>
          <td>牛奶</td>
          <td>3</td>
          <td>100</td>
        </tr>
        <tr>
          <td>面包</td>
          <td>5</td>
          <td>200</td>
        </tr>
        <tr>
          <td>鸡蛋</td>
          <td>2</td>
          <td>20</td>
        </tr>
      </table>
    </div>

    <div class="part">
      <h2>设置单元格的内容对齐方式</h2>
      <div>默认的 td 在垂直方式上是局中对齐的，但是水平方向是从左到右，可以修改：</div>
      <pre v-highlight><code>
#content td { //表示只作用在id 为 content 的 td 上
  vertical-align: middle; //垂直方式上是局中对齐的就是这个样式，可不设置
  text-align: center; //文字水平方向上局中
}
    </code></pre>
      <div>经过上面的设置之后，再来看看表格：</div>
      <table id="content">
        <tr>
          <td>商品</td>
          <td>价格</td>
          <td>数量</td>
        </tr>
        <tr>
          <td>牛奶</td>
          <td>3</td>
          <td>100</td>
        </tr>
        <tr>
          <td>面包</td>
          <td>5</td>
          <td>200</td>
        </tr>
        <tr>
          <td>鸡蛋</td>
          <td>2</td>
          <td>20</td>
        </tr>
      </table>
    </div>

    <div class="part">
      <h2>背景颜色</h2>
      <div>有时候我们希望表格的标题，以及每一行的颜色都不同，可以利用 nth 来做</div>
      <pre v-highlight><code>
#title { //给第一行设置，也可以用 first child
  background-color: #444;
  color: white;
}

.bg:nth-child(odd) { // odd 表示基数，event 表示偶数， 还可以使用 2n+1,n+1, -n 等等
  background-color: #b1d069;
}
    </code></pre>
      <div>经过上面的设置之后，再来看看表格：</div>
      <table>
        <tr id="title">
          <td>商品</td>
          <td>价格</td>
          <td>数量</td>
        </tr>
        <tr class="bg">
          <td>牛奶</td>
          <td>3</td>
          <td>100</td>
        </tr>
        <tr class="bg">
          <td>面包</td>
          <td>5</td>
          <td>200</td>
        </tr>
        <tr class="bg">
          <td>鸡蛋</td>
          <td>2</td>
          <td>20</td>
        </tr>
      </table>
    </div>


    <div class="part">
      <h2>合并单元格</h2>
      <div>单元格可以合并行列</div>
      <pre v-highlight><code>
colspan=2 //表示占两列
rowspan=2 //表示占两行
    </code></pre>
      <div>经过上面的设置之后，再来看看表格：</div>
      <table >
        <tr>
          <td>商品</td>
          <td>价格</td>
          <td>数量</td>
        </tr>
        <tr>
          <td>牛奶</td>
          <td colspan="2">3</td>
        </tr>
        <tr>
          <td>面包</td>
          <td>5</td>
          <td>200</td>
        </tr>
        <tr>
          <td rowspan="2">鸡蛋</td>
          <td>2</td>
          <td>20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>20</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HtmlTable"
}
</script>

<style scoped>

.clear {
  all: revert;
}

td {
  width: 8em;
  height: 5em;
}

#content td {
  vertical-align: middle;
  text-align: center;
}

#title {
  background-color: #444;
  color: white;
}

.bg:nth-child(odd) {
  background-color: #b1d069;
}

</style>