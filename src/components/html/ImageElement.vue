<template>
  <div>
    <h1>Img 标签</h1>

    <div class="part">
      <h2>加载一张图片</h2>
      <div>src 后面添加链接，表示图片的链接，默认如果不给图片设置宽高，则有多大就显示多大<br>
        如果设置了宽高，但是宽高和图片本身不一致，则图片会被压缩<br><br>
        例如，下面是加载一张普通图片，因为宽高和容器的大小不一致，所以被压缩了：
      </div>
      <img style="width: 50em; height: 50em;"
           src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fe5%2F42%2Ff0%2Fe542f0b7969a01e037138624b082174d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662276360&t=7776e2cdc0fcf2b9b2093b0331444923">
    </div>

    <div class="part">
      <h2>alt 作用</h2>
      <div>图片加载中或者加载错误时，展示 alt 里面的文字</div>
      <img style="width: 50em; height: 50em;" alt="美女图"
           src="http://www.abc.ttt.jpg">
    </div>

    <div class="part">
      <h2>object-fit 设置图片的缩放方式</h2>
      <div>contain 可以全部看到，但是盒子如果和图片的比例不一样，会有间隙</div>
      <div>cover 让宽或高先铺满，多余的部分裁剪掉</div>
      <br><br>

      <h3>contain 有间隙</h3>
      <img style="object-fit: contain;width: 50em; height: 50em;background-color: skyblue" alt="美女图"
           src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fe5%2F42%2Ff0%2Fe542f0b7969a01e037138624b082174d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662276360&t=7776e2cdc0fcf2b9b2093b0331444923">

      <br><br>
      <h3>cover 部分图片内容没有看到</h3>
      <img style="object-fit: cover;width: 50em; height: 50em;background-color: skyblue" alt="美女图"
           src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fe5%2F42%2Ff0%2Fe542f0b7969a01e037138624b082174d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662276360&t=7776e2cdc0fcf2b9b2093b0331444923">

    </div>

    <div class="part">
      <h2>雪碧图</h2>
      <span>雪碧图的意思就是将多张图组合到一张里面，然后通过坐标来定位，好处是一次性把需要的图都加载下来了，坏处是首次加载的速度可能比较慢</span>
      <pre>
        .xuebi {
          height: 48px;
          width: 166px;
          background-image: url("../../assets/xuebi.png");
          background-position: 0 -48px;
          background-size: auto 900px;
        }
      </pre>
      <div class="xuebi"></div>
    </div>

    <div class="part">
      <h2>渐变</h2>
      <div>线性渐变</div>
      <pre>
        .gradinet {
          width: 10em;
          height: 10em;
          background-image: linear-gradient(blue, cadetblue);
        }
      </pre>
      <div class="gradinet"></div>

      <br>
      <h2>径向渐变</h2>
      <pre>
        .gradinet {
          width: 10em;
          height: 10em;
          background-image: radial-gradient(blue, cadetblue);
        }
      </pre>
      <div class="gradinet2"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ImageElement"
}
</script>

<style scoped>
.gradinet2 {
  width: 10em;
  height: 10em;
  background-image: radial-gradient(greenyellow, cadetblue);
}
.gradinet {
  width: 10em;
  height: 10em;
  background-image: linear-gradient(greenyellow, cadetblue);
}

.xuebi {
  height: 48px;
  width: 166px;
  background-image: url("../../assets/xuebi.png");
  background-position: 0 -48px;
  background-size: auto 900px;
}
</style>