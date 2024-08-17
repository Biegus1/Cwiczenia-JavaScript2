class Samochod {
	//każda klasa posiada konstruktor kóry się tworzy ałtomatycznia
	constructor(marka, model, rok, kolor) {
		this.markaSamochodu = marka
		this.modelSamochodu = model
		this.rokSamochodu = rok
		this.kolorSamochodu = kolor
	}
	przywitajsie() {
		console.log(
			`Cześć Jestem samochodem ${this.markaSamochodu} model ${this.modelSamochodu} z roku ${this.rokSamochodu} koloru ${this.kolorSamochodu}`
		)
	}
	pokazRocznik() {
		console.log(`Rocznik samochodu to : ${this.rokSamochodu}`)
	}
}

const fiat = new Samochod('Fiat', 'Punto', 2010, 'niebieski')
const ford = new Samochod('Ford', 'fokus', 2012, 'niebieski')

fiat.przywitajsie()
fiat.pokazRocznik()

ford.przywitajsie()
ford.pokazRocznik()
