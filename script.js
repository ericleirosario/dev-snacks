const showItems = document.getElementById('show-items');

const boxCard = document.querySelector('.box-card-container');
let snackData = ''



function showAll() {
    menuSnacks.forEach((snack) => {
        snackData += `
            <div class="box-card">
                <div class="imagem-card-container">
                <img class="img-card" src="${snack.src}" alt="Coxinha">
                </div>
                <div class="info-card">
                    <h3 class="title-card">${snack.name}</h3>
                    <p class="info-lanche-card">${snack.description}</p>
                <span class="tipo-lanche-card">Lanche</span>
                </div>            
                <div class="preco-card-container">
                    <span>R$ ${snack.price}</span>
                    <img class="carrinho-card" src="./img/carrinho.png" alt="Carrinho Compras">
                </div>
            </div>                             
        `
    });
    
    boxCard.innerHTML = snackData
    
    showItems.removeEventListener('click', showAll)
};

showItems.addEventListener('click', showAll);