const h2Bend = document.querySelector('div#band h2')
const p = document.querySelector('p.w3-justify')
const buyTicketBnt = document.querySelector('#buy-ticket')
const formContact = document.querySelector('form')
const inputName = document.querySelector('input[name="Name"]')
const link = document.querySelector('div.w3-top div.w3-bar a[href="#contact"]')

//Zdarzenie kliknięcie

//1
h2Bend.addEventListener('click', () => {
	// console.log('Kliknołem w nagłówek!')
})

//2
function showText() {
	// console.log('Kliknołem w nagłówek 2!')
}

h2Bend.addEventListener('click', showText)

//słówko this

p.addEventListener('click', function () {
	// console.log(this)
})
p.addEventListener('click', () => {
	// console.log(this)
})

//Event

p.addEventListener('click', e => {
	if (e.clientX > 100) {
		// console.log('Jesteś powyżej 100 ' + e.clientX)
	} else {
		// console.log('Jesteś poniżej 100 ' + e.clientX)
	}
})

//Mouseover i mouseout

//mouseover wykonuje się gdy najedziemy na wybrany element
buyTicketBnt.addEventListener('mouseover', () => {
	// console.log('Zadziało SIĘ!!!')
})
	//Gdy zjeżdrzamy z danego elementu
buyTicketBnt.addEventListener('mouseout', () => {
	// console.log('Zadziało SIĘ Poraz drugi!!! ')
})

//PreventDefault
//formContact: Jest to zmienna reprezentująca element formularza, który ma być monitorowany
formContact.addEventListener('submit', e => {
	e.preventDefault()
	// console.log('TEST')
})

link.addEventListener('click', even => {
	// even.preventDefault()
})

//Keyown keyup

inputName.addEventListener('keydown', () => {
	//console.log('Uruchomiono zdarzenie keydown !!!!')
})

inputName.addEventListener('keyup', () => {
	//console.log('Uruchomiono zdarzenie keyup !!!!')
})

//Scroll

window.addEventListener('scroll', () => {
    // console.log('Scrol')
})
window.addEventListener('scroll', e => {
    //console.log(e)
})

window.addEventListener('scroll', e => {
    //console.log(window.scrollY)
})

//Wykonanie zdarzenia po wczytaniu się stony "DOM"

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM wczytał się poprawnie ')
})
