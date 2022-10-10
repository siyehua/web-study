<template>
  <div>
    <h1>String 用法</h1>
    <div class="part">
      <h2>获取字符串长度</h2>
      <span>使用 length</span>
      <pre class="code-pre">
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;
      </pre>
    </div>

    <div class="part">
      <h2>查找字符串位置</h2>
      <span>使用 indexOf() 方法,lastIndexOf() 表示最后一个出现的位置。<br/>
      indexOf() 的第二个参数还可以指定开始搜索的位置<br/>
      match() 是正则匹配，返回的所有符合的数组<br/>
      includes() 表示是否包含，返回的是一个布尔值<br/>
      </span>
      <pre class="code-pre">
let str = "The full name of China is the People's Republic of China.";
let pos = str.indexOf("China");
      </pre>
      <span>search() 方法一样也能查找位置，但是 search() 方法支持正则，不支持指定从哪里开始查</span>
    </div>

    <div class="part">
      <h2>裁剪字符串</h2>
      <span>slice(start, end) substring(start, end) substr(start, length) 这三个方法都可以用<br/>
      不同处： slice 支持负数，如果是负数则从尾到头查询<br/>
      不同处： substr 第二个参数不是end 的 index，而是要截取的长度<br/>
      </span>
      <pre class="code-pre">
let str = "Apple, Banana, Mango";
let res = str.substr(7,6);
      </pre>
    </div>

    <div class="part">
      <h2>替换</h2>
      <span>replace(targetStr, newStr)<br/>
      </span>
      <pre class="code-pre">
let str = "Please visit Microsoft!";
let n = str.replace("MICROSOFT", "W3School");
      </pre>
    </div>

    <div class="part">
      <h2>其他</h2>
      <span>其他的方法基本和 java 是一致的<br/>
         toUpperCase() 转成大写<br/>
         toLowerCase() 转成小写<br/>
         concat() 连接，相当于+<br/>
         trim() 去掉左右空格<br/>
         charAt(index) 获取某个位置的字符串(注意，如果不存在不会报错，只会返回空字符串)<br/>
         charCodeAt(index) 获取某个字符 unicode 编码,不存在返回 NaN <br/>
         split() 分组，转成了数组<br/>
         字符串支持通过[] 来方法，但是它只能读不能写<br/>
         startsWith() 以什么开始<br/>
         endsWith() 以什么结束<br/>
      </span>
    </div>

    <div class="part">
      <h2>字符串模板</h2>
      <span>或者叫模板字面量<br/>
      模板字面量使用反引号来讲字符串包裹起来，这样里面所有的内容都不需要转义，而且可以使用 ${} 来引用某些变量或值<br/>

      </span>

      <pre class="code-pre">
let a = "fefef";
let b = `fefefef${a}`;
      </pre>
    </div>

  </div>
</template>

<script>
export default {
  name: "StringUse",
  data() {
    let a = "fefef";
    let b = `fefefef${a}`;
  },
}
</script>

<style scoped>

</style>