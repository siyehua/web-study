<template>
  <div>
    <h1>日期使用</h1>
    <div class="part">
      <h2>基本使用</h2>
      <pre class="code-pre">
    let now = new Date(); // 当前时间
    now = new Date(2019,11,10,18,50,11,0) ; // 年月日时分秒毫秒（月是 0~11）
    now = new Date("2019-11-11");
    now = new Date(10000);

    //UTC（Universal Time Coordinated）等同于 GMT（格林威治时间）。
    //注释：UTC，协调世界时，又称世界统一时间，世界标准时间，国际协调时间。
    now.toUTCString();// 转成 UTC时区
    </pre>

    </div>

    <div class="part">
      <h2>常用方法</h2>
      <table>
        <tr class="title">
          <td>名称</td>
          <td>作用</td>
          <td>例子</td>
        </tr>
        <tr class="item">
          <td>getDate()</td>
          <td>返回当月的天数（1-31）</td>
          <td>new Date("2022-02-11").getDate() 返回 11</td>
        </tr>
        <tr class="item">
          <td>getDay()</td>
          <td>当前是星期几（0~6）</td>
          <td>星期天返回的是 0</td>
        </tr>
        <tr class="item">
          <td>getFullYear()</td>
          <td>年份</td>
          <td>yyyy</td>
        </tr>
        <tr class="item">
          <td>getHours()</td>
          <td>小时（0~23）</td>
          <td>一天中的小时</td>
        </tr>
        <tr class="item">
          <td>getMilliseconds()</td>
          <td>当前毫秒数数（0~999）</td>
          <td>注意这里拿到的是当前的毫秒数，不是所有时间的</td>
        </tr>
        <tr class="item">
          <td>getMinutes()</td>
          <td>分钟（0~59）</td>
          <td></td>
        </tr>
        <tr class="item">
          <td>getMonth()</td>
          <td>月（0~11）</td>
          <td></td>
        </tr>
        <tr class="item">
          <td>getSeconds()</td>
          <td>秒（0~59）</td>
          <td></td>
        </tr>
        <tr class="item">
          <td>getTime()</td>
          <td>获取时间（从 1970 年 1 月 1 日至今）</td>
          <td>毫秒数</td>
        </tr>
      </table>

      <span><br/>设置方法，把 get 改成 set 即可，例如： getTime(), 改成 setTime() 即可</span>
      <span><br/>UTC 的方法，就是将上面所有的方法加上 UTC 即可，例如: getUTCTime()</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateUse",
  data() {
    let now = new Date(); // 当前时间
    now = new Date(2019, 11, 10, 18, 50, 11, 0); // 年月日时分秒毫秒（月是 0~11）
    now = new Date("2019-11-11");
    now = new Date(10000);


    //UTC（Universal Time Coordinated）等同于 GMT（格林威治时间）。
    //注释：UTC，协调世界时，又称世界统一时间，世界标准时间，国际协调时间。
    now.toUTCString();// 转成 UTC时区

    return {}
  },
}
</script>

<style scoped>

</style>