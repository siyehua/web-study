<template>
  <div>
    <h1>外边距重合问题</h1>
    <div class="part">
      <h2>子元素与父元素重叠</h2>
      <div style="width: 10em;height: 10em;background-color: #b1d069">
        <div style="width: 5em;height: 5em;background-color: #e8e7e2;margin-top: 5em;">2</div>
      </div>

      <div>为了避免上面的问题，可以给父元素增加一个伪元素</div>
      <br> <code>.margin-fix{
      content: "";
      display: table;
      }</code> 一般配合 clear:both 一起用，同时解决两个问题<br><br>
      <div class="margin-fix" style="width: 10em;height: 10em;background-color: #b1d069">
        <div style="width: 5em;height: 5em;background-color: #e8e7e2;margin-top: 5em;">2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarginSome"
}
</script>

<style scoped>
.margin-fix::after,.margin-fix::before {
  content: "";
  display: table;
  clear: both;
}

</style>