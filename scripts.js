let numberCards = prompt("Com quantas cartas deseja jogar? Escolha entre 4 e 14, somente números pares")
numberCards = Number(numberCards) 
const myArray = ['bobrossparrot', 'explodyparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot', 'fiestaparrot']
let plays = 0
let cardArray = []
let compareArray = []
let frontBackArray = []
let position = 0
let win = 0
let varia = true
let time = 0


setInterval(function () {time+=1; console.log(time);}, 1000)


//Verificação da entrada de cartas
if (numberCards <= 14 && numberCards > 2 && numberCards % 2 == 0) {
    for (let i = 0; i < numberCards/2; i++) {
        createElement()
    }
}
else {
    while (numberCards > 14 || numberCards % 2 != 0 || numberCards < 3) {
        numberCards = prompt("Com quantas cartas deseja jogar? Escolha entre 4 e 14, somente números pares")
    }
    for (let i = 0; i < numberCards/2; i++) {
        createElement()
    }
}

//Função para embaralhar as cartas no método sort
function comparador() { 
	return Math.random() - 0.5; 
}

//Criando as cartas
function createElement() {
    
    const newCard = `
    <div class="card" data-identifier="card" onclick="gameCards(this)">
        <div class="front-card" data-identifier="front-face"><img src="img/front 1.png" alt=""></div>
        <div class="back-card hidden" data-identifier="back-face"><img src="img/${myArray[position]}.gif" alt=""></div>
    </div>
    `
    const newCard2 = `
    <div class="card" data-identifier="card" onclick="gameCards(this)">
        <div class="front-card" data-identifier="front-face"><img src="img/front 1.png" alt=""></div>
        <div class="back-card hidden" data-identifier="back-face"><img src="img/${myArray[position]}.gif" alt=""></div>
    </div>
    `
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

//Dinâmica do jogo
function gameCards(element) {

    if (element.querySelector(".front-card").classList.contains("block") == false && varia == true) {

        plays += 1
        //console.log(plays)
        element.querySelector(".front-card").classList.add("hidden")
        element.querySelector(".back-card").classList.remove("hidden")
        elementFront = element.querySelector(".front-card")
        elementBack = element.querySelector(".back-card")

        frontBackArray.push(elementFront)
        frontBackArray.push(elementBack)


        elementCard = element.querySelector(".back-card img").src
        compareArray.push(elementCard)

        if (compareArray.length === 2) {
            varia = false
            compareCards()
            compareArray = compareArray.splice()
        }

    }

}

function compareCards() {

    if (compareArray[0] == compareArray[1]) {
        frontBackArray[0].classList.add("block")
        frontBackArray[2].classList.add("block")
        frontBackArray = frontBackArray.splice()
        win += 1
        varia = true

        if (win === numberCards/2) {
            alert(`Você venceu com ${plays} jogadas em ${time} segundos`)
            useranswer = prompt("Você deseja jogar novamente? Digite sim ou nao")
            useranswer = useranswer.toLowerCase()

            if (useranswer == 'sim') {
                location.reload()
            }

            else if (useranswer != 'nao') {
                alert("Não foi possível identificar o que digitou, recarregue a página caso queira jogar novamente")
            }
            
        }
        //console.log("sao iguais")
    }
    else {
        //console.log("nao sao iguais")
        setTimeout('removeCards()', 1000)
    }
}

function removeCards() {

    frontBackArray[0].classList.remove("hidden")
    frontBackArray[1].classList.add("hidden")
    frontBackArray[2].classList.remove("hidden")
    frontBackArray[3].classList.add("hidden")
    varia = true

    if (frontBackArray.length === 4) {
        frontBackArray = frontBackArray.splice()
        
    }
}


/*
function verifyCardClicked() {
    
    const clickedElement = element.classList.contains("clicked")

    if (clickedElement == false) {

        element.classList.add("clicked")
        plays += 1

        element.querySelector(".front-card").classList.add("hidden")
        element.querySelector(".back-card").classList.remove("hidden")

    }
    
}*/