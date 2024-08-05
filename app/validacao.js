function verifica(chute) {
    const numero = +chute

    if (chuteinvalido(numero)) {
        elementoChute.innerHTML += `<div> Valor Inválido </div>`
        console.log('valor invalido')
    }

    if (numeroMaiorouMenor(numero)) {
        elementoChute.innerHTML += `valor Inválido precisa entre ${menorValor} e ${maiorValor}`
        console.log(`valor Inválido precisa entre ${menorValor} e ${maiorValor}` )
    }

    if (numero == numeroSecreto) {
        document.body.innerHTML = `<h2>Você acertou </h2>
        <h3> O numero secreto era ${numeroSecreto} </h3>
        <button id='jogar-novamente' class="btn-jogar"> Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-arrow-down"> </i></div>`
    } else {
        elementoChute.innerHTML += `<div> O número secreto é maior <i class="fa-solid fa-arrow-up"> </i></div>`
    }
}

function chuteinvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorouMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
