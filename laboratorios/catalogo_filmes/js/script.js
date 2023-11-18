function fazerRequisicaoAjax(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Chama a função de callback passando os dados obtidos
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  // Função de callback para manipular os dados recebidos
  function manipularDados(filmes) {
    var listaFilmes = document.getElementById("filmes-lista");
    
    // Itera sobre os filmes e adiciona-os à lista
    filmes.forEach(function(filme) {
      var itemLista = document.createElement("li");
      itemLista.textContent = filme.titulo;
      listaFilmes.appendChild(itemLista);
    });
  }

  // Faz a requisição para o arquivo JSON e passa a função de callback
  fazerRequisicaoAjax("https://rafaelescalfoni.github.io/desenv_web/filmes.json", manipularDados);