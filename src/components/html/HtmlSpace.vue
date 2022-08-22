<template>
  <div>
    <h1>html 实体（转义）</h1>
    <table>
      <tr class="title">
        <td>显示结果</td>
        <td>描述</td>
        <td>实体名称</td>
      </tr>
      <tr class="item">
        <td></td>
        <td>空格</td>
        <td>&amp;nbsp;</td>
      </tr>
      <tr class="item">
        <td>&lt;</td>
        <td>小于号</td>
        <td>&amp;lt;</td>
      </tr>
      <tr class="item">
        <td>&gt;</td>
        <td>大于号</td>
        <td>&amp;gt;</td>
      </tr>
      <tr class="item">
        <td>&amp;</td>
        <td>和号</td>
        <td>&amp;amp;</td>
      </tr>
      <tr class="item">
        <td>"</td>
        <td>双引号</td>
        <td>&amp;quot;</td>
      </tr>
      <tr class="item">
        <td>'</td>
        <td>单引号</td>
        <td>&amp;apos;（IE 不支持）</td>
      </tr>
      <tr class="item">
        <td>￠</td>
        <td>分</td>
        <td>&amp;cent;</td>
      </tr>
      <tr class="item">
        <td>£</td>
        <td>镑</td>
        <td>&amp;pound;</td>
      </tr>
      <tr class="item">
        <td>¥</td>
        <td>元</td>
        <td>&amp;yen;</td>
      </tr>
      <tr class="item">
        <td>€</td>
        <td>欧元</td>
        <td>&amp;euro;</td>
      </tr>
      <tr class="item">
        <td>§</td>
        <td>小节</td>
        <td>&amp;sect;</td>
      </tr>
      <tr class="item">
        <td>©</td>
        <td>版权（copyright）</td>
        <td>&amp;copy;</td>
      </tr>
      <tr class="item">
        <td>®</td>
        <td>注册商标</td>
        <td>&amp;reg;</td>
      </tr>
      <tr class="item">
        <td>™</td>
        <td>商标</td>
        <td>&amp;trade;</td>
      </tr>
      <tr class="item">
        <td>×</td>
        <td>乘号</td>
        <td>&amp;times;</td>
      </tr>
      <tr class="item">
        <td>÷</td>
        <td>除号</td>
        <td>&amp;divide;</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HtmlSpace"
}
</script>

<style scoped>
.title {
  background-color: #3f3f3f;
  color: white;
}

.item {
  color: #3f3f3f;
  background-color: white;
}

</style>