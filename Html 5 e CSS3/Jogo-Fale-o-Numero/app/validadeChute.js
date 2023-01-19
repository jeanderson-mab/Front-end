
function verificarValidadeChute(chute){
    const numero =+ chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if(numeroForaIntervalo(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: valor informado fora do intervalor de ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = 
        `<h2>Parabéns! Você acertou.</h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O valor secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i> </div>`
    }else{
        elementoChute.innerHTML += `<div>O valor secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i> </div>`
    }
}


function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaIntervalo(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id=='jogar-novamente'){
        window.location.reload()
    }
})