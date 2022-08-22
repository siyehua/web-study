<template>
  <div>
    <h1>Position</h1>
    <div class="part">
      <h2>定位简介</h2>
      <div>默认定位是 static, 即没有开启定位，位置按照正常布局定位</div>
      <div>定位开启后，可以设置 left, right, top, bottom 方向上的距离， 如果不设置，则元素本身位置不会变化，
        但是有的定位会脱离文档流，导致包裹它或者依赖它的元素的位置大小发生变化
      </div>

      <table>
        <tr>
          <td><strong>类型</strong></td>
          <td><strong>代码</strong></td>
          <td><strong>描述</strong></td>
        </tr>
        <tr>
          <td>静态定位</td>
          <td><code>position: static;</code></td>
          <td>默认定位</td>
        </tr>
        <tr>
          <td>相对定位</td>
          <td><code>position: relative;</code></td>
          <td>即相对于默认位置的定位</td>
        </tr>
        <tr>
          <td>绝对定位</td>
          <td><code>position: absolute;</code></td>
          <td>默认相对于父标签中任意一个开启定位的元素，注意，如果标签在其上面，但是没有任何包含关系，是不会依赖的<br/>
            如果都没有，就相对于html 标签的定位
          </td>
        </tr>
        <tr>
          <td>固定定位</td>
          <td><code>position: fixed;</code></td>
          <td>相对于窗口的位置，而且不会滚动，可以用来做菜单</td>
        </tr>
        <tr>
          <td>粘性定位</td>
          <td><code>position: sticky;</code></td>
          <td>看到后就不会一直在，可以做吸附功能</td>
        </tr>
      </table>

    </div>

    <div class="part">
      <h2>relative</h2>
      <div>相对布局的主要特性是相对于自身，不影响任何其他布局</div>

      <div>
        <br/>
        <h3>例子 1</h3>
        <div>例如，下面的盒子 2 开启了相对定位，但是没有影响包裹它的 1，以及它的兄弟3，以及 1 的兄弟元素 4:</div>
        <div style="margin: auto auto;background-color: rebeccapurple;  width: 10em;height: 10em;">
          1
          <div style="background-color: aqua; position: relative; width: 3em;height: 3em;">2</div>
          <div style="background-color: beige;  width: 3em;height: 3em;">3</div>
        </div>
        <div style="margin: auto auto;background-color: cornflowerblue;  width: 3em;height: 3em;">4</div>
      </div>

      <div>
        <br/>
        <h3>例子 2</h3>
        <div>还是上面那个例子，盒子 2 就算设置 top 等属性，也不会影响其他的盒子</div>
        <div style="margin: auto auto;background-color: rebeccapurple;  width: 10em;height: 10em;">
          1
          <div style="background-color: aqua;width: 3em;height: 3em;top: 2em;left: 2em;position: relative;">2</div>
          <div style="background-color: beige;  width: 3em;height: 3em;">3</div>
        </div>
        <div style="margin: auto auto;background-color: cornflowerblue;  width: 3em;height: 3em;">4</div>
      </div>
    </div>

    <div class="part">
      <h2>absolute</h2>
      <div>开启后会直接将元素脱离文档流，所以一般为了避免这种情况，默认父元素都会开启相对定位</div>
      <div>默认相对于父标签中任意一个开启定位的元素，注意，如果标签在其上面，但是没有任何包含关系，是不会依赖的<br/>
        如果一个都没有找到，就相对于 html 标签的定位
      </div>

      <div>
        <br/>
        <h3>例子 1</h3>
        <div>例如，下面的盒子 2 开启了绝对定位，它的父元素盒子 1 开启了相对定位，所以盒子 2 就相对于 1 来定位，但是它影响了盒子 3 的位置
          <br>但是盒子 2 并没有设置任何定位的属性（top,right 等等），所以修改盒子 1（父元素）对盒子 2 来说没有任何影响
        </div>
        <div :style="showParentPosition ?'position: relative;':''" style="margin: auto auto;
        background-color: rebeccapurple;
          width: 10em;
          height: 10em;"
        >1
          <div style="background-color: aqua; position: absolute; width: 3em;height: 3em;">2</div>
          <div style="background-color: beige;  width: 5em;height: 5em;">3</div>
        </div>
        <div @click="setBoxState"
             style="margin: auto auto;background-color: cornflowerblue; display: inline-block; padding:1em;">点击改变盒子 1
          的定位
        </div>
        <div v-show="!showParentPosition" style="display: inline-block;padding: 1em;">Tips: 盒子 2 没有任何影响</div>
      </div>

      <div>
        <br/>
        <h3>例子 2</h3>
        <div>上面那个例子，如果给 盒子 2 设置了定位属性，它的位置就会改变
        </div>
        <div :style="showParentPosition ?'position: relative;':''" style="margin: auto auto;
        background-color: rebeccapurple;
          width: 10em;
          height: 10em;"
        >1
          <div style="background-color: aqua; position: absolute; width: 3em;height: 3em; left: 5em;">2</div>
          <div style="background-color: beige;  width: 3em;height: 3em;">3</div>
        </div>
        <div @click="setBoxState"
             style="margin: auto auto;background-color: cornflowerblue; display: inline-block; padding:1em;">点击改变盒子 1
          的定位
        </div>
        <div v-show="!showParentPosition" style="display: inline-block;padding: 1em;">Tips: 盒子设置了左边定位，所以在最左边</div>
      </div>

      <div>
        <br/>
        <h3>例子 3</h3>
        <div>盒子 3 如果被盖住了，可以设置 position: absolute; 这样盒子 3 也脱离了文档，但这带来了一个新的问题<strong>盒子 2 被盖住了</strong>
          <br/>按照顺序，3 在 2 的后面，盖住 2 是正常的，如果不想让后面的盒子盖住前面的，可以设置 z-index 属性来指定层级，默认 z-index = 0
          <br/> 注意：z-index 只有开启了定位的元素才会生效，不开启是不生效的
          <br/> 下面例子中，z-index 设置到盒子 2 中，盒子 2 就盖住了盒子 3 的部分内容。
        </div>
        <div :style="showParentPosition ?'position: relative;':''" style="margin: auto auto;
        background-color: rebeccapurple;
          width: 10em;
          height: 10em;"
        >1
          <div style="background-color: aqua; position: absolute; width: 3em;height: 3em;left: 1.5em; z-index: 1;">2
          </div>
          <div style="background-color: beige; position: absolute; width: 3em;height: 3em;">3</div>
        </div>
        <div @click="setBoxState"
             style="margin: auto auto;background-color: cornflowerblue; display: inline-block; padding:1em;">点击改变盒子 1
          的定位
        </div>
        <div v-show="!showParentPosition" style="display: inline-block;padding: 1em;">Tips: 盒子设置了左边定位，所以在最左边</div>
      </div>

      <div style="position: relative">
        <br/>
        <h3>例子 4</h3>
        <div>同样的例子，由于盒子 1 的父元素也开启了定位，就算把盒子 1 的 定位取消了，盒子 2 仍然在这个盒子
        </div>
        <div :style="showParentPosition ?'position: relative;':''" style="margin: auto auto;
        background-color: rebeccapurple;
          width: 10em;
          height: 10em;"
        >1
          <div style="background-color: aqua; position: absolute; width: 3em;height: 3em; left: 5em;top: 5em;">2</div>
          <div style="background-color: beige;  width: 3em;height: 3em;">3</div>
        </div>
        <div @click="setBoxState"
             style="margin: auto auto;background-color: cornflowerblue; display: inline-block; padding:1em;">点击改变盒子 1
          的定位
        </div>
        <div v-show="!showParentPosition" style="display: inline-block;padding: 1em;">盒子 1 的父元素开启了定位，所以不会盒子 2 没跑到网页最上面
        </div>
      </div>
    </div>

    <div class="part">
      <h2>fixed</h2>
      <div>固定定位，它是只能相对于窗口定位，不想绝对定位那样，不同的场景不同</div>
      <div>它也会<strong>脱离文档流</strong></div>
      <div><strong>如果不写定位属性，则默认左位置是跟着父元素的位置，垂直位置则到底部外面，所以看不到这个元素</strong>，这跟绝对定位不同，绝对定位默认是在左上角</div>

      <div>
        <br/>
        <h3>例子 1</h3>
        <div>开启了 fixed 定位，但是没有写定位属性，导致看不到盒子 2 但是它脱离了文档流，导致盒子 3 顶上来了</div>
        <div style="margin: auto auto;background-color: rebeccapurple;  width: 10em;height: 10em;">
          1
          <div :style="showFixPosition ? 'bottom: 0;':''"
               style="background-color: red; position: fixed; width: 10em;height: 10em;">2
          </div>
          <div style="background-color: beige;  width: 3em;height: 3em;">3</div>
        </div>
        <div style="margin: auto auto;background-color: cornflowerblue;  width: 3em;height: 3em;">4</div>
        <div @click="showFixPosition = !showFixPosition"
             style="margin: auto auto;background-color: cornflowerblue; display: inline-block; padding:1em;">点击设置盒子 2
          的 bottom 定位
        </div>
      </div>


    </div>

    <div class="part">
      <h2>sticky</h2>
      <div>粘性定位</div>
      <div>看到后就不会一直在，可以做一些菜单吸附功能</div>
      <div>它不会脱离文档流</div>
      <div>它<strong>必须设置定位属性 top or right 等等</strong></div>
      <div>如果被盖住了，可以用 z-index 来解决层级</div>

      <div>
        <br/>
        <h3>例子 1</h3>
        <div>没有设置定位属性，导致无效</div>
        <div style="margin: auto auto;background-color: rebeccapurple;height: 2000px;">
          1
          <div
              style="background-color: red; position: sticky; height: 5em;">菜单流
          </div>
        </div>
      </div>
      <div>
        <br/>
        <h3>例子 2</h3>
        <div>设置了定位属性 top，生效了</div>
        <div style="margin: auto auto;background-color: rebeccapurple;height: 2000px;">
          1
          <div
              style="background-color: red; position: sticky; height: 5em;top: 48px">菜单流
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "CssPosition",
  setup() {
    let showParentPosition = ref(true);
    let showFixPosition = ref(false);

    function setBoxState() {
      showParentPosition.value = !showParentPosition.value
    }

    return {
      showFixPosition,
      setBoxState,
      showParentPosition,
    }
  },
}
</script>

<style scoped>


</style>