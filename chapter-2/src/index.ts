// console.log('Hello TypeScript')
//
// let a = 1
// let b = a + "1"
// let c = {
//     apple: a,
//     banana: b
// }
//
// let d = c.apple * 4

// 3.2.1 any
// let a: any = 666
// let b: any = ['danger']
// let c: any = a + b

// 3.2.2 unknown
// let a: unknown = 30 // unknown
// let b = a === 123   // boolean
// let c = a + 10      // エラー　TS2571: Object is of type 'unknown'.
// if (typeof a === 'number') {
//     let d = a + 10  // number
// }

// 3.2.3 boolean
// let a = true    // boolean
// let b = false   // boolean
// const c = true  // boolean
// let d: boolean = true   // boolean
// let e: true = true  // true
// let f: true = false // error TS2322: Type 'false' is not assignable to type 'true'.

// 3.2.4 number
// let a = 1234    // number
// var b = Infinity * 0.10 // number
// const c = 5678  // 5678
// let d = a < b   // boolean
// let e: number = 100 // number
// let f: 26.218 = 26.218  // 26.218
// let g: 26.218 = 10  // TS2322: Type '10' is not assignable to type '26.218'.

// 3.2.5 bigint
// let a = 1234n   // bigint
// const b = 5678n // 5678n
// var c = a + b   // bigint
// let d = a < 1235 // boolean
// let e = 88.5n   // TS1353: A bigint literal must be an integer.
// let f: bigint = 100n    // bigint
// let g: 100n = 100n  // 100n
// let h: bigint = 100 // TS2322: Type 'number' is not assignable to type 'bigint'.

// 3.2.6 string
// let a = 'hello' // string
// let b = 'billy' // string
// const  c = '!'  // !
// let d = a + '' + b + c // string
// let e: string = 'zoom' // string
// let f: 'john' = 'john'  // john
// let g: 'john' = 'zoe'   // TS2322: Type '"zoe"' is not assignable to type '"john"'.

// 3.2.7 symbol
// let a = Symbol('a') // symbol
// let b: symbol = Symbol('b') // symbol
// var c = a === b // boolean
// let d = a + 'x' // TS2469: The '+' operator cannot be applied to type 'symbol'.
//
// const e = Symbol('e')   // type of e
// const f: unique symbol = Symbol('f')    // type of f
// let g: unique symbol = Symbol('f')  // TS1332: A variable whose type is a 'unique symbol' type must be 'const'.
//
// let h = e === e // boolean
// let i = e === f // TS1332: A variable whose type is a 'unique symbol' type must be 'const'. 常にfalseを返す

// 3.2.8
// let a: object = {
//     b: 'X'
// }
//
// a.b // TS2339: Property 'b' does not exist on type 'object'.

// let a = {
//     b: 'X'
// }   // { b: string }
//
// a.b // string
//
// let b = {
//     c: {
//         d: 'f'
//     }
// }   // { c: { d: string }}
//
// let a: { b: number } = {
//     b: 12
// } // {b: number}
//
// let c: {
//     firstName: string
//     lastName: string
// } = {
//     firstName: 'john',
//     lastName: 'barrowman'
// }
//
// class Person {
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ) {}
// }
//
// c = new Person('matt', 'smith')
//
// let a: { b: number }
// a = {}  // TS2741: Property 'b' is missing in type '{}' but required in type '{ b: number; }'.
//
// a = { b: 1, c: 2 }  // TS2322: Type '{ b: number; c: number; }' is not assignable to type '{ b: number; }'.   Object literal may only specify known properties, and 'c' does not exist in type '{ b: number; }'.
//

// let a: {
//     b: number,  // number型のプロパティを持っている
//     c?: string, // stringであるプロパティcを持つ可能性がある。この場合、cはundefinedでも問題ない
//     [key: number]: boolean  // booleanである数値プロパティを任意の数だけ持つことができる
// }
//
// a = { b: 1 }
// a = { b: 1, c: undefined }
// a = { b: 1, c: 'd' }
// a = { b: 1, 10: true }
// a = { b: 1, 10: true }
// a = { b: 1, 10: true, 20: false }
// a = { 10: true }    // TS2741: Property 'b' is missing in type '{ 10: true; }' but required in type '{ [key: number]: boolean; b: number; c?: string | undefined; }'.
// a = { b: 1, 33: "red"}  // TS2322: Type 'string' is not assignable to type 'boolean'.
//

// let user: {
//     readonly firstName: string
// } = {
//     firstName: 'abby'
// }
//
// user.firstName  // OK
// user.firstName = 'abbey with an e'  // TS2540: Cannot assign to 'firstName' because it is a read-only property
//
//
// let danger: {}
// let danger1: Object = {
//     test: 1
// }
// danger = {}
// danger = { x: 1}
// danger = []
// danger = 2

// 3.2.9 型エイリアス
// type Age = number
//
// type Person = {
//     name: string
//     age: Age
// }
//
// let age: Age = 55
// let driver: Person = {
//     name: 'James May',
//     age: age
// }
//
// type Color = 'red'
// type Color = 'blue' //TS2300: Duplicate identifier 'Color'.

// type Color = 'red'

// let x = Math.random() < .5
//
// if(x) {
//     type Color = 'blue'
//     let b: Color = 'blue'
// } else {
//     let c: Color = 'red'
// }


