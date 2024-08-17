class DrugaKlasa {
	druga() {
		return 'Druga Klasa'
	}
}

class PierwszaKlasa extends DrugaKlasa {//Dziedziczenie (rozszerzenie) pierwszej kl o 2 kl za pomocą słówka extends (rozciągnąć, rozbudować)
	pierwsza() {
		return 'Pierwsza Klasa'
	}
}

const obiekt1 = new PierwszaKlasa()
const obiekt2 = new DrugaKlasa()

console.log(obiekt1.druga())
// console.log(obiekt2.druga())
