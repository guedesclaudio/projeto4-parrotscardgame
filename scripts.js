let numberCards = prompt("Com quantas cartas deseja jogar? Escolha entre 4 e 14, somente números pares")
numberCards = Number(numberCards) 
const myArray = ['bobrossparrot', 'explodyparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot', 'fiestaparrot']
let plays = 0
let cardArray = []
let compareArray = []
let frontBackArray = []
let altArray = []
let position = 0
let win = 0
let varia = true
let time = 0
let alt = 0
let hack
let interval = setInterval(timer, 1000)


setInterval(() => {
    if (time > 15) {
        document.querySelector(".watch h1").classList.add("danger")
    }
}, 1000);


function timer() {
    time+=1
    document.querySelector(".watch h1").innerHTML = time
}


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
    alt +=1
    const newCard = `
    <div class="card card1" data-identifier="card" onclick="gameCards(this)">
        <div class="front-card" data-identifier="front-face"><img src="img/front 1.png" alt="${alt}"></div>
        <div class="back-card hidden" data-identifier="back-face"><img src="img/${myArray[position]}.gif" alt="${alt}"></div> 
    </div>
    `
    alt +=1
    const newCard2 = `
    <div class="card card2" data-identifier="card" onclick="gameCards(this)">
        <div class="front-card" data-identifier="front-face"><img src="img/front 1.png" alt="${alt}"></div>
        <div class="back-card hidden" data-identifier="back-face"><img src="img/${myArray[position]}.gif" alt="${alt}"></div>
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
        hack = false
        element.classList.add("turn")
        elementFront = element.querySelector(".front-card")
        elementBack = element.querySelector(".back-card")

        setTimeout(function () {
            elementFront.classList.add("hidden")
            elementBack.classList.remove("hidden")
        }, 100)

        frontBackArray.push(elementFront)
        frontBackArray.push(elementBack)

        elementCard = element.querySelector(".back-card img").src
        elementAlt = element.querySelector(".back-card img").alt
        compareArray.push(elementCard)
        altArray.push(elementAlt)


        if (altArray.length === 2 && (altArray[0] == altArray[1])) {
            hack = true
            altArray = altArray.splice()
            alert("Não clique na mesma carta mais de uma vez! Ela voltará a virar de costas e contará como uma jogada")
        }

        if (compareArray.length === 2) {
            varia = false
            compareCards()
            compareArray = compareArray.splice()
            altArray = altArray.splice()
        }
    }
}


//Comparando os cards 
function compareCards() {

    if ((compareArray[0] == compareArray[1]) && hack != true) {
        
        frontBackArray[0].classList.add("block")
        frontBackArray[2].classList.add("block")
        frontBackArray = frontBackArray.splice()
        win += 1
        varia = true

        if (win === numberCards/2) {
            setTimeout(function () {
                clearInterval (interval)
                alert(`Você venceu com ${plays} jogadas em ${time} segundos`)
                useranswer = prompt("Você deseja jogar novamente? Digite sim ou não")
                useranswer = useranswer.toLowerCase()

                if (useranswer == 'sim') {
                    location.reload()
                }

                else if (useranswer != 'não') {
                    alert("Não foi possível identificar o que digitou, recarregue a página caso queira jogar novamente")
                }
            },1000)
        }
    }
    else {
        setTimeout('removeCards()', 1000)
    }
}


//Virando os cards caso nao sejam iguais
function removeCards() {

    frontBackArray[1].parentNode.classList.remove("turn")
    frontBackArray[3].parentNode.classList.remove("turn")
    
    frontBackArray[0].classList.remove("hidden")
    frontBackArray[1].classList.add("hidden")
    frontBackArray[2].classList.remove("hidden")
    frontBackArray[3].classList.add("hidden")
    
    varia = true

    if (frontBackArray.length === 4) {
        frontBackArray = frontBackArray.splice()
    }
}
