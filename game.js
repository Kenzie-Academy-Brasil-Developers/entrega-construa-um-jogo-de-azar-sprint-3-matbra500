const escolhaMinha = document.getElementById('minhaEscolha')

const escolhaPc = document.getElementById('escolhaPc')

const resultado = document.getElementById('resultado')

const buttons = document.querySelectorAll('button');



for (let i = 0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
    escolhaMinha.innerText = buttons[i].innerText
    geradorEscolhaPc()
    resultadoPartida()
    })}


function geradorEscolhaPc(){
    let numero = Math.floor(Math.random() * buttons.length + 1)
    if (numero === 1){
        escolhaPc.innerText = 'Pedra'
    }
    if (numero === 2){
        escolhaPc.innerText = 'Papel'
    }
    if (numero === 3){
        escolhaPc.innerText = 'Tesoura'
    }
}

function resultadoPartida(){
    if(escolhaMinha.innerText === escolhaPc.innerText){
        resultado.innerText = 'Paridade'
    }
    if(escolhaMinha.innerText === 'Pedra' && escolhaPc.innerText === 'Tesoura'){
        resultado.innerText = 'Você Ganhou!'
    }
    if(escolhaMinha.innerText === 'Papel' && escolhaPc.innerText === 'Pedra'){
        resultado.innerText = 'Você Ganhou!'
    }
    if(escolhaMinha.innerText === 'Tesoura' && escolhaPc.innerText === 'Papel'){
        resultado.innerText = 'Você Ganhou!'
    }
    if(escolhaMinha.innerText === 'Pedra' && escolhaPc.innerText === 'Papel'){
        resultado.innerText = 'Você Perdeu!'
    }
    if(escolhaMinha.innerText === 'Papel' && escolhaPc.innerText === 'Tesoura'){
        resultado.innerText = 'Você Perdeu!'
    }
    if(escolhaMinha.innerText === 'Tesoura' && escolhaPc.innerText === 'Pedra'){
        resultado.innerText = 'Você Perdeu!'
    }
}

