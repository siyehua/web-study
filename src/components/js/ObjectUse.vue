<template>
<div>
  <h1>Object 使用</h1>
  <div class="part">
    <h2>基本介绍</h2>
    <div>Object 包含了很多常见的方法和属性，介绍一些常用的：</div>
    <pre class="code-pre">
    const person = {
      name: "Bill",
      age: 19,
      city: "Seattle"
    };

    console.log(Object.keys(person)); // 获取 key，返回一个数组
    console.log(Object.values(person)); // 获取 value，返回一个数组
    </pre>
  </div>

  <div class="part">
    <h2>将函数转成对象</h2>
    <div>一般来说，用 function 描述的都是方法，但是可以将方法看成是一个自定义对象并且 new 出来，例如：</div>
    <pre class="code-pre">
    function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    let p = new Person(1,1,1,1)
    let p2 = new Person(1,1,1,1)
    p.allName = "siyehua";// 添加一个属性, 这个属性只能添加到 p 对象上，无法添加的 Person 本身，也就说说,p2 并没有这个属性
    console.log(p, p2)
    </pre>
  </div>

  <div class="part">
    <h2>原型对象 prototype</h2>
    <div>也就说说一旦 function 写完之后，没法动态的给它添加属性， 为了解决上面的问题，引进了 prototype，所以的 Object 都有这个属性</div>
    <pre class="code-pre">
    function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    let p = new Person(1,1,1,1)
    let p2 = new Person(1,1,1,1)
    Person.prototype.allName = "siyehua";// 给原型对象添加一个属性
    console.log(p, p2);// 其实 p,p2 都有这个属性了(在原型对象里)
    </pre>
  </div>


</div>
</template>

<script>
export default {
  name: "ObjectUse",
  data(){
    const person = {
      name: "Bill",
      age: 19,
      city: "Seattle"
    };

    console.log(Object.keys(person)); // 获取 key，返回一个数组
    console.log(Object.values(person)); // 获取 value，返回一个数组

    function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    let p = new Person(1,1,1,1)
    let p2 = new Person(1,1,1,1)
    Person.prototype.allName = "siyehua";// 给原型对象添加一个属性
    console.log(p, p2);// 其实 p,p2 都有这个属性了

    return {}

  },
}
</script>

<style scoped>

</style>