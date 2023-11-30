let bt_temaEscuro = document.getElementById("escuro");
let bt_desativarEscuro = document.getElementById("desativarEscuro");

let ativarTemaEscuro = () => {
    document.body.style.backgroundColor = "darkgray";
    document.body.querySelector('header').style.backgroundColor = 'black';
    localStorage.setItem('temaEscuro', 'ativado');
}

let desativarTemaEscuro = () => {
    document.body.style.backgroundColor = ""; // Cor padrão do corpo
    document.body.querySelector('header').style.backgroundColor = ''; // Cor padrão do cabeçalho
    localStorage.setItem('temaEscuro', 'desativado');
}

const temaEscuroAtivado = localStorage.getItem('temaEscuro') === 'ativado';

if (temaEscuroAtivado) {
    ativarTemaEscuro();
}

bt_temaEscuro.addEventListener("click", function () {
    if (!temaEscuroAtivado) {
        ativarTemaEscuro();
    } else {
        desativarTemaEscuro();
    }
});

// Adicionar evento de clique ao botão de desativar tema escuro
bt_desativarEscuro.addEventListener("click", desativarTemaEscuro);
