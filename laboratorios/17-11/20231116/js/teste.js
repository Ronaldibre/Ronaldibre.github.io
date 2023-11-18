const url = "https://raw.githubusercontent.com/rafaelescalfoni/rafaelescalfoni.github.io/main/desenv_web/receitas.json";

const criarElem = (elemPai, tipo, classe,  prop, conteudo ) => {
    const obj = document.createElement(tipo)
    obj.classList.add(classe)
    obj[prop] = conteudo
    elemPai.appendChild(obj) 
    return obj
}

const carregarReceitas = lista => {
    lista.forEach(receita => {
        const receitasContainer = document.querySelector(".receitas")
    
        // criar a div.receita
        const receitaDIV = criarElem(receitasContainer, "div", "receita")
    
        // criar o título da receita
        criarElem(receitaDIV, "h3", "receita__titulo", "textContent", receita.nome)
    
        //criar subtitulo da receita
        criarElem(receitaDIV, "p", "receita__descricao", "textContent", receita.descricao)
    
        //criar imagem da receita
        criarElem(receitaDIV, "img", "receita__figura", "src", receita.foto)
        
        //criar titulo de ingredientes
        criarElem(receitaDIV, "h4", "receita__ingredientes-titulo", "textContent", "Ingredientes")
        
        // criar lista de ingredientes
        const ulDaVez = criarElem(receitaDIV, "ul", "receita__ingredientes-lista")
    
        receita.ingredientes.forEach(item => {
            criarElem(ulDaVez, "li", "receita__item", "textContent", item)
        })
        //criar titulo de preparo
        criarElem(receitaDIV, "h4", "receita__preparo-titulo", "textContent", "Preparo")
    
        // criar lista de preparos
        const olDaVez = criarElem(receitaDIV, "ol", "receita__preparo-lista")
    
        receita.preparo.forEach(item => {
            criarElem(olDaVez, "li", "receita__item", "textContent", item)
        })
    
    
    })
}

/*
const fazerRequisicao = (url, funcaoCallback) => {
    const obj = new XMLHttpRequest();
    obj.open('GET', url);   
    obj.send();

    let resposta = ""
    obj.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            resposta = JSON.parse(this.responseText) 
            funcaoCallback(resposta)
        }
    }

    return resposta

}

forma usando fetch api 
const fazerRequisicaoViaFetch = url => {
    fetch(url)
        .then(resultado => resultado.json()) // a resposta da promise
        .then(resposta => { // o dado produzido pela requisição
            carregarReceitas(listaDeReceitas)
        })
}
*/

// usando fetch e declarando a função como assíncrona
const fazerRequisicaoViaFetch = async url => {
    const respostaDaPromessa = await fetch(url)
    const listaDeReceitas =  await respostaDaPromessa.json()
    
    carregarReceitas(listaDeReceitas)
}

fazerRequisicaoViaFetch(url)
//carregarReceitas(lista)

