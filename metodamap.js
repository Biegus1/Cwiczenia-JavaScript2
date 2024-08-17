const imiona = ['Alicja', 'Rafał', 'Krzysztof', 'Tomek', 'Szymon', 'Waldek', 'Beata']
const liczby = [21, 63, 45, 47, 75, 87, 32]
let dziewczyny = []
let chlopcy = []

//Wykorzystanie metody map w praktyce

// liczby.map((liczba, index) => {
//     if (liczba > 41) {
//         console.log(`liczba ${liczba} jesty większa od 41` )
//     }
//     else {
//        console.log(`Liczba ${liczba} jest miejsza od 41`)
//     }

//     console.log(`${liczba} kryje się pod indeksem - ${index}`)

// })

imiona.map(imie => {
	if (imie[imie.length - 1] === 'a') {
		dziewczyny.push(imie)
	} else {
		chlopcy.push(imie)
	}
})

console.log('Dziewczyny: ', dziewczyny)
console.log('Chłopcy: ', chlopcy)
