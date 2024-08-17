const h2Element = document.querySelector('div#band h2.w3-wide')
const navBar = document.querySelector('div.w3-bar')

let switchVariable = false

h2Element.addEventListener('click', function () {
	//Zmiana koloru h2 na czerwony

	if (switchVariable === false) {
		this.style.color = 'red'
		this.style.fontSize = '50px'
	} else {
		this.style.color = 'black'
		this.style.fontSize = '30px'
	}
	switchVariable = !switchVariable

	//this.style = 'text-decoration: underline' //musi być wyżej niż inne zapisy bo poniżej kasuje zmiany poprzednie zapis niezalecany
	// this.style = "color: yellow"
})

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		navBar.style.background = 'gold'
	} else {
		navBar.style.background = 'blue'
	}
})
