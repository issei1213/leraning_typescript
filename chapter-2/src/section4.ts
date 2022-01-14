// 4.1 関数の宣言の呼出
// 名前付き関数
// function greet(name: string) {
//     return 'hello' + name
// }
//
// let greet2 = function(name: string) {
//     return 'hello' + name
// }
//
// let greet3 = (name: string) => {
//     return 'hello' + name
// }
//
// let greet4 = (name: string) => 'hello' + name
//
// let greet5 = new Function('name', 'return "hello" + name')

// // 4.1.1
// function log(message: string, userId?: string) {
//     let time = new Date().toLocaleTimeString()
//     console.log(time, message, userId || "Not sign in")
// }
//
// log("Page loaded") // OK
// log('User Signed in', 'da753be') // OK


// 4.1.1
// type Context = {
//     appid?: string
//     userId?: string
// }
//
//
// function log(message: string, context: Context = {}) {
//     let time = new Date().toISOString()
//     console.log(time, message, context.userId)
// }
//
// log('User clicked on a button', 'da753be') // OK
// log('User signed out')  // OK
//
// // 4.1.2
// function sumVariadicSafe(...numbers: number[]): number {
//     return numbers.reduce((total, n) => total + n, 0)
// }
//
// sumVariadicSafe(1, 2, 3)

// 4.1.3
// function add(a: number, b: number): number {
//     return a + b
// }
//
// add(10, 26)
// add.apply(null, [10, 20])
// add.call(null, 10, 20)
// add.bind(null, 10, 20)()

// 4.1.4
// function fancyDate(this: Date) {
//     return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
// }
//
// fancyDate.call(new Date)
// fancyDate()

// 4.1.5
// function* createFibonacciGenerator() {
//     let a = 0
//     let b = 1
//     while(true) {
//         yield a;
//         [a, b] = [b, a + b]
//     }
// }
//
// let fibonacciGenerator = createFibonacciGenerator() //  Generator<number, void, unknown>
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()


// function* createNumber(): Generator<number> {
//     let n = 0
//     while(1) {
//         yield n++;
//     }
// }
//
// let numbers = createNumber()
// numbers.next()
// numbers.next()
// numbers.next()


// 4.1.6
// let numbers = {
//     *[Symbol.iterator]() {
//         for( let n = 1; n <= 10; n++) {
//             yield n
//         }
//     }
//  }

// 4.1.7
// function greet(name: string)
// type Greet = (name: string) => string
//
//
// function sumVariadicSafe(...numbers: number[]): number
// type SumVariadicSafe = (...numbers: number[]) => number
//
//
//
//
// type Log = (message: string, userId?: string ) => void
// let log: Log = (
//     message,
//     userId = 'Not sign in'
// ) => {
//     let time = new Date().toISOString()
//     console.log(time, message, userId)
// }

// 4.1.8
// function times (
//     f: (index: number) => void,
//     n: number
// ): void {
//     for( let i = 0; i < n; i++) {
//         f(i)
//     }
// }
//
// times(n => console.log(n), 4)

// 4.1.9
// type Log = (message: string, userId?: string) => void
//
// type Log = {
//     (message: string, userId?: string): void
// }


// type Reserve = {
//     (from: Date, to: Date, destination: string): Reservation
//     (from: Date, destination: string): Reservation
// }
//
// let reserve: Reserve = (
//     from: Date,
//     toOrDestination: Date | string,
//     destination?: string
// ) => {
//     if (toOrDestination instanceof Date && destination !== undefined) {
//         // 宿泊旅行を予約する
//     } else if(typeof toOrDestination === 'string'){
//         // 日帰り旅行を予約する
//     }
// }

// 4.2
// type Filter = {
//     <T>(array: T[], f:(item: T) => boolean): T[]
// }

// type Filter<T> = {
//     (array: T[], f:(item: T) => boolean): T[]
// }

// let filter: Filter = (array, f) => //...

//
// type Filter = {
//     <T>(array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter = // ...


// type Filter<T> = {
//     (array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter<number> = // ...
//
// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[]
// let filter: Filter<string> = //...

// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[]
//
// function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
//     let result = []
//
// }


