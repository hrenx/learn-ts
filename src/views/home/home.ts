class Person {}

class Student extends Person {
  studying() {
    console.log("studying")
  }
}

function run(p: Person) {
  ;(p as Student).studying()
}

const stu = new Student()
run(stu)

const message = "hi"
const num: number = message as any as number

function logLength(text?: string) {
  console.log(text!.length)
}

type Human = {
  name: string
  friend?: {
    name: string
    age?: number
  }
}
const h1: Human = {
  name: "xiaoming",
}
console.log(h1.friend?.name)

const words: string | null = null
console.log(words ?? "当前为空值")

let align: "left" | "center" | "right"
align = "left"
// align = "xxx"

type Method = "GET" | "POST"

function http(url: string, method: Method) {}

const options = {
  url: "http://www.baidu.com",
  method: "GET",
} as const
http(options.url, options.method as Method)

type IDType = number | string
function printID(id: IDType) {
  if (typeof id === "string") console.log(id.toUpperCase())
}

type Direction = "left" | "right" | "top" | "bottom"
function printDirection(direction: Direction) {
  if (direction === "left") console.log(direction) // 此处可以确定类型为字面量类型 "left"
}

type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function animalAction(animal: Fish | Dog) {
  // animal.swimming() // error: 类型“Fish | Dog”上不存在属性“swimming”
  if ("swimming" in animal) animal.swimming()
}

const f1: Fish = {
  swimming: () => {},
}

type fn1Type = (n1: number, n2?: number) => number
const fn1: fn1Type = (num1: number = 100, num2?: number) => {
  num2 = num2 ?? 10
  return num1 + num2
}

animalAction(f1)

// 函数重载
function add(num1: number, num2: number): number
function add(str1: string, str2: string): number

function add(p1: any, p2: any) {
  if (typeof p1 === "string" && typeof p2 === "string") {
    return p1.length + p2.length
  } else {
    return p1 + p2
  }
}

const res1 = add("str", "str")
const res2 = add(1, 1)
console.log("res1", res1)
console.log("res2", res2)

// const res3 = add("str", 1)

class Animal {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  set name(newName: string) {
    this._name = newName
  }

  get name() {
    return this._name
  }
}

const a1 = new Animal("human")

console.log("a1.name", a1.name)
a1.name = "test"
console.log("a1.name", a1.name)

interface IUserInfo {
  readonly id: string // 可以定义只读属性
  username: string
  friend?: IUserInfo
}

interface IIndexLanguage {
  [index: number]: string
}

const languageList: IIndexLanguage = {
  0: "C++",
  1: "Java",
  2: "Golang",
  3: "JavaScript",
}
