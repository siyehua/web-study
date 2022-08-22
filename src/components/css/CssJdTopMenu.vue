<template>
  <div class="root">
    <div class="center">
      <div class="location" @mouseenter="showLocation = !showLocation" @mouseleave="showLocation = false">
        <svg class="icon location-icon text" aria-hidden="true">
          <use xlink:href="#icon-location"></use>
        </svg>
        <span class="text">广东</span>
        <div v-show="showLocation" class="location-more">
          <div class="item-parent" v-for="(item,index) in  locations" :key="index">
            <span class="text item">{{ item }}</span>
          </div>
          <div class="spacer-line"
               style="text-align: left; padding-left: 10px;padding-top: 10px;padding-bottom: 10px">
            <span class="un">地区专享版本</span>
            <div style="display: flex;flex-wrap: wrap;">
              <span class="text" style="width: 50%">中国港澳</span>
              <span class="text" style="width: 50%">中国台湾</span>
              <span class="text" style="width: 50%">京东全球</span>
            </div>
          </div>
          <div
               style="text-align: left; padding-left: 10px;padding-top: 10px;padding-bottom: 10px">
            <span class="un">Available Sites</span>
            <div style="display: flex;flex-wrap: wrap;">
              <span class="text" style="width: 50%">🇨🇳 中国港澳</span>
              <span class="text" style="width: 50%">🇨🇳 中国台湾</span>
              <span class="text" style="width: 50%">🇨🇳 京东全球</span>
              <span class="text" style="width: 50%">🇨🇳 京东全球</span>
              <span class="text" style="width: 50%">🇨🇳 京东全球</span>
              <span class="text" style="width: 50%">🇨🇳 京东全球</span>
            </div>
          </div>
        </div>
      </div>
      <div class="float-right">
        <a class="text" href="javascript:">你好，请登录</a>
        <div class="li-spacer"></div>
        <a class="text" href="javascript:">我的订单</a>
        <div class="li-spacer"></div>
        <a class="text" href="javascript:">我的京东 🔽</a>
        <div class="li-spacer"></div>
        <a class="text" href="javascript:">京东会员</a>
        <div class="li-spacer"></div>
        <a class="text" href="javascript:" style="color: red;">企业采购 🔽</a>
        <div class="li-spacer"></div>
        <a class="text" href="javascript:">客户服务 🔽</a>
        <div class="li-spacer"></div>
        <a class="text" href="javascript:">网站导航 🔽</a>
        <div class="li-spacer"></div>
        <a class="text" href="javascript:">手机京东</a>
        <div class="li-spacer"></div>
        <a class="text" href="javascript:">网站无障碍</a>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/iconfont/iconfont.js'
import {ref} from "vue";

export default {
  name: "CssJdTopMenu",
  setup() {
    let showLocation = ref(false)
    const locations = ['北京', '上海', '天津', '重庆', '河北',
      '山西', '河南', '辽宁', '吉林', '黑龙江',
      '内蒙古', '江苏', '山东', '安徽', '浙江',
      '福建', '湖北', '湖南', '广东', '广西',
      '江西', '四川', '海南', '贵州', '云南',
      '西藏', '陕西', '甘肃', '青海', '宁夏',
      '新疆', '港澳', '台湾', '钓鱼岛', '海外',
    ]
    return {
      locations,
      showLocation,
    }
  },
}
</script>

<style scoped>

.spacer-line {
  padding: 5px;
  margin: 8px 10px;
  border-bottom: 1px dashed #ccc;
  border-top: 1px dashed #ccc;
}

.item-parent {
  display: inline-block;
  width: 64px;
  box-sizing: border-box;
  padding-left: 6px;
  padding-right: 10px;
}

.item {
  display: inline-block;
  height: 25px;
  padding-left: 6px;
  padding-right: 6px;
  text-align: center;
}

.location-more .item:hover {
  background-color: #f4f4f4;
}

.location-more {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  height: 460px;
  width: 320px;
  background-color: white;
}


.li-spacer {
  display: inline-block;
  overflow: hidden;
  margin: 11px 5px 0;
  width: 1px;
  height: 10px;
  background-color: #ccc;
}

.float-right {
  float: right;
}

.icon {
  fill: currentColor;
  overflow: hidden;
}


.location-icon {
  vertical-align: middle;
  height: 20px;
  width: 20px;
}

.location {
  float: left;
  width: 58px;
}

.location:hover, .location-more:hover {
  background-color: white;
}

.location:hover {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.text {
  color: #999;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}

.un{
  color: #999;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}

.text:hover {
  color: red;
}


.center {
  margin-left: 15%;
  margin-right: 15%;
}


.root {
  width: 100%;
  margin-top: 10em;
  height: 30px;
  border-bottom: 1px solid #ddd;
  background-color: #e3e4e5;
}
</style>