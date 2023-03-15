<template>
  <div>
    <h1>object </h1>
    <div class="area">
      object 与 JavaScript 大体上是类似的，不同的是，TypeScript 支持 可选参数，以及 readonly
      <h2>基础</h2>
      <p>下面是一些常规的使用：</p>
      <pre v-highlight><code>
function greet(person: { name: string; age: number }) { // object 在函数参数中，相等于给这个函数命名为 person
  return "Hello " + person.name;
}

interface Person { // 使用接口定义object
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}


type Person = { // 使用类定义
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}
      </code></pre>
    </div>

    <div class="area">
      <h2>可选参数与默认值</h2>
      <p>可选参数</p>
      <pre v-highlight><code>
interface User {
  id: number;
  isAdmin?: boolean;  // 可选参数
}

function a(user:User){
  console.log(user);
}

a({id:123}); // 可不传 isAdmin
a({id:123, isAdmin: false});
      </code></pre>
      <p><br>默认值：默认值是配合可选参数一起用的，考虑下面的代码：</p>
      <pre v-highlight><code>
interface Shape {}
declare function getShape(): Shape;

interface PaintOptions {
  shape: Shape;
  xPos: number;
  yPos: number;
}

// ---cut---
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
  //                             ^?
  console.log("y coordinate at", yPos);
  //                             ^?
  // ...
}

paintShape({shape: getShape(), yPos:10}) // 报错，xPos 必须传入
paintShape({shape: getShape(), xPos:8, yPos:10})
      </code></pre>
      <p>因为 xPos
        不是可选的，所以在函数中的默认中是无效的，不管怎么样都是以传入的为主，为了避免这种情况，可以把它设置成可选的</p>
      <pre v-highlight><code>
interface Shape {}
declare function getShape(): Shape;

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

// ---cut---
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
  //                             ^?
  console.log("y coordinate at", yPos);
  //                             ^?
  // ...
}

paintShape({shape: getShape(), yPos:10}) // 可编译，因为 xPos 是可选的
paintShape({shape: getShape(), xPos:8, yPos:10})
      </code></pre>
    </div>

    <div class="area">
      <h2>readonly 只读</h2>
      <p>类似于 const，因为 type 或者 interface 定义的属性不能添加 let 或者 const，所以就用这个词来修饰</p>
      <pre v-highlight><code>
interface SomeType {
  readonly prop: string; // 只读，如果这个 prop 是一个 object，那么它里面的属性仍然是可以修改的，与 const 的表现是一致的
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = "hello";
Cannot assign to 'prop' because it is a read-only property.
}
      </code></pre>
      <p>注意，TypeScript 有一个功能，能够将属性一一映射，举个例子：</p>
      <pre v-highlight><code>
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
  sex?:string; // 可选
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson; // 属性是一一对应的，所以能够映射赋值。（其中一个属性是可选的）

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
readonlyPerson.age ++; // 报错，readonlyPerson 不能修改
      </code></pre>
      <p><b>注意：映射后，不保证原来的对象也是不可修改的，所以映射后，readonly 的值有可能会被原来的对象改变的 <br>
        类比在 java 中，使用 List = ArrayList 对象 ，因为 List 本身不可以修改，但是 ArrayList 可以，所以 ArrayList 修改后，List
        的内容会跟着改变</b></p>
    </div>

    <div class="area">
      <h2>对象里的函数</h2>
      <p>对象里的函数有两种，一种是属性本身是一个函数，则类型就是返回值 <br>
        第二种，属性是一个名字，但是它的类型是一个函数 <br>
        这两种的区别在定义上有一点不同，调用和实现方式是一样的</p>
      <pre v-highlight><code>
interface Persion{
  name:string;
  log(age : number) : void; // 第一种方式：log 即函数名，返回值是 void ，注意是使用冒号：分隔的
}

class Student implements Persion {
  name = "siyehua";
  // log = (age:number) => { // 实现 1
  //    console.log(this.name + age);
  // }
  log (age:number) { // 实现 2
     console.log(this.name + age);
  }
}

let person :Persion = {
  name: "siyehua",
  log(age:number) { // 实现3
    console.log(this.name + age);
  },
}
person.log(123); // 调用


interface Persion2{
  name:string;
  log: (age : number) => void; // 第二种方式：log 是属性，但是 log 的类型是函数 ，返回值使用 => 符合分隔
}
class Student2 implements Persion2 {
  name = "siyehua";
  // log = (age:number) => { // 实现 1
  //    console.log(this.name + age);
  // }
   log (age:number) { // 实现 2
     console.log(this.name + age);
  }
}


let person2 :Persion2 = {
  name: "siyehua",
  log(age:number) { // 实现
    console.log(this.name + age);
  },
}
person2.log(2); // 调用
      </code></pre>
    </div>

    <div class="area">
      <h2>index</h2>
      <p>index 意思是可以使用[] 进行访问，当我们不确定接口里有什么属性的时候，允许实现可以自由的添加，就可以使用这种方法，但是它有一个缺点，返回类型必须一致(或兼容)</p>
      <pre v-highlight><code>
declare function getStringArray(): StringArray;
// ---cut---
interface StringArray {
  [index: string]: string; // 如果 [index: string]: any 也是可以的，但如果是 [index: string]: number , 则下面两个属性都会报错
  [index: number]: string;
  name: string;
}

const myArray: StringArray = { // 实现类可以随意添加属性，主要和 index 定义的是一样的即可。
  "name":"siyehua",
  20:"我是 20",
};
const secondItem = myArray[20];
console.log(secondItem); // 输出 我是 20
console.log(myArray["name"]); // 输出 siyehua
      </code></pre>
    </div>

    <div class="area">
      <h2>接口继承</h2>
      <p>与 java 等语言一样，接口可以继承另外一个接口</p>
      <pre v-highlight><code>
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
      </code></pre>
    </div>

    <div class="area">
      <h2>相交类型</h2>
      <p>与 | 可选类型二选一相反，相交类型的的意思是必须映射联合的所有类型，例如：</p>
      <pre v-highlight><code>
interface Colorful {
  color: string; // 与下面的相交类型相同，是可以的
  name: string; // 与下面的相交类型不相同，则属性会自动变成 never
}
interface Circle {
  radius: number;
  color: string;
  name: number;
}

type ColorfulCircle = Colorful & Circle;

let ttt : Colorful & Circle = { // 这么实现也可以
  color : "fefef",
  radius: 42,
  name: never, // 错误，never 无法设置
}
      </code></pre>
      <p>继承与相交类型的区别：相交实际上被没产生一个新的类型，它与 | 可选类型是相反的</p>
    </div>


  </div>
</template>

<script>
export default {
  name: "TypeObject.vue"
}
</script>

<style scoped>

</style>