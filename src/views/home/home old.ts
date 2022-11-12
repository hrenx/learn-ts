// 一、基本类型
// 七种基本数据类型 string number boolean null undefined symbol bigint

// 二、ts新增特殊类型
// void any never unknown

// 三、联合类型
let m: string | number | boolean = 1

// 四、对象类型定义
interface Person {
  readonly id: number
  name: string
  age: number
  gender?: string | number
  [prop: string | symbol]: any // 任意属性，一般不用
}

const xiaoMing: Person = {
  id: 1,
  name: "小明",
  age: 20,
  gender: 0,
}

// 五、数组类型定义
// 方法一
const arr1: number[] = [1, 2, 3]
// 方法二
const arr2: Array<number> = [1, 2, 3]

// 函数类型的定义
// 函数声明形式
function fn(x: number, y: number): number {
  return x + y
}

// 函数表达式形式
// 基础用法 默认值
const fn1 = (x: number, y: number = 1) => x + y
// 完整写法，对fn2也进行声明
const fn2: (x: number, y: number) => number = (x: number, y: number) => x + y

// interface办法声明函数
interface Fn {
  (firstName: string, lastName?: string): string
}
// 使用Fn声明 ？为可选类型
const fn3: Fn = (firstName: string, lastName?: string) => {
  return firstName + (lastName || "")
}

const fn4 = (a: number, ...rest: number[]): number => {
  console.log(rest)
  return a
}

// 六、断言类型 没看懂
let str: string | number[] = "str"
console.log("断言", (str as string).split(""))

//七、类型声明文件定义 全局使用
// JQuery("#app");

// 八、类型别名
// 比较麻烦原始的
interface Arr {
  // [key:number] : value
  [index: number]: number
}
type Arr1 = string[]
const arr3: Arr = [1, 2, 3, 4]
const arr4: Arr1 = ["a", "b", "c"]

type Gender = "male" | "female"

let a: Gender = "male"

// 九、元组
// 理解：一种特殊的数组。规定了数组的数据类型和长度
type TupleA = [string, number]
const arr5: TupleA = ["a", 1]
// 在非严格模式下，元组允许越界(超出长度)
arr5.push("1")
// 报错：但是越界的数据类型必须符合规定
// arr5.push({a:1});
console.log("元组", arr5)

// 十、枚举
enum Colors {
  "pink" = "#db7aa5",
  "blue" = "#3badbc",
  "purple" = "#d9aacf",
}
console.log("枚举", Colors["pink"])

// 十一、类 Class ES6 ES7
class Person {
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 在原型上
  setName(name: string) {
    this.name = name
  }
}
// 继承
class Son extends Person {
  constructor(name: string, age: number, gender: Gender) {
    // 使用父class的属性需要调用super函数
    super(name, age)
    this.gender = gender
  }

  // 多态：原型链的关系，new Son时优先使用Son的setName方法
  setName(name: string) {
    this.name = name
  }

  // 箭头函数形式: 保存在实例里（非原型链上） sonA.sayName(); 与定义在constructor一致
  sayName = () => console.log("我是" + this.name)

  // static修饰的挂载在构造函数上, Son.whoIs()
  static whoIs() {
    console.log("i am class Son")
  }
}
const sonA = new Son("小明", 14, "male")
console.log(sonA)
sonA.sayName()

// 十二、TypeScript 类新增
// 新增：public private protected 修饰
// public 默认的
// private 只能在class中访问，子类的class不能访问
// protected 只能在class中访问，子类的class能访问

// 十三、类与接口
// 1.类实现接口
// 接口本来是对对象声明，现在可以用来实现(implements)类
interface Alarm {
  alert(): void
}

class DoorA implements Alarm {
  // 必须要有alert方法，且符合interface声明
  alert() {
    alert("warning")
  }
}

// 2.接口继承接口
interface LightAlarm extends Alarm {
  lightOn(): void
  lightOff(): void
}

class DoorB implements LightAlarm {
  alert() {
    alert("warning")
  }
  lightOn() {
    console.log("light On")
  }
  lightOff() {
    console.log("light Off")
  }
}

// 3.接口继承类
class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
interface Point3d extends Point {
  z: number
}
const point3d: Point3d = { x: 1, y: 2, z: 3 }

// 泛型
function createArray<T>(length: number, value: T): T[] {
  let res: T[] = []
  for (let i = 0; i < length; i++) {
    res[i] = value
  }
  return res
}
const arr6 = createArray(10, "a")
console.log("泛型", arr6)

// 多个泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
let arr7 = swap([123, "abc"])
console.log("多个泛型", arr7)

// 泛型的约束: 利用接口的继承规定泛型必须含有的内容
interface Length {
  length: number
}
function logLength<T extends Length>(arg: T): number {
  console.log(arg.length)
  return arg.length
}

type Undefinable<T> = undefined | T

export {}
