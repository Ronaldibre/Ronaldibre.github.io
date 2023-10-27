const viewPort = document.body;
const corpoDoDocumento = viewPort;

//viewPort.innerHTML = "<h1>Alo mundo</h1>";
//corpoDoDocumento.innerHTML += "<h1>Adeus mundo</h1>";

document.body.style.backgroundColor = "rgb(255,255,0)";

const botao = document.querySelector("#executar");

botao.onclick = function (){
    const iptFrase = document.querySelector("#frase");

    const divResposta = document.querySelector(".resultado");

    let resposta = "O valor digitado é: " + iptFrase.value;

    frase = iptFrase.value;

    divResposta.innerHTML = resposta;
 
    let quantidadeVogais = 0;

    let fraseArray = frase.split('');

    let aux = "";

    for(let i = 0; i < fraseArray.lenght/2; i++){
        aux = fraseArray[i];
        fraseArray[i] = fraseArray[fraseArray.length - i - 1];
        fraseArray[fraseArray.length - i - 1] = aux;
    }

    frase = fraseArray.join('');

    divResposta.innerHTML = frase;

    
/*
    console.log(frase);
    for (let i = 0; i < frase.length; i++){
        if(frase[i].toLowerCase() == "a" || frase[i].toLowerCase() == "e" || frase[i].toLowerCase() == "i" || frase[i].toLowerCase() == "o" || frase[i].toLowerCase() == "u"){
            quantidadeVogais++;
        }
    }
*/
}


