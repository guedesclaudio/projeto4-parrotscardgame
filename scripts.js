let numberCards = prompt("Com quantas cartas deseja jogar?")
numberCards = Number(numberCards) 

const myArray = ['bobrossparrot', 'explodyparrot', 'metalparrot','revertitparrot', 'tripletsparrot','unicornparrot','fiestaparrot']

let plays = 0
let cardArray = []
let position = 0

if (numberCards <= 14 && numberCards > 2 && numberCards % 2 == 0) {
    for (let i = 0; i < numberCards/2; i++) {
        createElement()
    }
}
else {
    while (numberCards > 14 || numberCards % 2 != 0 || numberCards < 3) {
        numberCards = prompt("Com quantas cartas deseja jogar? Máximo de 14 e minímo de 4, somente números pares")
    }
    for (let i = 0; i < numberCards/2; i++) {
        createElement()
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function createElement() {
    
    const newCard = `
    <div class="card" data-identifier="card" onclick="gameCards(this)">
        <div class="front-card"><img src="img/front 1.png" alt=""></div>
        <div class="back-card hidden"><img src="img/${myArray[position]}.gif" alt=""></div>
    </div>
    `
    const newCard2 = `
    <div class="card" data-identifier="card" onclick="gameCards(this)">
        <div class="front-card"><img src="img/front 1.png" alt=""></div>
        <div class="back-card hidden"><img src="img/${myArray[position]}.gif" alt=""></div>
    </div>
    `
    console.log(myArray[position])
    cardArray.push(newCard)
    cardArray.push(newCard2)
    position += 1

    if (cardArray.length == numberCards) {
        cardArray = cardArray.sort(comparador)

        for (let x = 0; x < numberCards; x++) {
            const dadDiv = document.querySelector(".container")
            dadDiv.innerHTML += cardArray[x]
        }
    }
    
}

function gameCards(element) {

    const clickedElement = element.classList.contains("clicked")

    if (clickedElement == false) {

        element.classList.add("clicked")
        plays += 1

        element.querySelector(".front-card").classList.add("hidden")
        element.querySelector(".back-card").classList.remove("hidden")

    }

}