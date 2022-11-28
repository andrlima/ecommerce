
const linhasMenu        = document.querySelector('.header_menu');
const modalNavbar       = document.querySelector('.modal-navbar_background');
const closeModalNavbar  = document.querySelector('.modal-navbar_close-icon');

modalNavbar.style.display = 'none';

linhasMenu.addEventListener('click', () => {
    //console.log('abrir modal');
    modalNavbar.style.display = 'block';

});

closeModalNavbar.addEventListener('click', () => {
    //console.log('fechar modal');
    modalNavbar.style.display = 'none';
    
})