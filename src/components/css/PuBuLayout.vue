<template>
  <div>
    <h1>瀑布流</h1>
    <div class="root">
      <div class="item" v-for="(item,index) in data" :key="item.id" >
        <img :src="item.url" :alt="item.title" :style="index % 2 === 0 ?'height: 150px;' : 'height: 300px;'">
        <div style="padding: 1em;">{{index}} : {{ item.title }}</div>
        <div class="desc" style="padding-left: 1em;">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-location"></use>
          </svg>
          {{ item.location }}
        </div>
        <div class="desc" style="margin:1em;">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/iconfont/iconfont.js'

export default {

  name: "PuBuLayout",
  setup() {
    let id = Date.now()
    let data = []
    for (let i = 0; i < 20; i++) {
      data.push({
        id: id++,
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F11717511247%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663210709&t=17bb0c077b288bfbe0f7153a188c96ac",
        title: "《鬼吹灯之龙岭迷窟》",
        location: '广州',
        desc: "《鬼吹灯之龙岭迷窟》是由新片场影业、梦想者电影、完美文化联合出品，朴柱天执导，倪敏明、林剑锋编剧，林雨申、康宁、赵雷棋等主演的探险夺宝题材电影 [1]  。近日，新片场出品的网络电影《鬼吹灯之黄皮子坟》在优爱腾同步上映，目前该电影在豆瓣的评分仅为5.9。\n" +
            "\n" +
            "前有电影翻拍，后有网剧改编，可这次由《鬼吹灯》改编的作品又双叒叕扑街了。\n" +
            "\n" +
            "虽然《鬼吹灯》站在悬疑盗墓和网文IP题材的顶端，但部分影视公司还是寄希望于鬼吹灯IP自带的名气来驱动票房、赚取口碑。以新片场出品的网络电影为例，除了由鬼吹灯IP改编出来的电影口碑欠佳外，诸如《新封神姜子牙》《狄仁杰探案》等由其他IP改编的网络电影也很少能赢得观众好评。新片场要想在网络电影市场的激烈争夺下，建立起稳定的影视化IP宇宙，还是很难。\n" +
            "\n",
      })
    }
    return {
      data
    }
  },
}
</script>

<style scoped>
/**
最关键就是高度必须大于最长列的高度，不然会溢出
 */
.root {
  display: flex;
  flex-flow: column wrap;
  height: 8000px;
}

/* 重新定义内容块排序优先级，让其横向排序 */
.item:nth-child(3n+1) { order: 1; }
.item:nth-child(3n+2) { order: 2; }
.item:nth-child(3n)   { order: 3; }
/* 强制使内容块分列的隐藏列 */
.root::before,
.root::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}
img {
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.item {
  background-color: white;
  border-radius: 1em;
  box-shadow: 10px 10px 10px #EEEEEE;
  width: 250px;
  margin: 1em;
  color: #999;
}


.desc {
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>