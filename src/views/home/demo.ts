function getSome<T extends string | number>(arg: T) {
  console.log(arg)
}

getSome("abc")
getSome(13)

interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T): number {
  return arg.length
}

getLength("adf")
getLength({ length: 100 })
// getLength(13)

class Pointer<T> {
  x: T
  y: T
  z: T
  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}
const p1 = new Pointer("12", "2", "3")

export namespace time {
  export function format(time: string) {}

  function foo() {}

  foo()
}

time.format("2022")
// time.foo
export {}
