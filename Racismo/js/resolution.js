// Seleção de elementos no DOM
const btnAdicionar = document.getElementById("btn-adicionar");
const ajudaTotal = document.getElementById("ajuda-total");
const ajudaMedia = document.getElementById("ajuda-media");
const txtPessoa = document.getElementById("txtpessoa");
const txtValor = document.getElementById("txtvalor");
const lista = document.querySelector(".list");

// Array para armazenar objetos de ajuda
const AJUDAS = [];

// Função para atualizar o total de ajudas
function atualizarTotal(AJUDAS) {
    ajudaTotal.innerHTML = ""; // Limpa o conteúdo HTML do elemento com id "ajuda-total"
    var total = 0;
    for (let index = 0; index < AJUDAS.length; index++) {
        total = total + 1;  // Conta o número total de ajudas
    }

    ajudaTotal.innerHTML = `${total}`;
    return total;
}

// Função para atualizar a média das ajudas
function atualizarMedia(AJUDAS) {
    ajudaMedia.innerHTML = "";
    if (AJUDAS.length === 0) {
        ajudaMedia.innerHTML = "0⭐";  // Se não houver ajudas, exibe 0 estrelas
        return;
    }

    var soma = 0;
    for (let index = 0; index < AJUDAS.length; index++) {
        soma += parseInt(AJUDAS[index].valor);  // Soma os valores das ajudas
    }

    var media = soma / AJUDAS.length;  // Calcula a média
    ajudaMedia.innerHTML = `${media.toFixed(2)}⭐`;  // Exibe a média com duas casas decimais
}

// Função para remover uma ajuda com base no índice
function removerAjuda(id) {
    AJUDAS.splice(id, 1);  // Remove a ajuda do array
    listarAjudas();  // Atualiza a lista de ajudas no DOM
    atualizarTotal(AJUDAS);  // Atualiza o total
    atualizarMedia(AJUDAS);  // Atualiza a média
}

// Função para exibir a lista de ajudas no DOM
function listarAjudas() {
    lista.innerHTML = "";
    AJUDAS.forEach((ajuda, index) => {
        // Adiciona elementos HTML para cada ajuda na lista
        lista.innerHTML += ` <div class="item">
                    <span class="name">
                    ${ajuda.nome}
                    </span>
                    <span class="value">
                    (${ajuda.valor}⭐)
                    </span>
                    <a href="javascript:removerAjuda(${index})">
                        <img src="img/trash.svg">
                    </a>
                </div>`;
    });
}

// Event listener para o botão de adicionar ajuda
btnAdicionar.addEventListener("click", () => {
    const ajuda = {
        nome: txtPessoa.value,
        valor: txtValor.value
    };
    AJUDAS.push(ajuda);  // Adiciona a nova ajuda ao array
    listarAjudas();  // Atualiza a lista de ajudas no DOM
    atualizarTotal(AJUDAS);  // Atualiza o total
    atualizarMedia(AJUDAS);  // Atualiza a média
});

// Inicializa a lista de ajudas no carregamento da página
listarAjudas();

// Funções para exibir um alerta indicando que o formulário foi enviado ou resetado
function formSend() {
    alert(`Formulário enviado!`);
}

function formReset() {
    alert(`Formulário resetado!`);
}

// DOM é a sigla para "Document Object Model" (Modelo de Objeto de Documento).
// Ele é uma representação em memória de documentos HTML, XML ou XHTML, que o
// navegador utiliza para estruturar a página web. O DOM representa a estrutura
// hierárquica do documento e permite que os scripts (como JavaScript) interajam
// com os elementos da página, alterando dinamicamente seu conteúdo, estrutura e estilo.