const btnAdicionar = document.getElementById("btn-adicionar");
const ajudaTotal = document.getElementById("ajuda-total");
const ajudaMedia = document.getElementById("ajuda-media");
const txtPessoa = document.getElementById("txtpessoa");
const txtValor = document.getElementById("txtvalor");
const lista = document.querySelector(".list");

console.log(txtPessoa);

const AJUDAS = [];


function atualizarTotal(AJUDAS) {
    ajudaTotal.innerHTML = "";
    var total = 0;
    for (let index = 0; index < AJUDAS.length; index++) {
        total = total + 1;

    }
    ajudaTotal.innerHTML =
        `${total}`
    return total;
    ;
}

function atualizarMedia(AJUDAS) {
    ajudaMedia.innerHTML = "";
    var media = 0;
    var total2 = atualizarTotal(AJUDAS);
    media = total2 / AJUDAS.length;

    ajudaMedia.innerHTML =
        `⭐ ${media}`
}

function removerAjuda(id) {
    AJUDAS.splice(id, 1);
    listarAjudas();
    atualizarTotal(AJUDAS);
    atualizarMedia(AJUDAS);
}

function listarAjudas() {
    lista.innerHTML = "";
    AJUDAS.forEach((ajuda, index) => {
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
                </div>`
    });
}

btnAdicionar.addEventListener("click", () => {
    const ajuda = {
        nome: txtPessoa.value,
        valor: txtValor.value
    }
    console.log(ajuda.valor);
    AJUDAS.push(ajuda);
    listarAjudas();
    atualizarTotal(AJUDAS);
    atualizarMedia(AJUDAS);
});


listarAjudas();
