let value: string = ''

let myNum: number = 4

let isTrue: boolean = false

let arrayOfNums: number[] = [1, 2, 3, 4]

let arrayOfStrings: string[] = ['Hello', 'Goodbye']

let noVal: null | string = null

let canBeAnythin: any = {} || '' || false || []

//  Tuples

let tup: [number, string] = [1, 'Hi']

interface personFavs {
  food: string
  drink: string
}

interface objInterface {
  name: string
  age: number
  favs: personFavs
}

let myObj: objInterface = {
  name: 'John',
  age: 36,
  favs: {
    drink: 'Coke',
    food: 'pizza'
  }
}

enum Person {
  name = 'John',
  age = 36
}

interface optionals {
  has_friends?: boolean
  friendCount: number
}

let optionalKeys: optionals = {
  friendCount: 36
}

function iReturnAString(): string {
  return 'Hi'
}

function iReturnAnything(): any {
  return '' || 3 || false || {} || []
}

function iReturnAnInterface(): optionals {
  return { has_friends: false, friendCount: 0 }
}

function acceptParemeterOfStr(name: string): string {
  return name
}

let T: string

function generic<T>(arg: T) {
  return arg
}

class People {
  public name: string
  private ssn: string | null
  constructor(name: string) {
    this.name = name
    this.ssn = null
  }

  public sayName(): string {
    return this.name
  }

  private enterSocial(newSocial: string): boolean {
    this.ssn = newSocial
    return this.ssn ? true : false
  }

  public validateUser(ssn: string) {
    this.enterSocial(ssn)
  }
}

const john = new People('John')

console.log(john.sayName())

// john.enterSocial('123-456-9988') // Undefined, cannot access private methods and attributes outside of class

john.validateUser('123-456-9988') // Can use a different function to work with private methods
