<template>
  <div>
    <h1>类</h1>
    <div>js 的类特性与 java 差不多，基本用法也类似，有以下几点需要注意</div>
    <ol>
      <li>类的方法不需要 function 修饰</li>
      <li>可以自定义 set get 方法，类似于 kotlin</li>
      <li>可以使用 extend 继承，也有 super 关键字</li>
      <li>可以用 static 修饰静态方法</li>
    </ol>

    <pre class="code-pre">
    class MyClass {
      constructor(name) {
        this.name = name;
      }

      get name1() {
        return this.name;
      }

      set name1(newName) {
        this.name = newName
      }
    }

    class MyClass2 extends MyClass {
      constructor(age, name) {
        super(name);
        this.age = age;
      }

    }

    let cls = new MyClass2('siyehua')
    console.log(cls.name)
    console.log(cls.name1)
    cls.name1 = '456'
    console.log(cls.name1)
    console.log(cls.age)
    </pre>
  </div>
</template>

<script>
export default {
  name: "ClassUse",
  data() {


    class MyClass {
      constructor(name) {
        this.name = name;
      }

      get name1() {
        return this.name;
      }

      set name1(newName) {
        this.name = newName
      }
    }

    class MyClass2 extends MyClass {
      constructor(age, name) {
        super(name);
        this.age = age;
      }

    }

    let cls = new MyClass2('siyehua')
    console.log(cls.name)
    console.log(cls.name1)
    cls.name1 = '456'
    console.log(cls.name1)
    console.log(cls.age)
  },
}
</script>

<style scoped>

ol {
  padding-left: 1em;
}

li {
  list-style: decimal;
}

</style>