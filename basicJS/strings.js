// anagram

function anagram(str1, str2) {
    let example1 = str1.toLowerCase().split('').sort().join('')
    let example2 = str2.toLowerCase().split('').sort().join('')
    console.log(example1, example2)
    if(example1 === example2) {
        return true
    } else {
        return false
    }
}

// console.log(anagram('friend', 'Finder')); // true
// console.log(anagram('hello', 'bye')); // false


////////////////// vowels 

function vowelsQuantity(str) {

    let quantity = str.match(/[a,e,u,o,i]/gi).length

    return quantity

}

// console.log(vowelsQuantity('asdfaeI'));