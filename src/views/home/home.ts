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

animalAction(f1)
