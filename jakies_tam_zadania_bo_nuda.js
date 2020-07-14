/*
ZADANIA

Zadanie 1
Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1]. 
Napisz funkcję, która wypisze w konsoli nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.

Zadanie 2
Napisz funkcję sayHello przyjmującą jeden argument, który jest obiektem zawierającym dane osoby. 
Jeśli przekazany obiekt ma własność name, Twoja funkcja powinna wypisać w konsoli “Hello, name!”. 
Jeśli nie, funkcja ma wypisać tylko “Hello!”. Przykładowy obiekt do wywołania funkcji to const person = { name: "Jill", age: 25, hobby: "sports" }.

Zadanie 3
Napisz prostą maszynę losującą, czyli funkcję, która przyjmuje jako argument tablicę zawierającą listę osób. 
Twoja funkcja powinna zwracać losową osobę z tej tablicy. 
Przykładowa tablica do wywołania funkcji: const students = ["John", "Bill", "Emma", "Stella", "Rob"].

*/


//=============================
/* 1 */ console.log('Zadanie 1')

const numbers = [2, 5, 7, 10, 34, 16, 879, 1]

const filter = (numbers) => numbers.filter(e => e % 2 == 0)

console.log(filter(numbers))

//=============================
/* 2 */ console.log('Zadanie 2')

const sayHello = (data) => {

    data = Object.assign({
        name: '',
        age: undefined,
        hobby: undefined
    }, data)

    let message = 
    `
    ====================
    Witaj ${data.name}!
    ${data.age != undefined ? `Masz ${data.age} lat` : ``}
    ${data.hobby != undefined ? `Twoje hobby to: ${data.hobby}` : ``}
    ====================
    `

    return message

}

const person_1 = sayHello({ name: 'Mateusz', age: 18, hobby: ['Bike', 'Programing'] })
console.log(person_1)

const person_2 = sayHello({name: 'Antek'})
console.log(person_2)

const person_3 = sayHello({age: 18})
console.log(person_3)

//=============================
/* 3 */ console.log('Zadanie 3')

const students = ["John", "Bill", "Emma", "Stella", "Rob"]

const maszyna = (array) => { return array[Math.floor((Math.random() * array.length))] }

let wylosowane = maszyna(students)
console.log(wylosowane)
