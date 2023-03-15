<template>
<div>
  <h1>Class</h1>
  <div class="area">
    <h2>实现接口</h2>
    <p>类可以实现一个或多个接口，注意，如果接口的参数是可选的，类可以选择是否实现，例如：</p>
    <pre v-highlight><code>
interface Animal {
  x:number;
  y?:number;
}

class My implements Animal{
 x: number = 10;

  y?:number = 20;
//  y:number = 20; // 可以改成 不可选的，即无法设置成 undefiend
  setYValue(value?:number){
    this.y = value;
  }

}

let m = new My();
console.log(typeof m.y); // 这里输出的是 number, 因为typeof 检查的是此刻的 value 的类型

type T = My["y"]; // 如果此时获取 y 的类型, 此时 T = ?:number or
let t:T = 20; // 可以赋值成 number
t = undefined; // 也可以赋值成 undefined



// yyy(m.y); // 报错， y 可能是 undefiend 的，所以无法直接传入

function yyy(t:number){
  console.log(t);
}
    </code></pre>
  </div>

  <div class="area">
    <h2>继承</h2>
    <p>继承与大多数的继承是一样的，唯一的不同是，重载方法必须保留原来的方法签名，举个例子：</p>
    <pre v-highlight><code>
class Person{
  age = 10;
  printAge(){
    console.log(this.age);
  }
}

class Student extends Person{

  // printAge(name:string){ // 这里会报错，因为父类的 printAge 函数可以不传

  // }

  printAge(name?:string){ // 这样就可以，可传可不传

  }
}
    </code></pre>
  </div>
</div>
</template>

<script>
export default {
  name: "TypeClass.vue"
}
</script>

<style scoped>

</style>