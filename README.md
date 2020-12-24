# Introduction To TypeScript

![typescript](https://i2.wp.com/storage.googleapis.com/blog-images-backup/1*KTh3puTlJIF6vAuUUu_LAQ.jpeg?ssl=1)

## Objectives

- Learn how to create typescript files.
- Learn how create a typescript project from scratch.
- Learn the process of compiling code to vanilla javascript.
- Learn to to use static type checking with typescript

## Getting Started

- Fork and Clone
- `npm init -y`
- `npx tsc --init`
- `mkdir src`

## What is TypeScript?

From [TypeScript Docs](www.typescriptlang.org):

> TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
>
> Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.
>
> Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.

To sum it all up, TypeScript is a tool that provides us with the abilities to build applications while knowing what our data will look like ahead of time while still being able to write code in Javascript. This leads to:

- **LESS BUGS**
- **MAINTAINABLE AND SCALABLE CODEBASES**
- **DEVELOPER FRIENDLY DECLARATIVE CODE**

Although like with other new tools, there is a learning curve, but what makes TypeScript such a powerful tool is that it's just Javascript, albeit a more well dressed and elegant version.

Need a more simple explanation?

TypeScript is you dressed for a wedding, Javascript is you dressed in your pajamas... :) Although being dressed for a wedding isn't the most comfortable it is elegant and presentable, whereas being in your pajamas is comfortable and flexible but you really shouldn't go out in public wearing them.

Ever since the creation of Javascript, developers have always praised and renounced one thing... It's too loose of a language and that leads to hours trying to find bugs and broken code.

### Why Is TypeScript Becoming So Popular?

[Read This Article To Find Out More](https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164#:~:text=On%20the%20contrary%20though%2C%20if,%2C%20type%20guards%2C%20conditional%20types%3F)

## Configuring Our TypeScript Compiler

Replace the code generated in the `tsconfig.json` file with the following:

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    "declaration": true /* Generates corresponding '.d.ts' file. */,
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./dist" /* Redirect output structure to the directory. */,
    "rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,

    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow*/
  },
  "exclude": ["node_modules", "solution", "dist"]
}
```

The `tsconfig.json` file is used by the TypeScript compiler to determine where and how to output our code. Since we created a `src` directory, the compiler will compile the everything in the `src` directory and place it in a `dist` directory with the compiled `.js` files. You'll want to serve your content from the `dist` folder in production. The file is confusing at first, but you can ignore it for the time being.

## Creating Your First TypeScript File

Start by creating an `index.ts` file in the `src` directory that you created when setting up this lesson.

The `.ts` file extension is unique to typescript in the same way that `.js` is to javascript and `.py` is to python.

Let's create a variable in `index.ts`:

```ts
const myNum: number = 3
```

**Note**: Don't worry if the above doesn't make any sense yet, we'll cover it in the next section.

Let's see what the compiler does with this file, in your terminal run:

```sh
npx tsc
```

A `dist` folder should have been created for your with an `index.js` and an `index.d.ts` file. The js file stores our compiled code, while the `ts` file stores the type definitions for the `myNum` variable.

## Basic Types

Out of the box, TypeScript provides us with some basic types:

- number
- string
- boolean
- [] => array
- tuple
- enum
- unknown
- null
- any
- void
- undefined
- never

We saw the `number` type in action when we tested our compiler earlier.

These `types` provide us with strict type checking for our variables. What that means is if we declare a variable as a number, the value must be a number or the compiler will give us an error and fail.

A variable is set to a type utilizing the `:` symbol. Example:

```ts
const myVar: string = ''
```

We're declaring our `myVar` variable to be a type of string and setting it to an empty string.

### Type Practice

#### [Basic Types Documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)

Do the following in your `index.ts`, if you get stuck at any point, solutions can be found in the `solution` directory in `basicTypes.ts`.

- Create a variable `value` with a type of `string` and set it to an empty string.
- Create a `myNum` variable with a type of `number` and set it to 4
- Create an `isTrue` variable with a type of `boolean` and set it to false.
- Create an `arrayOfNums` variable with a type of `number[]` and add in 4 numbers.
- Create an `arrayOfStrings` variable with a type of `string[]` and in any strings.
- Create a `noVal` variable with a type of `null` or `string` and set it to null.
- Create a `canBeAnything` variable with a type of `any` and set equal to `{} || '' || false || []`

## Working With Interfaces

So what exactly is an interface? An interface is a predefined shape or map of our data with each property's type. They allow us to plan ahead and create a declarative example of what our data should look like. Here's an example:

```ts
interface values {
  name: string
  bio: string
  hoursWorked: number
}
```

In the above example we are declaring that any data that utilizes this interface must have those properties and each property must be that type.

What about if we're not sure if a specific piece of data will have a property but we would like to have a definition for it? Easy as pie!

```ts
interface values {
  name: string
  bio: string
  hoursWorked: number
  isEmployed?: boolean
}
```

Notice the `?` in the `isEmployed` field, we're declaring that any object utilizing this interface may have an `isEmployed` field but it isn't required. Just in case that field does exist it should be a type of `boolean`.

Interfaces are typically used when building objects, but can also be used with arrays as well. We can declare that an array will contain multiple objects that should look like the `values` interface.

Here's a few examples:

```ts
interface pet {
  name: string
  breed: string
  size?: string
}

const myPet: pet = {
  name: 'Marlin',
  breed: 'Aussie'
}
```

```ts
interface apiData {
  email: string
  isBetaMember: boolean
  name: string
}

const users: apiData[] = [
  { name: 'Joe', isBetaMember: true, email: 'joe@mail.com' },
  { name: 'Moe', isBetaMember: false, email: 'moe@mail.com' },
  { name: 'Doe', isBetaMember: true, email: 'doe@mail.com' }
]
```

### Interface Practice

#### [Interface Docs](https://www.typescriptlang.org/docs/handbook/interfaces.html)

Solutions can be found in `solution/interfaces.ts`.
Work in your `index.ts` file in the `src` directory:

- Create an `interface` `person` with the following `required` attributes :
  - ```ts
    name: string
    age: number
    ```
- Create an object that utilizes the `person` interface you created and provide the required fields.
- Create an `interface` for `favoriteShoe` with the following attributes:
  - ```ts
    brand: string
    size:number,
    isRare?:boolean
    ```
- Create an array of favorite shoes utilizing the `favoriteShoe` interface.

## Recap

In this lesson, we learned the basics of TypeScript. We went through setting up a basic TypeScript project, `types` and `interfaces`. Feel free to look inside of the `advTypesaAndClasses.ts` file for more examples of advanced content.

## Resources

- [TypeScript Docs](https://www.typescriptlang.org/docs)
