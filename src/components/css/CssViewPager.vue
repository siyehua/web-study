<template>
  <div class="area">
    <h2>仿京东轮播图</h2>
    <div class="jd-size jd-root">
      <img class="jd-size img-item" alt="图片" :src="imgList[currentIndex]">
      <!--        <img class="jd-size img-item" alt="图片" src="https://t7.baidu.com/it/u=1415984692,3889465312&fm=193&f=GIF">-->
      <div class="jd-change-img jd-left" @click="lastImg">&lt;</div>
      <div class="jd-change-img jd-right" @click="nextImg">&gt;</div>
      <div style="position: absolute;bottom: 5%;left: 5%">
        <div v-for="(item, index) in imgList" @mouseenter="checkImg(index)"
             :key="index"
             :class="index === currentIndex ? 'jd-point check': 'jd-point'"></div>
      </div>
    </div>
  </div>

</template>

<script>
import {reactive, ref} from "vue";

export default {
  name: "CssViewPager",
  setup() {
    let imgList = reactive([
      "https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=1415984692,3889465312&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=738441947,1208408731&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=4080826490,615918710&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=334080491,3307726294&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=3713375227,571533122&fm=193&f=GIF",
      "https://t7.baidu.com/it/u=2235903830,1856743055&fm=193&f=GIF",
    ])
    let currentIndex = ref(0);

    function checkImg(index) {
      currentIndex.value = index
    }

    function lastImg() {
      currentIndex.value--
      if (currentIndex.value < 0) {
        currentIndex.value = imgList.length - 1;
      }
    }

    function nextImg() {
      currentIndex.value++
      if (currentIndex.value > imgList.length - 1) {
        currentIndex.value = 0;
      }
    }

    return {
      imgList,
      currentIndex,
      checkImg,
      lastImg,
      nextImg,
    }
  },

}
</script>

<style scoped>
.jd-point {
  margin: 0.3em;
  display: flex;
  width: 8px;
  height: 8px;
  float: left;
  border-radius: 9px;
  border: 2px solid rgba(155, 155, 155, 0.5);
  background-color: rgba(155, 155, 155, 0.5);
}

.jd-point.check {
  background-color: white;
}


.jd-root {
  position: relative;
}

.jd-size {
  width: 590px;
  height: 470px;
}

.img-item {
  position: absolute;
  object-fit: cover;
}

.jd-change-img {
  display: inline-block;
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 20px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  width: 25px;
  top: 50%;
  margin-top: -35px;
  background-color: rgba(128, 128, 128, 0.7);
}

.jd-change-img:hover {
  background-color: rgba(128, 128, 128, 1);
}

.jd-left {
  padding-right: 5px;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
}

.jd-right {
  padding-left: 5px;
  right: 0;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
}

</style>