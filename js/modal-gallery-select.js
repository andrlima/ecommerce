
//Pegandos os elementos no HTML
const imgsContainer      = document.querySelector('.gallery_img-container');
const imgModalGallery    = document.querySelector('.modal-gallery');
const btn_closeModal     = document.querySelector('.modal-gallery-img_close');

// Evento para crescer a imagem
imgsContainer.addEventListener('click', () => {
    imgModalGallery.style.display = `grid`;
});

// Evento para fechar a tela crescida 
btn_closeModal.addEventListener('click', () => {
    imgModalGallery.style.display = `none`;

});

// Passar imagens

/******************************************************************************** */
/*                              Desenvolvendo solução                             */
/******************************************************************************** */


/******************************************************************************** */



/*
// Passar imagens

// Selecionando as imagens pequenas, os thumbnails
let thumbnails = document.querySelectorAll('.gallery_thumbnail');

thumbnails = [...thumbnails];

// Pegando o ID da imagem
thumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event => {
        console.log(event.target.id);
        imgsContainer.style.backgroundImage = `url(../img/image-product-${event.target.id}.jpg)`;
    });

});


let modalThumbnails     = document.querySelectorAll('.modal-gallery_thumbnail');
const modalImgContainer = document.querySelector('.modal-gallery_img-container'); 

modalThumbnails = [...modalThumbnails]

// Pegando o ID da imagem
modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event => {
        console.log(event.target.id.slice(-1)); // Dira a primeira letra da string m1 -> 1
        modalImgContainer.style.backgroundImage = `url(../img/image-product-${event.target.id.slice(-1)}.jpg)`;
    });

});

// Mudando as imagens no desktop através do thumbnails
const btn_previousModalGallery  = document.querySelector('.modal-gallery_btn_previous');
const btn_nextModalGallery      = document.querySelector('.modal-gallery_btn_next');



// Evento de mudar a imagem do produto
btn_nextModalGallery .addEventListener('click', () => {
    changeNextImg(modalImgContainer);
}); 

btn_previousModalGallery .addEventListener('click', () => {
    changePreviousImg(modalImgContainer);
}); 
*/