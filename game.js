const escolhaC = [ 'pedra', 'papel', 'tesoura'];

function play() {
    const valorAleatorio = escolhaC[Math.floor(Math.random() * escolhaC.length)];
    const player = document.getElementById('player').value;
    const resultado = document.getElementById('resultado');
    const info = document.getElementById('info');


    if (player === valorAleatorio) {
        resultado.innerText = 'Empate';
    } else if (player.toUpperCase() ==='PEDRA' && valorAleatorio === 'TESOURA') {
        resultado.innerText = 'Você ganhou';
    } else if (player.toUpperCase() === 'PAPEL' && valorAleatorio === 'PEDRA') {
        resultado.innerText = 'Você ganhou';
    } else if (player.toUpperCase() === 'TESOURA' && valorAleatorio === 'PAPEL') {
        resultado.innerText = 'Você ganhou';
    } else {
        resultado.innerText = 'Você perdeu';
    }

    info.innerText = 'player: ' + player + ' computador: ' + valorAleatorio;
}

 


    
