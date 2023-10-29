const showItems = document.getElementById('show-items');
const mapItems = document.getElementById('map-items');
const sumItems = document.getElementById('total-sum-items');
const filterItems = document.getElementById('filter-items');

const boxCard = document.querySelector('.box-card-container');

function showAll(snacksArray) {
    let snackData = ''

    snacksArray.forEach((snack) => {
        snackData += `
            <div class="box-card">
                <div class="imagem-card-container">
                <img class="img-card" src="${snack.src}">
                </div>
                <div class="info-card">
                    <h3 class="title-card">${snack.name}</h3>
                    <p class="info-lanche-card">${snack.description}</p>
                <span class="tipo-lanche-card">${snack.type}</span>
                </div>            
                <div class="preco-card-container">
                    <span>${formatCurrency(snack.price)}</span>
                    <img class="carrinho-card" src="./img/carrinho.png" alt="Carrinho Compras">
                </div>
            </div>                             
        `
    });
    
    boxCard.innerHTML = snackData;
    
};

function mapAllItems() {
    const newPrices = menuSnacks.map((snack) => ({
        ...snack,
        price: snack.price * 0.9
    }));

    showAll(newPrices)

}

function sumAllitems() {
    const totalValue = menuSnacks.reduce((acc, curr) => acc + curr.price, 0);
    
    boxCard.innerHTML = 
    `
        <div class="box-card">
            
            <div class="info-card">
                <h3 class="title-card">O valor total dos lanches é ${formatCurrency(totalValue)}</h3>                               
            </div>           
        </div>
    `
}

function filterVeganItems() {
    const veganItems = menuSnacks.filter((snack) => snack.vegan)

    showAll(veganItems)
}

function formatCurrency(value) {
    const formatValue = value.toLocaleString('pt-br',{
        style: 'currency', 
        currency: 'BRL'
    });

    return formatValue
}

showItems.addEventListener('click', () => showAll(menuSnacks));
mapItems.addEventListener('click', mapAllItems);
sumItems.addEventListener('click', sumAllitems);
filterItems.addEventListener('click', filterVeganItems)