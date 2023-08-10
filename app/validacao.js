function verificarResultadoDeChute(chute) {
    const numero= +chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML= `
                <h2 class="game-over">Game Over!!!!</h2>
                <h3 class="game-mensagem">Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor= "#FEFBE9";
        }else{
            elementoChute.innerHTML += '<div>Valor inváldo !</div>'
        return
        }
        
    }

    if (numeroForMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} !</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML= `
            <h2>Você acertou!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento=> {
    if (evento.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})