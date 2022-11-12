interface ISwimming {
  swimming: () => void
}

interface IBark {
  bark: () => void
}

class Dog implements ISwimming, IBark {
  swimming() {
    console.log("dog swimming")
  }
  bark() {}
}

class Human implements ISwimming {
  swimming() {
    console.log("human swimming")
  }
}

// BAD
// function runSwimming(p: Human) {
//   p.swimming()
// }

// GOOD
function runSwimming(p: ISwimming) {
  p.swimming()
}

runSwimming(new Dog())
runSwimming(new Human())

interface IPerson {
  name: string
}

const p1: IPerson = {
  name: "xiaowang",
}
const p2: IPerson = {
  name: "xiaoli",
}
const p3: IPerson = {
  name: "xiaohong",
}
console.log("p1", p1)

// interface IPerson {
//   age: number
// }

// freshness(擦除)

export {}
