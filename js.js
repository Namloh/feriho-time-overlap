let date = new Date();
function TimeOverlap(hodiny, minuty, sekundy) { //nejlepsi funkce ever!!!!
    sekundy -= 1
    if (sekundy < 0) {
        minuty -= 1
        sekundy += 60
    } // Sekundy
    if (minuty < 0) {
        hodiny -= 1
        minuty += 60
    } // Minuty
    return [hodiny, minuty, sekundy]
}
const cas = document.getElementById("cas")
let hodiny = 14 - date.getHours();
let minuty = 6 - date.getMinutes();
let sekundy = 0 - date.getSeconds();
let FerihoZasoba = []
let i1 = setInterval(() => {
    FerihoZasoba = TimeOverlap(hodiny, minuty, sekundy)
    hodiny = FerihoZasoba[0]
    minuty = FerihoZasoba[1]
    sekundy = FerihoZasoba[2]
    cas.innerHTML = "DO KONCE HODINY ZBYVA " + hodiny + " hodin, " + minuty + " minut a " + sekundy + " sekund"
}, 1000);