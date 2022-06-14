let numberCards = prompt("Com quantas cartas deseja jogar?")

const myArray = ['bobrossparrot', 'bobrossparrot',
                'explodyparrot', 'explodyparrot',
                'metalparrot','metalparrot',
                'revertitparrot', 'revertitparrot',
                'tripletsparrot', 'tripletsparrot',
                'unicornparrot', 'unicornparrot',
                'fiestaparrot', 'fiestaparrot']

let plays = 0


if (numberCards <= 14 && numberCards % 2 == 0) {
    for (let i = 0; i < numberCards; i++) {
        createElement()
    }
}
else {
    while (numberCards > 14 || numberCards % 2 != 0) {
        numberCards = prompt("Com quantas cartas deseja jogar? Máximo de 14 e somente números pares")
    }
    for (let i = 0; i < numberCards; i++) {
        createElement()
    }
}

function createElement() {
    const newCard = `
    <div class="card" data-identifier="card" onclick="gameCards(this)">
        <img src="img/front 1.png" alt="">
    </div>
    `
    const dadDiv = document.querySelector(".container")
    dadDiv.innerHTML += newCard
}

function gameCards(element) {

    const clickedElement = element.classList.contains("clicked")

    if (clickedElement == false) {

        element.classList.add("clicked")

        let random = myArray[Math.round(Math.random()*13)]

        plays += 1

        element.querySelector("img").src = `img/${random}.gif`
    }

    /*else {
        element.querySelector("img").src = "img/front 1.png"
        console.log('passando else')
    }*/

}