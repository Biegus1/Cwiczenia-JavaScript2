const plec = 'robot'
const wiek = 25
const zwierzeta = 'pies'

//instrukcja warunkowa
// if (plec == "kobieta"){
//     console.log("witam panią")
// }
// else if(plec == "mężczyzna") {
//     console.log("witam pana")
// }
// else{
//     console.log("nie możesz wejść")
// }

//wiek >30 i osoba będzie posiadała zwierzę psa może wejść

if (wiek > 30 || zwierzeta == 'pies') {
	console.log('Możesz wejść. Zapraszamy;)')
} else {
	console.log('To jest klub tylko dla Piesków. Przepraszamy')
}
