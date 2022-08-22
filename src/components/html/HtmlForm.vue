<template>
  <div>
    <h1>表单</h1>
    <div class="part">
      <h2>正常的表单提交</h2>
      <pre class="code-pre">
      &lt;form :action=&quot;submit&quot;&gt;
        账号：&lt;input type=&quot;text&quot; name=&quot;username&quot;&gt;&lt;br/&gt; //name 必须添加，不然无法得到对应的数据
        密码：&lt;input type=&quot;text&quot; name=&quot;username&quot;&gt;&lt;br/&gt;
        &lt;input type=&quot;submit&quot; value=&quot;登录&quot;&gt;
      &lt;/form&gt;
      </pre>
      <form action="">
        账号：<input type="text" name="username"><br/>
        密码：<input type="password" name="password"><br/>
        <input type="submit" value="登录">
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "HtmlForm",
  setup() {
    function submit2(name, password) {
      alert(name + password)
    }

    return {
      submit2,
    }
  },
}
</script>

<style scoped>

</style>