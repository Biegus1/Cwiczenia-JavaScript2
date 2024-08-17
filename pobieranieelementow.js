//Pierwszy sposób pobierania elementów za pomocą słówka - querySelector

const h2Bend = document.querySelector('div#band h2.w3-wide')
const bandBox = document.querySelector('div #band')
// console.log(h2Bend)
// console.log(bandBox)


//Drugi sposób pobierania elementów - querySelectorAll

// querySelector - wyświetli tylko 1 element 
//querySelectorAll - wyświetla wiele elementów 

const div = document.querySelectorAll("div")
// console.log(div)

// Trzeci sposób pobierania elementów - getElementByClassName (elementy można pobrać tylko po klasie )

const specialBtn = document.getElementsByClassName("special")
// console.log(specialBtn)

//Czwarty sposób pobierania elementów - getElementById (elementy można pobrać tylko po Id )

const navDemo = document.getElementById("navDemo")
// console.log(navDemo)

//Pobieranie elementów po znaczniku (tagu) - getElementByTagName

const imgElement = document.getElementsByTagName("img")
console.log(imgElement)
