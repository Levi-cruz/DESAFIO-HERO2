/*Instruções para entrega

Calculadora de partidas Rankeadas
    

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:
    Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
    Se vitórias for entre 11 e 20 = Bronze
        Se vitórias for entre 21 e 50 = Prata
            Se vitórias for entre 51 e 80 = Ouro
                Se vitórias for entre 81 e 90 = Diamante
                    Se vitórias for entre 91 e 100= Lendário
                        Se vitórias for maior ou igual a 101 = Imortal

## Saída
Ao final deve se exibir uma mensagem:

"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}** */

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
 }


function calcWinLoss(win, loss){
    let playWins = win - loss
    return playWins
}


function checkRankingPoints(playWins){
    let levelRank = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
    let rank

    if (playWins <= 10){
        rank = levelRank[0]
    }
    else if(playWins >= 11 && playWins <= 20){
        rank = levelRank[1]
    }
    else if(playWins >= 21 && playWins <= 50){
        rank = levelRank[2]
    }
    else if(playWins >= 51 && playWins <= 80){
        rank = levelRank[3]
    }
    else if(playWins >= 81 && playWins <= 90){
        rank = levelRank[4]
    }
    else if(playWins >= 91 && playWins <= 100){
        rank = levelRank[5]
    }
    else if(playWins >= 101){
        rank = levelRank[6]
    }
    return rank
}

let name = "levi cruz cordeiro"; // Substitua por uma entrada de nome real
let win = 80; // Substitua por uma entrada de vitória real
let loss = 20; // Substitua por uma entrada de perda real

let firstName = getFirstName(name);
let playWins = calcWinLoss(win, loss);
let rank = checkRankingPoints(playWins);

console.log("Olá " + firstName + ", você tem um saldo de " + playWins + " vitórias e está no nível " + rank);

