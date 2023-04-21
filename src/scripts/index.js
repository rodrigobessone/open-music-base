import { products } from "./productsData.js";
import { renderItems } from "./render.js";
import { filterButtons, filterRange } from "./filter.js";
import { changeTheme } from "./theme.js";


// Este código atualiza dinamicamente um span na página com base no valor de um input range, adicionando 
// um valor em reais. Ele usa um ouvinte de eventos para escutar o evento de entrada do input e atualizar 
// o conteúdo do span.
const rangeInput = document.querySelector('.div__filter-input');
const filterSpan = document.querySelector('.div__filter-span');

rangeInput.addEventListener('input', () => {
  filterSpan.textContent = `Até R$ ${rangeInput.value}`;
});

renderItems(products);
filterButtons();
filterRange(products);
changeTheme();

// Essa função verifica se o modo escuro está habilitado em uma página da web. Ela começa definindo 
// uma variável "verifyStorage" como falsa e obtendo o valor armazenado no localStorage com a chave 
// 'dark'. Se o valor for igual a 'true', a variável "verifyStorage" se torna verdadeira e a função 
// adiciona a classe "dark-mode" ao corpo do documento HTML e muda o ícone do botão para um ícone 
// de sol. Se o valor for falso, a função não faz nada.
function checkDarkMode() {
    let verifyStorage = false
    const isDarkMode = localStorage.getItem('dark')
    if (isDarkMode === 'true') {
        verifyStorage = true
        if (verifyStorage) {
            const bodySelector = document.querySelector("body")
            bodySelector.classList.add("dark-mode")
            const buttonTheme = document.querySelector(".header__button")
            buttonTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`
        }

    } 
}

checkDarkMode()