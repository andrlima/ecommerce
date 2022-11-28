
// Configurações para o botão de mais e menos
const minusBtn        = document.querySelector('.input_minus');
let userInputValue    = document.querySelector('.input_number');
const plusBtn         = document.querySelector('.input_plus');

let inputValue = 0;

plusBtn.addEventListener('click', ()=> {
    inputValue++;
    userInputValue.value = inputValue;

});

minusBtn.addEventListener('click', () => {
    inputValue--;

    if(inputValue <= 0){
        inputValue = 0;
    }

    userInputValue.value = inputValue;

});

// Configurações para o botão de adicionar no carrinho
const btn_AddToCart     = document.querySelector('.details_button');
let   cartNotification  = document.querySelector('.header_cart-notification');
let   lastValue         = parseInt(cartNotification.innerText);

// Evento para aparecer a quantidade no carrinho
btn_AddToCart.addEventListener('click', () => {
    lastValue = lastValue + inputValue;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';

    drawProductInModal();

    // Atualizando o valor do carrinho
    modalCartPrice.innerHTML = `$10 x ${lastValue} = <span> $ ${lastValue * 10}.00 </span>`

});

// Event para a parecer a telinha do carrinho
const btn_cartIcon     = document.querySelector('.header_cart');
const cartModal        = document.querySelector('.modal-cart');
const productContainer = document.querySelector('.modal-cart_chekout-container');

btn_cartIcon.addEventListener('click', () => {
    cartModal.classList.toggle('show');

    if(lastValue == 0){
        productContainer.innerHTML = '<p class = "cart-empty"> Your cart is empty!';
    }
    else{
        drawProductInModal();
    }


});



//******************************************************************************** */
//                                  FUNÇÕES                                        */
//******************************************************************************** */

// Apagando os itens dentro do carrinho
function deleteProduct(){
    const btn_deleteProduct = document.querySelector('.modal-cart_delete');

    btn_deleteProduct.addEventListener('click', () => {
        productContainer.innerHTML = '<p class = "cart-empty"> Your cart is empty!';
        lastValue = 0;
        cartNotification.innerHTML = lastValue;
    
    });

}


// Zera os itens no carrinho
function drawProductInModal(){
    productContainer.innerHTML = `
        <div class = "modal-cart_details-container">

            <img src = "img/image-product-1-thumbnail.jpg" class = "modal-cart_image">

            <div>
                <p class = "modal-cart_product"> Nome do produto </p>
                <p class = "modal-cart_price"> $00 x 0 = <span> $0.0 </span> </p>
            </div>

            <img src = "img/icon-delete.svg" class = "modal-cart_delete" alt = "delete">

        </div>

        <button class = "model-cart_btn_chekout details_button"> Comprar 1 </button>
    `;

    deleteProduct();

    let modalCartPrice     = document.querySelector('.modal-cart_price');

    // Atualizando o valor do carrinho
    modalCartPrice.innerHTML = `$10 x ${lastValue} = <span> $ ${lastValue * 10}.00 </span>`

}