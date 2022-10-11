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
      <div>也就说说一旦 function 写完之后，没法动态的给它添加属性， 为了解决上面的问题，引进了 prototype，所以的 Object
        都有这个属性
      </div>
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

    <div class="part">
      <h2>常用方法</h2>
      <table>
        <tr class="title">
          <td>方法</td>
          <td>描述</td>
          <td>备注</td>
        </tr>
        <tr class="item">
          <td>Object.create()</td>
          <td>以现有对象为原型创建对象</td>
          <td>即，将当前对象的结构全部装载在原型对象中：<br/>
            <pre class="code-pre">
    const person = {
      name: "Bill",
      age: 19,
      city: "Seattle"
    };
    let pp = Object.create(person)
    console.log(pp) // pp 没有任何属性，但是原型对象的结构和 person 一样
          </pre>
          </td>
        </tr>

        <tr class="item">
          <td>Object.defineProperty(object, property, descriptor)</td>
          <td>添加或更改对象属性</td>
          <td> 如果属性不存在则定义，存在则修改：<br/>
            <pre class="code-pre">
    const person = {
      name: "Bill",
      age: 19,
      city: "Seattle"
    };
    Object.defineProperty(person, "newName", {
      value: 'siyehua',
      writable: false, // 是否可修改，默认false，设置成 false 之后无法修改（不会报错）
      enumerable: false, // 是否可枚举,默认 false,（通过 Object.keys() 方法列举出来）设置了 false 则弄不出来
      configurable: false,// 是否可配置，默认 false. （比较复杂，下面详细讲解）
      get: function () { // get 方法
        return this.newName;
      },
      set: function (value) {// set 方法
        this.newName = value;
      },
    })
    console.log(person)//{name: 'Bill', age: 19, city: 'Seattle', newName: 'siyehua'}
    console.log(Object.keys(person))// ['name', 'age', 'city'] // newName 没有列举出来
          </pre>
          </td>
        </tr>

        <tr class="item">
          <td>Object.defineProperties(object, descriptors)</td>
          <td>添加或更改对象属性</td>
          <td> 如果属性不存在则定义，存在则修改：<br/>
            <pre class="code-pre">
    Object.defineProperties(person,{// 使用方法和 defineProperty 是一样的，不同的是可以同时注册多个
      newName1:{},
      newName2:{},
    })
          </pre>
          </td>
        </tr>

        <tr class="item">
          <td>Object.getOwnPropertyDescriptor(object, property)</td>
          <td>访问属性</td>
          <td> 如果属性不存在则定义，存在则修改：<br/>
            <pre class="code-pre">
    const person = {
      name: "Bill",
      age: 19,
      city: "Seattle"
    };
    Object.getOwnPropertyDescriptor(person,'name')
    // 结果：{value: 'Bill', writable: true, enumerable: true, configurable: true}
          </pre>
          </td>
        </tr>

        <tr class="item">
          <td>Object.getOwnPropertyNames(object)</td>
          <td>访问属性，以数组形式返回</td>
          <td> 跟 getOwnPropertyDescriptor 一样的，只不过返回了所有的属性
          </td>
        </tr>

        <tr class="item">
          <td>Object.getPrototypeOf(object)</td>
          <td>访问原型对象</td>
          <td></td>
        </tr>
        <tr class="item">
          <td>Object.getPrototypeOf(object)</td>
          <td>访问原型对象</td>
          <td></td>
        </tr>
      </table>
    </div>

    <div class="part">
      <h2>configurable 详解</h2>
      <div>configurable 意思是是否可以重新配置，通过 {} 创建的对象都可以重新配置。<br/>
        defineProperty() 方法如果在定义的时候将 configurable 设置成了 false，之后就再重新执行这个方法，将会报错，具体规则如下：
        <pre class="code-pre">
1. writable 特性只能由 true 再次改为 false 而不能由 false 改为 true ，这和《JavaScript 高级程序设计》的说法有出入。
2. configurable 和 enumerable 特性可以再次设置不变的值不报错，没有实际意义。但是想改变这两个特性则会报错。
3. value 特性再次改变时是否报错要根据 writable 特性来确定。writable 为 true，则 value 特性改为任何值都不会报错。如果 writable 为 false ，
则同样 value 特性也只能再次设置不变的值不报错，没有实际意义。但是想改变其值则会报错。
        </pre>
      </div>

    </div>

    <div class="part">
      <h2>其他方法</h2>
      <div>上面介绍了一些常用的方法以及基本用途，这里说一下一些工具方法</div>
      <table>
        <tr class="title">
          <td>方法</td>
          <td>描述</td>
        </tr>
        <tr class="item">
          <td>Object.preventExtensions(object)</td>
          <td>防止向对象添加属性</td>
        </tr>
        <tr class="item">
          <td>Object.isExtensible(object)</td>
          <td>如果属性可以添加到对象，则返回 true，如果被保护了就返回 false</td>
        </tr>
        <tr class="item">
          <td>Object.seal(object)</td>
          <td>防止更改对象属性（不是值），即原有的对象原来是什么状态就什么状态，不可以修改</td>
        </tr>
        <tr class="item">
          <td>Object.isSealed(object)</td>
          <td>与上面的方法对应，这个方法用来查看是否可以改</td>
        </tr>
        <tr class="item">
          <td>Object.isSealed(object)</td>
          <td>与上面的方法对应，这个方法用来查看是否可以改</td>
        </tr>
        <tr class="item">
          <td>Object.freeze(object)</td>
          <td>冻结，防止对对象进行任何更改,值也不行</td>
        </tr>
        <tr class="item">
          <td>Object.isFrozen(object)</td>
          <td>查看是否冻结</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "ObjectUse",
  data() {

    const person = {
      name: "Bill",
      age: 19,
      city: "Seattle"
    };


    Object.getOwnPropertyDescriptor(person,'name')


    console.log(person)//{name: 'Bill', age: 19, city: 'Seattle', newName: 'siyehua'}
    console.log(Object.keys(person))// ['name', 'age', 'city'] // newName 没有列举出来

    console.log(Object.keys(person)); // 获取 key，返回一个数组
    console.log(Object.values(person)); // 获取 value，返回一个数组

    function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    let p = new Person(1, 1, 1, 1)
    let p2 = new Person(1, 1, 1, 1)
    Person.prototype.allName = "siyehua";// 给原型对象添加一个属性
    console.log(p, p2);// 其实 p,p2 都有这个属性了

    return {}

  },
}
</script>

<style scoped>

td:nth-child(1) {
  max-width: 15em;
  overflow: scroll;
}

td pre {
  max-width: 50em;
  overflow: scroll;
}
</style>