// basic

/// потеря контекста
//// у setTimeout контекст - объект window. Поэтому в консоли будет undefined

// const obj = {
//     a: 42,
//     say: function() {
//         setTimeout(function() {
//             console.log(this.a)
//         }, 1000)
//     }
// }

// obj.say()

//// Это верное решение

// const obj = {
//     a: 42,
//     say: function() {
//         setTimeout(() => {
//             console.log(this.a)
//         }, 1000)
//     }
// }

/// другой способ решения, без ES6

// const obj = {
//     a: 42,
//     say: function() {
//         function helper() {
//             console.log(this.a)
//         }
//             setTimeout(helper.bind(this), 1000)
//     }
// }

// obj.say()

//////////////////////////////////////

// const ex = function (value, sum) {
//     console.log(sum + value)
// }

// const ex = (value, sum) => console.log(sum + value)

// const fx = ex.bind(null, 10)

// ex(12, 7)
// fx(7, 12)

// function hello() {
//     console.log('Hello', this)
// }

// const person = {
//     name: 'STIL',
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(window),
//     logInfo: function(job, phone) {
//         console.group(`${this.name} info: `)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.groupEnd()
//     }
// }

// const lena = {
//     name: 'Elena',
//     age: 23
// }

///////////////////////////////////
// добавляем новый метод в прототип, используем this

// const array = [1,2,3,4,5]

// Array.prototype.multBy = function(n) {
//     return this.map((elem) => {
//         return elem * n
//     })
// }

// console.log(array.multBy(2));

////////////////////////



