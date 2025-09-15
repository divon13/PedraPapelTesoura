const escolhaC = [ 'pedra', 'papel', 'tesoura'];

function play() {
    const valorAleatorio = escolhaC[Math.floor(Math.random() * escolhaC.length)];
    const player = document.getElementById('player').value;
    const resultado = document.getElementById('resultado');
    const info = document.getElementById('info');


    if (player === valorAleatorio) {
        resultado.innerText = 'Empate';
    } else if (player === 'pedra' && valorAleatorio === 'tesoura') {
        resultado.innerText = 'Você ganhou';
    } else if (player === 'papel' && valorAleatorio === 'pedra') {
        resultado.innerText = 'Você ganhou';
    } else if (player === 'tesoura' && valorAleatorio === 'papel') {
        resultado.innerText = 'Você ganhou';
    } else {
        resultado.innerText = 'Você perdeu';
    }

    info.innerText = 'player: ' + player + ' computador: ' + valorAleatorio;
}

 


    
