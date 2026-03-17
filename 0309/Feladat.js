function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let rnd = getRandomInt(0, 100);
let i = 1;
while (i <= 20) {
    let guess = parseInt(prompt("Tippelj egy számra 0 és 1.000.000 között: "));
    if (rnd < guess) {
        alert(`${i} tipp nem talált: A megoldás kisebb.`);
    } else if (rnd > guess) {
        alert(`${i} tipp nem talált: A megoldás nagyobb.`);
    } else {
        alert(`Gratulálok, ${i} lépésből eltaláltad!`);
        break;
    }
    i++;
    if (i === 20) {
        alert(`Sajnos ez most nem sikerült! A megoldás: ${rnd}`);
    }
}        
