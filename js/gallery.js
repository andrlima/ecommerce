
/******************************************************************************** */
/*                 Função para mudar de imagem                                    */
/******************************************************************************** */

// Pegando o elementos do HTML que irá transitar
let gallery_img = document.querySelector('.gallery_img');
let modal_gallery_img = document.querySelector('.modal_gallery_img');

// Pegando todos os elementos que contém a classe gallery_thumbnail
let smallImg = document.querySelectorAll('.gallery_thumbnail');
let modal_smallImg = document.querySelectorAll('.modal-gallery_thumbnail');


// Função para mudar de imagem
smallImg.forEach(function(element){
    element.addEventListener('click', function(){
        //alert(element.src);
        gallery_img.src = element.src;
    });

});

// Função para mudar de imagem ampliada
modal_smallImg.forEach(function(element){
    element.addEventListener('click', function(){
        modal_gallery_img.src = element.src;
    });

});

/******************************************************************************** */

/******************************************************************************** */
/*                 Método e funções do ampliar a imagem                           */
/******************************************************************************** */

//Pegandos os elementos no HTML
const imgsContainer      = document.querySelector('.gallery_img-container');
const imgModalGallery    = document.querySelector('.modal-gallery');
const btn_closeModal     = document.querySelector('.modal-gallery-img_close');

const btn_previous       = document.querySelector('.gallery_btn_previous');
const btn_next           = document.querySelector('.gallery_btn_next');

const btn_previous_Modal = document.querySelector('.modal-gallery_btn_previous');
const btn_next_Modal     = document.querySelector('.modal-gallery_btn_next');

let imgIndex             = 3;
let proximo              = "../img/image-product-1-thumbnail.jpg";

var teste = document.querySelector('.modal_gallery_img');

function changeNextImage(img){
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }

    img.src = `url('../images/image-product-${imgIndex}.jpg')`;
}

function changePreviusImage(imgContainer){
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}

// Evento para ampliar a imagem
imgsContainer.addEventListener('click', () => {
    imgModalGallery.style.display = `grid`;
});

// Evento para fechar a tela ampliada 
btn_closeModal.addEventListener('click', () => {
    imgModalGallery.style.display = `none`;

});

// Evento para os botões no mobile
btn_next.addEventListener('click', () => {
    alert("proximo");

});

btn_previous.addEventListener('click', ()=>{
    alert("anterior");
});

// Evento para os botões no desktop
btn_previous_Modal.addEventListener('click', () => {
    alert("anterior");

});

btn_next_Modal.addEventListener('click', ()=>{
    //alert("proximo");
    teste.setAttribute('src', 'url(../images/image-product-2.jpg' );

});


// Pegando o ID da imagem
thumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event => {
        console.log(event.target.id);
        imgsContainer.style.backgroundImage = `url(../img/image-product-${event.target.id}.jpg)`;
    });

});



var num = 2;
var img = document.getElementById("teste");
function trocaImg(){
//apenas para cunho de testes
setTimeout(function () {
  if (num == 1){
      img.src = "http://db13.in/wp-content/uploads/2016/07/2000px-Dialog-error-round.svg_.png";
    }
  else if (num == 2){
      img.src = "https://t3.ftcdn.net/jpg/01/45/20/02/160_F_145200260_Mlts2v0PtYabB4v5dz1I8hKNCfieJidW.jpg";
    }
    //garante que num fique alternando entre 1 e 2
    num = (num % 2) + 1;
    }, 1000);
}


