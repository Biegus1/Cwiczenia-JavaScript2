const form = document.querySelector('form')
const boxBend = document.querySelector('div#band')

//Tworzenie nowego elementu

const divElement = document.createElement('div')

divElement.style.width = '100px'
divElement.style.height = '100px'
divElement.style.backgroundColor = 'red'
console.log(divElement)

const p = document.createElement('p')

p.innerText = 'Nowy super Paragraf!!!!!'
console.log(p)

//Wstawianie elementów do HTML POPRZEZ DOM

form.appendChild(divElement)
boxBend.appendChild(p)
