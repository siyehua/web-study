<template>
  <div>
    <h1>TypeScript 基础</h1>
    <div class="area">
      <h2>特点</h2>
      <div>
        <p>TypeScrip 和其他现代语言一样，相对于 JavaScript 来说，主要是明确了类型，与类型推断，与 Kotlin ，Dart，Swift
          都非常相似。可以粗略的把 kotlin 类比成 TypeScript，共同点：</p>
        <ol>
          <li>都有类型推断功能</li>
          <li>都编译目标语言（kotlin 编译成 JVM 字节码，TypeScript 编译成 JavaScript）</li>
          <li>支持可空，强制非空，以及可选参数</li>
        </ol>
        <p>编译，与 java 类似：tsc hello.ts 即可</p>
      </div>
    </div>

    <div class="area">
      <h2>基础</h2>
      <div>类型：string, boolean, number, Arrays, any, Functions, Object Types, Union Types, Custom Type, null,
        undefined, Enums <br/>
        大部分的使用都和 JavaScript 是一样的，例如：<br>
        定义一个变量：
        <pre v-highlight><code>
          let a :string = "123455";
        </code></pre>
        也可以省略成这样，一样能推断出变量的类型：
        <pre v-highlight><code>
          let a = "123455";
        </code></pre>
        和 Kotlin 等现代语言一样，它的类型推导功能是非常强大的，例如在函数中：
        <pre v-highlight><code>
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

function greet(name: string) { // 返回类型是 number
  console.log("Hello, " + name.toUpperCase() + "!!");
  return 1;
}

function greet(name: string) { // 返回类型是 any
  console.log("Hello, " + name.toUpperCase() + "!!");
  if(name === "123") {
          return 2;
  } else {
    return "123";
   }

}
        </code></pre>

        <br>函数还支持可选参数，可空参数，例如：
        <pre v-highlight>
          <code>
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
          </code>
        </pre>
      </div>
    </div>

    <div class="area">
      <h2>类型</h2>
      <div>联合类型
        <pre v-highlight>
        <code>
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
        </code>
      </pre>
      </div>

      <div>别名：给联合类型取一个名字，注意，编译的时候，这个别名会被去掉，也就是说相等于给这个类型取了另外一个名字，并不是真正意义上的自定义类型，关键字
        <b>type</b>
        <pre v-highlight>
        <code>
 type Point = {
  x: number;
  y: number;
};

// 与前面的示例完全相同
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
        </code>
      </pre>

        如果是函数，则可以先声明后实现，例如：
        <pre v-highlight><code>
declare function getInput(): string;
declare function sanitize(str: string): string;
// ---分割---
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// 创建一个经过清理的输入框
let userInput = sanitizeInput(getInput());

// 仍然可以使用字符串重新赋值
userInput = "new input";
        </code></pre>
      </div>

      <div>接口：除了使用 type 取名之外，还可以使用接口来自定义类型：interface</div>
      <pre v-highlight><code>
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
      </code></pre>

      <div>区别：大部分时候 interface 和 type 是一样的，他们的区别是：
        <ol>
          <li>继承接口的使用，使用：interface Bear extends Animal {}, 继承 type 的时候，使用：type Bear = Animal & {}</li>
          <li>接口可以动态添加属性，类型不行，因为接口是真正的类型，但是 type
            不是，在编译后该类就消失了，所以无法动态添加属性
          </li>
          <li>接口不能修改基本类型，例如：interface NewNumber = number; 编译会报错，但是 type 可以</li>
        </ol>


      </div>
    </div>
    <div class="area">
      <h2>枚举或列举</h2>
      枚举：TypeScript 也有两种方式，与上面接口的 type 和 interface 非常类似
      <pre v-highlight><code>
        // 列举，可数使用方式
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left"); // 这里只能输入 left right center,类似于枚举，但是它没有新增类型，与 type 类似
printText("G'day, mate", "centre");
Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
    </code></pre>

      <p>枚举使用方式：</p>
      <pre v-highlight><code>
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
function printText(s: string, alignment: Direction) {
  // ...
}
printText("Hello, world", Direction.Left); // 这里就与 interface 类似了，它编译后仍然会保留类型
    </code></pre>
    </div>
    <div class="area">
      <h2>常量 const</h2>
      常量：const 关键字与 java 的 final 是非常类似的,基本类型不可以修改，但是 object 可以修改：
      <pre v-highlight><code>
const a = "1234"; // 基本类型
a = "455"; // 基本类型不可修改

const a = {age:12}; // Object
a.age = 111;      // object 是可以修改的

let x: "hello" = "hello"; // 理解成 x 被先定成了 hello
// OK
x = "hello";
// ...
x = "howdy";


let b = "hello";
// 这也是不行的， 因为 b 可变
x = b;

const c = "hello";
// 可以， 因为 c 不可变
x = c;


declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
 // 这里也不行， 前面介绍说了，const 修饰 object 的时候，里面的内容是可以改变的，所以此时 method 不一定等于 GET
handleRequest(req.url, req.method);

// 有两种解决办法，一：强转：
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");

// 二，将 req 里面的所有属性也改成 const 的：
const req = { url: "https://example.com", method: "GET" } as const;
req.url = "ccc"; // 此时会报错，因为 as const 将里面所有的属性都修饰成不可改的了
handleRequest(req.url, req.method);
    </code></pre>
    </div>
    <div class="area">
      其他一些细节：
      <pre v-highlight><code>
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement; // 强转
const myCanvas = 《HTMLCanvasElement》document.getElementById("main_canvas");

function liveDangerously(x?: number | null) {
  // 强行转成不 null
  console.log(x!.toFixed());
}
      </code></pre>
    </div>

    <div class="area">
      <h2>keyof or typeof</h2>
      <p>keyof 用来获取键值对的 key 类型, 可以通过 Indexed Access Types 来获取， typeof 用来获取对象的类型</p>
      <p>Indexed Access Types 字面意思，就是可以通过[]下标来获取各种类型，例如：</p>
      <pre v-highlight><code>

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
//type A = number
let a :A = 10; // 此时 A 就是 number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // 此时 M 就是 string| number;
let b :M = 10;
b = "3434";

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
//此时 type Age = number

type I1 = Person["age" | "name"];
//此时 type I1 = string | number

type I2 = Person[keyof Person];
//此时 type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
//此时 type I3 = string | boolean


const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number]; // 因为数组自带 number 的 index，所以此时就相当于获取了一个 { name: "Alice", age: 15 } ，object 的类型
//  type Person = { 此时的类型就等于是这个类型，如果 key 或者 value 的类型不一样，就会变成可选类型
//      name: string;
//      age: number;
//  }

type Age = typeof MyArray[number]["age"];
// 相当于 type Age = number
type Age2 = Person["age"];
// 相当于  type Age2 = number


console.log(typeof "Hello world"); // 打印 string
interface Point{
    x:number;
    y:number;
}
let a :Point = {
    x :10,
    y :20,
}
console.log(typeof a); // 打印 object
      </code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeScriptBase",
  data() {
    let a = 10;

    function showDebug() {
      a++;
      console.log(a);
    }

    return {
      showDebug,
    }
  }
}
</script>

<style scoped>

</style>