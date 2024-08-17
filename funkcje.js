//Pierwszy sposób deklarowania funkcji zaczynamy od słowa "function" nazwa funkcji i kończymy ()

function wyswietlTekst() {
	console.log('Przykładowy tekst z funkcji :)')
}
// wyswietlTekst();

//Drugi sposób deklarowania funkcji deklarujemy zmienną (const, let) nzwa funkcji i po znaku "=" nazwa funkcji i kończymy ()

const wyswietlTekst2 = function () {
	console.log('Przykładowy tekst z funkcji 2 :)')
}

//wyswietlTekst2()

//Trzeci sposób deklarowania funkcji deklarujemy zmienną (const, let) nazwa fumkcj znak "=" po znaku () i =>

const wyswietlTekst3 = () => {
	console.log('Przykładowy tekst z funkcji 3 :)')
}

//wyswietlTekst3()

const imie = 'Alek'
const wiek = 35
const zwierze = 'Kotek'

// function zwrocTekst() {
// 	if ((imie == 'Alicja')) {
// 		console.log('Ta osoba może wejść :)')
// 	} else {
// 		console.log('Brak pozwolenia na wejście')
// 	}
// }

// zwrocTekst()

//Parametry funkcji

// let pierwszaLiczba = 1;
// let drugaLiczba = 2;
// let suma;

let wynik

function odejmowanieLiczb(trzecia, czwarta) {
	return trzecia - czwarta
}

function dodawanieLiczb(pierwsza, druga) {
	const wynikOdejmowania = odejmowanieLiczb(5, 3)
	return pierwsza + druga + wynikOdejmowania
}

// console.log(dodawanieLiczb(30, 15))
// wynik = dodawanieLiczb(31, 40, "Krzysztof")

// if( wynik > 60)
// {
//     console.log("Jesteś już na emeryturze :)")
// }
// else {
//     console.log("jeszcze pracujesz :(")
// }

// console.log(wynik)

emerytura(30, 40)

function emerytura(pierwsza, druga) {
	const wynik = pierwsza + druga
	if (wynik > 60) {
		console.log(wynik + ' Jesteś na emeryturze')
	} else {
		console.log(wynik + ' Jeszcze pracujesz')
	}
}
