console.log(receitaList)

const criarElem = (tipo, classe, prop, conteudo,/* elemPai*/) =>{
    const obj = document.createElement(tipo)
    obj.classList.add(classe)
    obj[prop] = conteudo
    /*elemPai.appendChild(obj)*/
    return obj
}

// tentar mudar as criações de elementos descomentando essas partes da função

receitaList.forEach(receita => {
    //criar a div.receita
    const receitaDiv = document.createElement("div")
    receitaDiv.classList.add("receita")
    
    //criar o título da receita
    const tituloReceitaH3 = criarElem("h3", "receita_titulo", "textContent", receita.nome )
    /*const tituloReceitaH3 = document.createElement("h3")
    tituloReceitaH3.classList.add("receita__titulo")
    tituloReceitaH3.textContent = receita.nome*/

    //adicionar no div receitas





    receitaDiv.appendChild(tituloReceitaH3)

    const subtituloReceita = document.createElement("p")
    subtituloReceita.classList.add("receita__descricao")
    subtituloReceita.textContent = receita.descricao

    const receitasContainer = document.querySelector(".receitas")
    receitasContainer.appendChild(receitaDiv)
    receitaDiv.appendChild(subtituloReceita)

    //criar imagem da receita
    const imagemReceita = criarElem("img", "receita__figura", "src", receita.foto)
    /*const imagemReceita = document.createElement("img")
    imagemReceita.classList.add("receita__figura")
    imagemReceita.src = receita.foto*/
    receitaDiv.appendChild(imagemReceita)







    /*const tituloIngredientes = criarElem("h4" , "receita_ingredientes", "textContent", receita.)
    receitaDiv.appendChild(tituloIngredientes)*/

    // criar uma ul, criar um foreach para cada elemento da lista de ingredientes ser uma li da ul e 
    /*const listaIngredientes = criarElem("ul", "receita__ingredientes-lista", "textContent", receita.ingred)
    receitaDiv.appendChild(listaIngredientes)*/

   /* const tituloPreparo = criarElem("h4", "receita__preparo-titulo", "textContent", receita.)
    receitaDiv.appendChild(tituloPreparo)

    const listaPreparo = criarElem("ol", "receita__preparo-lista", "textContent", receita.)*/



})