const imiona = ["Alicja", "Rafał", "Krzysztof", "Tomek", "Szymon", "Waldek", "Beata"]
const liczby = [21, 63, 45, 47, 75, 87, 32,]

imiona.forEach(imie => {
    if (imie[imie.length - 1] === 'a') {
        dziewczyny.push(imie);
    } else {
        chlopcy.push(imie);
    }
});

console.log("Dziewczyny: ", dziewczyny);
console.log("Chłopcy: ", chlopcy);