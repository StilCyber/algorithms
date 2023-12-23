// const person = new Object({
//     name: 'Stil',
//     age: 25,
//     greet: function() {
//         console.log('Greet!');
//     }
// })

// Object.prototype.sayHello = function() {
//     console.log('Hello');
// }

// const lena = Object.create(person)

// const str = new String('I am string')


console.log('Start')
console.log('Start 2')

function timeout2sec() {
    console.log('timeout2sec');
}

window.setTimeout(function() {
    console.log('Inside timeout, after 2000 seconds');
}, 2000)

setTimeout(timeout2sec, 2000)

console.log('End');