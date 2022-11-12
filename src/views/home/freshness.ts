interface IPerson {
  name: string
  age: number
  gender: 0 | 1
}

function printAge(person: IPerson) {
  console.log(person.age)
}

// ERROR
/*
printAge({
  name: "John",
  age: 20,
  gender: 1,
  address: "shanghai",
})
*/

// It's OK
const infoJohn = {
  name: "John",
  age: 20,
  gender: 1 as 1,
  address: "shanghai",
}

printAge(infoJohn)

export {}
