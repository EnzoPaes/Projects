// Seleção de elementos no DOM
const sideMenu = document.querySelector("aside");  // Seleciona o elemento <aside> na página
const headerBar = document.querySelector("header");  // Seleciona o elemento <header> na página

// Adiciona um evento de clique no documento para fechar o menu lateral se o clique estiver fora dele
document.addEventListener("click", (e) => {
    if (!e.path.includes(sideMenu)) {  // Verifica se o clique não está dentro do elemento do menu lateral
        sideMenu.classList.remove("active");  // Remove a classe "active" para ocultar o menu lateral
    }
});

// Adiciona um evento de rolagem para fixar o cabeçalho quando a rolagem da página ultrapassa 50 pixels
document.addEventListener("scroll", (e) => {
    if (window.scrollY > 50 && !headerBar.classList.contains("fixed")) {
        headerBar.classList.add("fixed");  // Adiciona a classe "fixed" ao cabeçalho para torná-lo fixo
    }
    if (window.scrollY < 50) {
        headerBar.classList.remove("fixed");  // Remove a classe "fixed" quando a rolagem está abaixo de 50 pixels
    }
});

// Função para alternar a visibilidade do menu lateral
function menuToggle() {
    sideMenu.classList.toggle("active");  // Adiciona ou remove a classe "active" para mostrar ou ocultar o menu lateral
}