// type Filter = {
//     <T extends string | number>(array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter = // ...

// function map<T, U>(array: T[], f: (item: T) => U): U[] {
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         result[i] = f(array[i])
//     }
//
//     return result
// }
//
// map(['a', 'b', 'c'], _ => _ === 'a')
//
// let promise = new Promise<number>(resolve => resolve(45))
// promise.then(result => result * 4)


// type MyEvent<T> = {
//     target: T
//     type: string
// }
//
// type ButtonEvent = MyEvent<HTMLButtonElement>
//
// let myEvent: MyEvent<HTMLButtonElement | null> = {
//     target: document.querySelector('#myButton'),
//     type: 'click'
// }
//
// type TimedEvent<T> = {
//     event: MyEvent<T>
//     from: Date
//     to: Date
// }
//
// function triggerEvent<T>(event: MyEvent<T>): void {
//     // ...
// }
//
// triggerEvent({
//     target: document.querySelector('#myButton'),
//     type: 'mouseover'
// })


// type TreeNode = {
//     value: string
// }
// type LeafNode = TreeNode & {
//     isLeaf: true
// }
// type InnerNode = TreeNode & {
//     children: [TreeNode] | [TreeNode, TreeNode]
// }
//
// let a: TreeNode = { value: 'a'}
// let b: LeafNode = { value: 'b', isLeaf: true }
// let c: InnerNode = { value: 'c', children: [b]}
//
// let a1 = mapNode(a, _ => _.toUpperCase()) // TreeNode
// let b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
// let c1 = mapNode(c, _ => _.toUpperCase()) // InnerNode
//
// function mapNode<T extends TreeNode>( // 1
//     node: T, // 2
//     f: (value: string) => string
// ): T { // 3
//     console.log({...node})
//     return {
//         ...node,
//         value: f(node.value)
//     }
// }
//
//
// type HadSides = {
//     numberOfSides: number
// }
// type SidesHaveLength = {
//     sideLength: number
// }
//
// function logPerimeter<  // 1
//     Shape extends HadSides & SidesHaveLength    // 2
//     >(s: Shape): Shape {    // 3
//     console.log(s.numberOfSides * s.sideLength)
//     return s
// }
//
// type Square = HadSides & SidesHaveLength
// let square: Square = { numberOfSides: 4, sideLength: 3}
// logPerimeter(square) // 出力結果 12
//
// function call<T extends unknown[], R>(
//     f: (...args: T) => R,
//     ...args: T
// ): unknown {
//     return f(...args)
// }
//
//
// function fill(length: number, value: string): string[] {
//     return Array.from({length}, () => value)
// }
//
// let a = call(fill, 10, 'a') //OK
// let a = call(fill, 10, 10)
// let b = call(fill, 10)  // TS2554: Expected 3 arguments, but got 2.
// let c = call(fill, 10, 'a', 'z')  //TS2554: Expected 3 arguments, but got 4.


// type MyEvent<T extends HTMLElement = HTMLElement> = {
//     target: T
//     type: string
// }
//
// let myEvent: MyEvent = {
//     target: myElement,
//     type: string
// }
//
// let buttonEvent: MyEvent<HTMLButtonElement> = {
//     target: myButton,
//     type: string,
// }
//
//
// type MyEvent2<Type extends string, Target extends HTMLElement = HTMLElement> = {
//     target: Target,
//     type: Type
// }
//
// type MyEvent3<Target extends HTMLElement = HTMLElement, Type extends string> = {
//     target: Target,
//     type: Type
// }

// 4.5　パラメータ
// 1. パラメータ

// 3.
// type Reserve = {
//     (from: Date, to: Date, destination: string): Reservation
//     (from: Date, destination: string): Reservation
//     (destination: string): Reservation
// }
//
// let reserve: Reserve = (
//     from: Date,
//     toOrDestination: Date | string,
//     destination?: string
// ) => {
//     if (toOrDestination instanceof Date && destination !== undefined) {
//         // 宿泊旅行を予約する
//     } else if(typeof toOrDestination === 'string'){
//         // 日帰り旅行を予約する
//     } else if (from === undefined && toOrDestination === undefined) {
//     //  練習問題
//
//     }
// }