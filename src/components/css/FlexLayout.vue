<template>
  <!--  弹性布局-->
  <div>
    <h1>弹性布局</h1>
    <div class="part">
      <h2>特点</h2>
      <div>将 display 的 value 设置成 flex，就开启了弹性布局，开启了此属性之后:</div>
      <div>1. 元素本身的宽度将包裹内容</div>
      <div>2. 子元素宽度包裹内容, 就算设置了 display: block 也无效</div>
      <div>3. 子元素默认会从左往右排列，不会自动换行，也不会强行撑开父元素</div>


      <div><br/>举个例子，下面的 div 里，父元素开启了弹性布局，子元素，div 默认是块元素，默认占一行，但是开启后宽度默认是包裹内容的</div>
      <div>其次，子元素强行开启了 display: block; 宽度依旧是适应内容，并且 6 个元素不够放了，也不会自动换行</div>
      <div class="flex">
        <div class="item">我是第 1 个元素</div>
        <div class="item">我是第 2 个元素</div>
        <div class="item">我是第 3 个元素</div>
        <div class="item">我是第 4 个元素</div>
        <div class="item">我是第 5 个元素</div>
        <div class="item">我是第 6 个元素</div>
      </div>


    </div>

    <div class="part">
      <h2>属性</h2>
      <table>
        <tr>
          <td><strong>属性</strong></td>
          <td><strong>值</strong></td>
          <td><strong>含义</strong></td>
        </tr>
        <tr>
          <td>flex-direction</td>
          <td> row || column || row-reverse || column-reverse</td>
          <td> 控制Flex项目沿着主轴（Main Axis）的排列方向</td>
        </tr>
        <tr>
          <td>flex-wrap</td>
          <td>wrap || nowrap || wrap-reverse</td>
          <td>控制Flex项目是否换行显示</td>
        </tr>
        <tr>
          <td>flex-flow</td>
          <td>row wrap|| row nowrap || column wrap || column nowrap 等</td>
          <td>flex-direction和flex-wrap两个属性的组合速记属性</td>
        </tr>
        <tr>
          <td>justify-content</td>
          <td>flex-start || flex-end || center || space-between || space-around</td>
          <td>控制 Flex项目在Main-Axis上的对齐方式</td>
        </tr>
        <tr>
          <td>align-items</td>
          <td>flex-start || flex-end || center || stretch || baseline</td>
          <td>控制Flex项目在Cross-Axis对齐方式</td>
        </tr>
        <tr>
          <td>align-content</td>
          <td>flex-start || flex-end || center || stretch</td>
          <td>用于多行的Flex容器，控制Flex项目在Cross-Axis对齐方式</td>
        </tr>
      </table>

      <div><br/>上述例子，不会换行是因为 flex-wrap 的值默认是 nowrap, 修改成 wrap 即会自动换行:</div>
      <pre v-highlight><code>
    flex-wrap: wrap;
      </code></pre>
      <div class="flex wrapper">
        <div class="item">我是第 1 个元素</div>
        <div class="item">我是第 2 个元素</div>
        <div class="item">我是第 3 个元素</div>
        <div class="item">我是第 4 个元素</div>
        <div class="item">我是第 5 个元素</div>
        <div class="item">我是第 6 个元素</div>
      </div>

      <div><br/>默认的方向是 flex-direction 是 row ,即横向的，改成纵向：column</div>
      <div>同时，设置后子元素的宽度会充满整个父元素</div>
      <pre v-highlight><code>
    flex-direction: column;
      </code></pre>
      <div class="flex direction">
        <div class="item">我是第 1 个元素</div>
        <div class="item">我是第 2 个元素</div>
        <div class="item">我是第 3 个元素</div>
      </div>


      <div><br/>如果设置纵向布局后，又给子元素一个固定的宽度，那就可以达到分栏排版的效果</div>
      <pre v-highlight><code>
    flex-direction: column;
    lex-wrap: wrap;
      </code></pre>
      <div class="flex wrapper direction height">
        <div class="item width">我是第 1 个元素</div>
        <div class="item width">我是第 2 个元素</div>
        <div class="item width">我是第 3 个元素</div>
        <div class="item width">我是第 4 个元素</div>
        <div class="item width">我是第 5 个元素</div>
        <div class="item width">我是第 6 个元素</div>
        <div class="item width">我是第 7 个元素</div>
      </div>
    </div>

    <div class="part">
      <h2>局中和对齐</h2>
      <div>justify-content 意思是主轴的对齐方式，例如, flex 默认是水平排的，所以设置之后，就在水平局中</div>
      <pre v-highlight><code>
   justify-content: center;
      </code></pre>
      <div class="flex" style="justify-content: center;">
        <div class="item width height">1</div>
      </div>

      <div><br/>改成排序方式是列，就会在垂直方向上局中了</div>
      <pre v-highlight><code>
   flex-direction: column;
   justify-content: center;
      </code></pre>
      <div class="flex" style="justify-content: center;flex-direction: column;height: 50em;">
        <div class="item width height">1</div>
      </div>
    </div>

    <div class="part">
      <h2>局中和对齐2 </h2>
      align-items控制Flex项目在Cross-Axis对齐方式。<br/>
      align-items的默认值是stretch，让所有的Flex项目高度和Flex容器高度一样，铺展开。这也是为什么默认的高度是和父元素一样高的原因<br/>
      baseline让所有flex项目在Cross-Axis上沿着他们自己的基线对齐。<br/>
      其中stretch和baseline在不设置具体高度值，才会如上表现，否则会显示固定的高度。<br/>
      align-content属性与align-items作用相同，不过该属性只针对多行，对单行无效。

      <div><br/>下面这个例子，flex 弹性盒子默认是水平排列的，但是它在垂直方向上局中了</div>
      <pre v-highlight><code>
        align-items: center;
      </code></pre>
      <div class="flex" style="height: 20em;align-items: center;">
        <div class="item width" style="height: 10em;">1</div>
      </div>

      <div><br/>如果有多行，就要设置 align-content 局中</div>
      <pre v-highlight><code>
        align-content: center;
        flex-wrap: wrap;
      </code></pre>
      <div class="flex" style="height: 50em;align-content: center; flex-wrap: wrap">
        <div class="item width" style="height: 10em;">1</div>
        <div class="item width" style="height: 10em;">2</div>
        <div class="item width" style="height: 10em;">3</div>
        <div class="item width" style="height: 10em;">4</div>
        <div class="item width" style="height: 10em;">5</div>
        <div class="item width" style="height: 10em;">6</div>
        <div class="item width" style="height: 10em;">7</div>
      </div>
    </div>

    <div class="part">
      <h2>其他属性</h2>
      <table>
        <tr>
          <td><strong>属性</strong></td>
          <td><strong>值</strong></td>
          <td><strong>含义</strong></td>
        </tr>
        <tr>
          <td>order</td>
          <td> 数值</td>
          <td>根据order值重新排序。从底到高。</td>
        </tr>
        <tr>
          <td>flex-grow</td>
          <td>0 || positive number</td>
          <td>控制Flex项目在容器有多余的空间如何放大</td>
        </tr>
        <tr>
          <td>flex-shrink</td>
          <td>0 || positive number</td>
          <td>控制Flex项目在容器 没有额外空间又如何缩小</td>
        </tr>
        <tr>
          <td>flex-basis</td>
          <td>auto || % || em || rem || px</td>
          <td>指定Flex项目的初始大小</td>
        </tr>
        <tr>
          <td>align-self</td>
          <td>auto || flex-start || flex-end || center || baseline || stretch</td>
          <td>控制单个Flex项目在Cross-Axis对齐方式</td>
        </tr>
      </table>

      <div><br/>order 举个例子,下面两个盒子中，盒子设置了 order = 2 就排在 1 的后面了：</div>
      <pre v-highlight><code>
  order: 2;
      </code></pre>
      <div class="flex">
        <div class="item width" style="height: 10em;order: 2;">1</div>
        <div class="item width" style="height: 10em; ">2</div>
      </div>

      <div><br/>flex-grow 的意思是权重，即item 占用了多少固定端宽度，将剩下的宽度按照 grow 大小平均，再乘以 grow 的大小，例如下面这个例子
        ，1 和 2 这两个盒子，1 设置了 grow 就占用了剩余的所有空间
      </div>
      <pre v-highlight><code>
  flex-grow: 1
      </code></pre>
      <div class="flex" style="flex-wrap: wrap;">
        <div class="item width" style="height: 10em;flex-grow: 1">1</div>
        <div class="item width" style="height: 10em; ">2</div>
      </div>

      <div><br/>flex-shrink 的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。<br/>
        本例中 盒子 1 的收缩因子是 2，其他的是 1，在比例是： 2+1+1+1+1+1 = 7<br/>
        我们可以看到父容器定义为 40em，子项被定义为 10em，子项相加之后即为 60em，超出父容器 20em。那么超出的 20em 必须通过收缩因子。<br/>
        所以盒子 1 的宽度是： 10em(盒子宽度) - 20em（超出部分） / 7（总比例） * 2（收缩因子） = 65px<br/>
        所以其他盒子的宽度是： 10em(盒子宽度) - 20em（超出部分） / 7（总比例） * 1（收缩因子） = 112px<br/>
      </div>
      <pre v-highlight><code>
  flex-shrink: 2
      </code></pre>
      <div class="flex" style="width: 40em;padding:0;background-color: rebeccapurple">
        <div class="item width" style="height: 10em;padding:0;margin:0;flex-shrink: 2">1</div>
        <div class="item width" style="height: 10em;padding:0;margin:0;flex-shrink: 1">2</div>
        <div class="item width" style="height: 10em;padding:0;margin:0;flex-shrink: 1">3</div>
        <div class="item width" style="height: 10em;padding:0;margin:0;flex-shrink: 1">4</div>
        <div class="item width" style="height: 10em;padding:0;margin:0;flex-shrink: 1">5</div>
        <div class="item width" style="height: 10em;padding:0;margin:0;flex-shrink: 1">6</div>
      </div>

      <div style="color: palevioletred;"><br/><strong>所以简单点理解就是：<br/>
        flex-grow 是获取多余的空间按照权重均分，权重越大则扩展的宽度就越多<br/>
        flex-shrink 是获取超出的空间按照权重均分，权重越大则需要减去的宽度越多
      </strong></div>
    </div>

    <div class="part">
      <h2>flex-basis</h2>
      <div>flex-basis 指定了 flex 元素在主轴方向上的初始大小，即决定了 flex项目内容的宽或者高（取决于主轴的方向）的尺寸大小。<br/>
        默认情况，Flex项目的初始宽度由flex-basis的默认值决定，即：flex-basis: auto。Flex项目宽度的计算是基于内容的多少来自动计算。<br/>
        flex-basis和width/height有一定的优先级，具体规则如下：<br/>
        flex-basis 的优先级比 width/height 非auto高<br/>
        width/height auto优先级等于 flex-basis，取两者中的最大值。<br/>
      </div>

      <div><br/>下面例子中，盒子 2 设置了 basics = 50%，即父元素宽度的 50%，所以它的宽度等于 10em;</div>
      <pre v-highlight><code>
  flex-basis: 50%
      </code></pre>
      <div class="flex" style="width: 20em;height: 20em;padding:0;background-color: rebeccapurple;flex-wrap: wrap;">
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item" style="flex-basis: 50%">2</div>
      </div>
    </div>


    <div class="part">
      <h2>align-self</h2>
      <div>align-self 控制单个项目沿着Cross-Axis的对其方式。<br/>
        除了auto之外，上述示例中flex容器设置了align-items：center。<br/>
        auto 是将目标flex项目的值设置为父元素的 align-items值<br/>
      </div>

      <div><br/>前面的例子说了 align-items 可以可以子元素的对齐方式，但是如果只想指定的某个元素设置对齐方式，就需要对子元素设置，
      <br/>下面例子中，盒子 1 在垂直方向上局中了，其他的没有</div>
      <pre v-highlight><code>
  align-self: center；
      </code></pre>
      <div class="flex" style="width: 40em;height: 40em;padding:0;background-color: rebeccapurple;flex-wrap: wrap;">
        <div class="item height" style="align-self: center">1</div>
        <div class="item height">2</div>
        <div class="item height">3</div>
      </div>
    </div>

    <div class="part">
      <div>参考资料：<a href="https://www.jianshu.com/p/0db2e9eb10f0" target="_blank">Flex 详解</a></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FlexLayout"
}
</script>

<style scoped>

.height {
  height: 20em;
}

.width {
  width: 10em;
}

.direction {
  flex-direction: column;
}

.wrapper {
  flex-wrap: wrap;
}

.flex {
  display: flex;
  border: 1px solid skyblue;
}


.item {
  display: block;
  background-color: #b1d069;
  padding: 1em;
  margin: 1em;
  border: 1px solid tomato;
}
</style>