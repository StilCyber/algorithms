// function makeCounter() {
//   let count = 0

//   return function () {
//     return count++
//   }
// }

// let counter = makeCounter()

// console.log(counter()) // 0
// console.log(counter()) // 1
// console.log(counter()) // 2

// решение, чтобы увеличивался count

// let count = 0

// function makeCounter() {
//     count++
// }

// makeCounter()
// makeCounter()

// console.log(count) // 2

/////////////////////////////////////////////

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruRul = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// console.log(ruRul('yandex'));

///////////////////////////////////////////////////

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {
//     name: 'Stil',
//     age: 22,
//     job: 'Front'
// }

// const person2 = {
//     name: 'Gin',
//     age: 25,
//     job: 'Back'
// }

// function bind(context, fn) {

//     return function(...args) {
//         fn.apply(context, args)
//     }
// }

// bind(person1, logPerson)()
// bind(person2, logPerson)()

///////////////////////////////////////////

// function makeCounter(count) {
//     return function() {
//         return count++
//     }
// }

// let counter = makeCounter(0)
// let counter2 = makeCounter(0)

// alert(counter())
// alert(counter())

// alert(counter2())
// alert(counter2())


///////////////////////////////

function createIncrement() {
    let count = 0
    function increment() {
        count++
    }

    let message = `Count is ${count}`
    function log() {
        console.log(message)
    }
    return [increment, log]
}

const [increment, log] = createIncrement()
increment()
increment()
increment()
log()