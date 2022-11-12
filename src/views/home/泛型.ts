function watcher<T>(arg1: T, ...arg: any[]): T {
  console.log("arg1", arg1)
  return arg1
}

watcher<number>(123)

watcher("some")

interface IPerson<T1 = string, T2 = number> {
  name: T1
  age: T2
}

const p: IPerson<string, string> = {
  name: "小王",
  age: "20",
}

console.log("p", p)
export {}
