<template>
  <div>
    <h1>动画</h1>
    <div class="part">
      <h2>过渡动画设置</h2>
      <div>过渡动画在属性修改时，执行的动画。类似于 Android 的补间动画，它本身不会修改元素的属性</div>
      <pre><code class="language-javascript language-css">
      transition: all 1s;
    </code></pre>
      <div><br/>all 表示所有的属性变更都会引起过渡动画， 1s 表示动画时间是 1s</div>
      <div class="transition1" @click="changeSize"
           :style="'height: '+ heightPx + 'px;width: '+ heightPx + 'px;' + 'line-height:' + heightPx +'px;'"
           style="background-color: #b1d069;text-align: center;">1
      </div>
    </div>

    <div class="part">
      <h2>动画</h2>
      <div>动画需要先写通过关键帧写一个动画，再设置进去。类似于 Android 的属性动画，它是不是真正的去修改元素的属性。</div>
      <pre><code class="language-javascript language-css">
        //先写一个动画
@keyframes my-animations {
  from{ //动画开始的属性
    margin-left: 0;
  }
  to{ //动画结束时的属性
    margin-right: 50em;
  }
}


.animation{
  animation-name: my-animations; //应用动画
  animation-duration: 1s; //动画的执行时间
  animation-iteration-count: 2; //动画的重复次数
  animation-delay: 2s; //动画延迟启动时间
  animation-fill-mode: forwards; //动画执行结束后保留结束时的属性
  animation: my-animations 1s steps(6) infinite; //应用动画， 1秒，分 6 步（不是平滑），infinite 重复
}
    </code></pre>
      <div><br/>all 表示所有的属性变更都会引起过渡动画， 1s 表示动画时间是 1s</div>
      <div :class="anima" @click="clickAnimate"
           style="background-color: #9900ff;text-align: center;width: 10em;height: 10em;line-height: 10em;">1
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "TransitionSetting",
  setup() {
    let heightPx = ref(100)
    let anima = ref('')

    function clickAnimate() {
      anima.value = 'animation2'
      console.log(anima.value)
    }

    function changeSize() {
      if (heightPx.value === 100) {
        heightPx.value = heightPx.value * 2
      } else {
        heightPx.value = heightPx.value / 2
      }
    }

    return {
      anima,
      clickAnimate,
      changeSize,
      heightPx
    }
  }
}
</script>

<style scoped>
.transition1 {
  transition: all 1s;
}

.animation2 {
  animation-name: my-animations;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  /*animation-delay: 2s;*/
  /*animation-fill-mode: forwards;*/
  /*animation: my-animations 1s steps(6) infinite; //应用动画， 1秒，分 6 步（不是平滑），infinite 重复*/
}

@keyframes my-animations {
  from {
    margin-left: 0;
  }
  to {
    margin-left: 50em;
  }
}

</style>