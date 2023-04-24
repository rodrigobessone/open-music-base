// Essa função define um listener de evento de clique em um botão que muda o tema do site de claro 
// para escuro e vice-versa. O botão é selecionado pelo seletor de classe ".header__button" e o corpo 
// do site é selecionado pelo seletor "body". Quando o botão é clicado, a classe "dark-mode" é adicionada 
// ou removida do corpo, dependendo do tema atual, e o ícone do botão é atualizado para refletir o 
// novo tema. Além disso, o valor do tema é armazenado no localStorage do navegador.
export function changeTheme() {
    const buttonTheme = document.querySelector(".header__button")
    const bodySelector = document.querySelector("body")

    buttonTheme.addEventListener("click", () => {
        bodySelector.classList.toggle("dark-mode")
        const isDark = bodySelector.classList.contains("dark-mode")

        if (isDark) {
            buttonTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`
        } else {
            buttonTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`
        }
    localStorage.setItem("dark", isDark)
    })
}