// 3.2.9.2　合併型と交差型
// type Cat = {
//     name: string,
//     purrs: boolean
// }
//
// type Dog = {
//     name: string,
//     barks: boolean,
//     wags: boolean
// }
//
// type CatOrDogOrBoth = Cat | Dog
// type CatAndDog = Cat & Dog
//
// let b: CatAndDog = {
//     name: 'Domino',
//     barks: true,
//     purrs: true,
//     wags: true
// }
//

// // Cat
// let a: CatOrDogOrBoth = {
//     name: "Bonkers",
//     purrs: true
// }
//
// // Dog
// a = {
//     name: 'Domino',
//     barks: true,
//     wags: true
// }
//
// // 両方
// a = {
//     name: 'Donkers',
//     barks: true,
//     purrs: true,
//     wags: true
// }


// 3.2.10　配列
// let a = [1, 2, 3]   // number[]
// var b = ['a', 'b']  // string[]
// let c: string[] = ['a'] // string[]
// let d = [1, 'a']    // (string | number)[]
// const e = [2, 'b']  // (string | number)[]
//
// let f = ['red'] // string[]
// f.push('blue')  // OK
// f.push(true)    // Error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.
//
// let g = []  // any[]
// g.push(1)   // number[]
// g.push('red')   // (string | number)[]
//
// let h: number[] = []    // number[]
// h.push(1)   // number[]
// h.push('red')   // Error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//
// d.map(_ => {
//     if(typeof _ === 'number') {
//         return _ * 3
//     }
//     return _.toUpperCase()
// })


// 3.2.11 タプル
// let a: [number] = [1]
//
// // [名前, 苗字, 生まれ年]のタプル
// let b: [string, string, number] = ['malcolm', 'gladwell', 1963] // OK
//
// b = ['queen', 'elizabeth', 'ii', 1926]  // Error　TS2322: Type 'string' is not assignable to type 'number'.
//
// // 鉄道運賃の配列。方向によって異なる場合がある
// let trainFares: [number, number?][] = [
//     [3.75],
//     [8.25, 7.70],
//     [10.50]
// ]
//
// // 上の書き方と同じ
// let moreTrainFares: ([number] | [number, number])[] = [
//     // ...
// ]
//
// let friends: [string, ...string[]] = ['Sara', 'Tail', 'Chloe', 'Claire']
//
// let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

// 3.2.11,1 読み取り専用の配列とタプル
// let as: readonly number[] = [1, 2, 3] // readonly number[]
// let bs: readonly number[] = as.concat(4)    // readonly number[]
// let three = bs[2]   // number
// as[4] = 5 // TS2542: Index signature in type 'readonly number[]' only permits reading.
//
// as.push(6)  // TS2339: Property 'push' does not exist on type 'readonly number[]'.
//
// type A = readonly string[]  // readonly string[]
// type B = ReadonlyArray<string>  // readonly string[]
// type C = Readonly<string[]>  // readonly string[]
//
// type D = readonly [number, string]  // readonly [number, string]
// type E = Readonly<[number, string]>  // readonly [number, string]


// 3.2.12 null, undefined, void, never
// numberまたはnullを返す関数
// function a(x: number) {
//     if(x < 10) {
//         return x
//     }
//     return null
// }
//
// // undefinedを返す関数
// function b() {
//     return undefined
// }
//
// // voidを返す関数
// function c() {
//     let a = 2 + 2
//     let b = a * a
// }
//
// // neverを返す関数
// function d() {
//     throw TypeError('I always Error')
// }
// function e() {
//     white(true) {
//         doSomething()
//     }
// }

// 3.2.13  列挙型
// enum Language {
//     English = 100,
//     Spanish = 200 + 300,
//     Russian // 500と型推論される
// }
//
//
// let myFirstLanguage = Language.Russian  // Language
// let mySecondLanguage = Language['English'] // Language
//
//
// enum Color {
//     Red = '#c10000',
//     Blue = '#007ac1',
//     Pink = 0xc10050,    // 16進リテラル
//     White = 255 // 10進リテラル
// }
//
// let red = Color.Red // Color
// let pink = Color.Pink   // Color
//
// let a = Color.Red
// let b = Color.Green // TS2339: Property 'Green' does not exist on type 'typeof Color'.
//
// let c = Color[255]  // string
// let d = Color[6]    // string
//
//

// 3.2.13  列挙型
// const enum Language {
//     English,
//     Spanish,
//     Russian
// }
//
// // 有効なenumキーにアクセスする
// let a = Language.English
//
// // 無効なenumキーにアクセスする
// let b = Language.Tagalog    // TS2339: Property 'Tagalog' does not exist on type 'typeof Language'.
//
// // 有効なenum値にアクセスする
// let c = Language[0] // TS2476: A const enum member can only be accessed using a string literal
//
// // 無効なenum値にアクセスする
// let d = Language[6] // TS2476: A const enum member can only be accessed using a string literal.
//
//
//

// 3.4 練習問題
// 1
// a: number
// b: string
// c: pineapples
// d: boolean[]
// e: { type: string }
// f: (4number | boolean)[]
// g: number[]
// h: any

// 2
// a: 3しか代入できないため
// b: number[]になっているため
// c: never型は型推論の条件式が必要になるため
// d: 不完全の値になるため

let i: unknown = 4
let m = i * 2 // TS2571: Object is of type 'unknown'.



