let imagemFundo = document.querySelector(".imagem__principal");

window.addEventListener("resize",() => {
    changeImage();
} )

function changeImage(){
    if (window.innerWidth <= 414)
    {
    imagemFundo.src = '../imgs/image05.jpg';
    }else{

        imagemFundo.src = '../imgs/image04.jpg';
        
    }
}