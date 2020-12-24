interface person {
  name: string
  age: number
}

const john: person = {
  name: 'John',
  age: 12
}

interface favoriteShoe {
  brand: string
  size: number
  isRare?: boolean
}

const shoes: favoriteShoe[] = [{ brand: 'Nike', isRare: false, size: 9 }]
