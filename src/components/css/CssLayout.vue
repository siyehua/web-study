<template>
  <div>
    <h1>布局</h1>
    <div class="area">
      <div class="part">
        <h2>display</h2>
        <div>display 就是盒子默认展示的样式,默认样式是可以修改的</div>
        <div>display:block 块级</div>
        <div>display:inline 内联</div>
        <div>display:flex 弹性，例如下面的布局,默认每个 div 应该是占用一行的，使用 flex 之后则会变成内联的排在一起</div>
        <div style="display: flex;">
          <div style="padding: 1em;background-color: darkseagreen;">一</div>
          <div style="padding: 1em;background-color: darkseagreen;">二</div>
          <div style="padding: 1em;background-color: darkseagreen;">三</div>
        </div>
        <div>flex: value ，权重，有点类似于 android 的 weight 属性, 可以配合 像素一起使用，如果使用 flex: 1 200px 表示先占用 200，剩下的再分</div>
        <div style="display: flex;">
          <div class="flex-div" style="flex: none;">一</div>
          <div class="flex-div" style="flex: 2;">二</div>
          <div class="flex-div">三</div>
        </div>
      </div>
      <div class="part">
        <h2>flex 详解</h2>
        <div>以上面的例子为例，默认 flex 弹性布局，是从左到右的，flex-direction: row，要改成从上大小，可以设置：flex-direction: column</div>
        <div style="display: flex;flex-direction: column;">
          <div style="padding: 1em;background-color: darkseagreen;">一</div>
          <div style="padding: 1em;background-color: darkseagreen;">二</div>
          <div style="padding: 1em;background-color: darkseagreen;">三</div>
        </div>
      </div>
      <div class="part">
        <h2>flex 布局 wrap</h2>
        <div>以上面的例子为例，如果 flex 从左到右排，过多的元素会让整个 div 盒子变宽，解决这个问题<br/>
          就是设置 flex-wrap: wrap，过宽会接着往下排<br/>如果 item 设置了<code>flex:200px</code>则表示 item 最少 200px，如果有空白，会被 item 拉伸
        </div>
        <div><strong>可以将 <code>flex-direction: row; flex-wrap: wrap;</code> 缩写为：<code>flex-flow: row
          wrap;</code></strong></div>
        <div style="display: flex; flex-wrap: wrap">
          <div class="flex-item">一</div>
          <div class="flex-item">二</div>
          <div class="flex-item">三</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
          <div class="flex-item">四</div>
        </div>
      </div>
    </div>

    <div class="area">

      <div class="part">
        <h2>grid</h2>
        <div>grid 网格</div>
        <div class="wrapper">
          <div class="grid-item">One</div>
          <div class="grid-item">Two</div>
          <div class="grid-item">Three</div>
          <div class="grid-item">Four</div>
          <div class="grid-item">Five</div>
          <div class="grid-item">Six</div>
        </div>

        <div>grid 2</div>
        <div class="wrapper">
          <div class="grid-item box1">One</div>
          <div class="grid-item box2">Two</div>
          <!--        <div class="grid-item">Three</div>-->
        </div>
      </div>
    </div>

    <div class="area">

      <div class="part">
        <h2>浮动 float</h2>
        <div class="float-box">浮动</div>
        <p style="font-size: 1.5em;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
          dolor,
          eu lacinia lorem placerat
          vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
          ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit
          amet
          orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
          convallis
          lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
          congue.
          Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
          felis,
          eget fermentum sapien.</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "CssLayout",
}
</script>

<style scoped>


.flex-item {
  flex: 200px;
  padding: 5em;
  margin: 0.2em;
  background-color: darkseagreen;
}

.float-box {
  background-color: hotpink;
  text-align: center;
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}

.box1 {
  grid-row: 1;
  grid-column: 2/4;
}

.box2 {
  grid-row: 1;
  grid-column: 1;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}

.grid-item {
  text-align: center;
  line-height: 100px;
  background-color: palegreen;
  color: white;
}

.flex-div {
  padding: 1em;
  background-color: darkseagreen;
  flex: 1;
  text-align: center;
  border: 1px solid black;
}
</style>