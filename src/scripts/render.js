
// Essa função em é responsável por renderizar uma lista de produtos na página web. Ela recebe um 
// array de objetos que representam produtos. A função começa selecionando o elemento "ul" da página 
// que irá conter a lista de produtos. Em seguida, a função itera sobre cada objeto de produto no 
// array e cria um elemento "li" para representar cada produto. Dentro de cada "li", a função cria 
// uma imagem, informações sobre o produto (banda e ano), título, preço e um botão de compra. 
// A função usa métodos como "createElement" e "appendChild" para criar e anexar elementos HTML 
// dinamicamente. Finalmente, a função anexa todos os elementos "li" com informações de produtos 
// ao elemento "ul" selecionado no início da função, tornando a lista completa.
export function renderItems(products) {
  const ul = document.querySelector('.section__list-items');
  ul.innerHTML = '';

  products.forEach(product => {
    const li = document.createElement('li');
    li.classList.add('section__item');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('div__image');
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = product.img;
    imageDiv.appendChild(image);

    const infosDiv = document.createElement('div');
    infosDiv.classList.add('div__infos');

    const info = document.createElement('div');
    info.classList.add('div__info');
    const band = document.createElement('span');
    band.classList.add('span__info');
    band.textContent = product.band;
    const year = document.createElement('span');
    year.classList.add('span__info');
    year.textContent = product.year;
    info.appendChild(band);
    info.appendChild(year);
    infosDiv.appendChild(info);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('div__title-item');
    const title = document.createElement('h3');
    title.classList.add('div__item-h3', 'text-h2');
    title.textContent = product.title;
    titleDiv.appendChild(title);

    const buyDiv = document.createElement('div');
    buyDiv.classList.add('div__buy');
    const price = document.createElement('span');
    price.classList.add('span__price', 'text-button-2');
    price.textContent = `R$ ${product.price.toFixed(2)}`;
    const buyButton = document.createElement('button');
    buyButton.classList.add('button__buy', 'text-button');
    buyButton.textContent = 'Comprar';
    buyDiv.appendChild(price);
    buyDiv.appendChild(buyButton);

    infosDiv.appendChild(titleDiv);
    infosDiv.appendChild(buyDiv);

    li.appendChild(imageDiv);
    li.appendChild(infosDiv);

    ul.appendChild(li);
  });
}



