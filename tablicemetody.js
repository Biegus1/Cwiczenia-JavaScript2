const tablica = ['klaudia', 2, 5.35, true, { name: 'Tomas', age: 24 }]
const liczby = [1, 5, 6, 4, 9, 2, 4]
const imiona = ['Olek', 'Krzysztof', 'Ola', 'Rafał', 'Ania']

//Metody weryfikacja długości tablicy

//console.log(tablica.length)
//console.log(liczby.length)

//Dodawanie elementów do tablicy na sam koniec

tablica.push('Wojtek')
//console.log(tablica)

//Usówanie elementu z końca tablicy

tablica.pop()
liczby.pop()

// console.log(tablica)
// console.log(liczby)

//Usówanie elementu z ppoczątku tablicy

tablica.shift()
liczby.shift()

// console.log(tablica)
// console.log(liczby)

//Znajdowanie elementu w tablicy po jej wartości

const indexElement = liczby.indexOf(2)
const indexElement2 = tablica.indexOf('klaudia')
//console.log(indexElement)
//console.log(indexElement2)

//Usówanie dowolnego elementu z tablicy

liczby.splice(indexElement, 1)
//console.log(liczby)

//Przekształcenie tablicy na string

const stringLiczby = liczby.join(' ')
//console.log(stringLiczby)

const stringImiona = imiona.join('-')
//console.log(stringImiona)

//Odwrucenie tablicy

imiona.reverse()
//console.log(imiona)

//Sortowanie tablicy
imiona.sort()
//console.log(imiona)

//Łączenie tablic

const superTablica = liczby.concat(imiona)
console.log(superTablica)
