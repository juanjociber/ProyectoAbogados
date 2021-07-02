/**=======================================================
 *                  MENÚ-RESPONSIVE
 =========================================================*/
let menu = document.querySelector('.menu');
let navegacion = document.querySelector('.container-nav-responsive');
let contador = 1;

menu.addEventListener('click',function(){
    if(contador == 1){
        navegacion.classList.add('nav-activado')
        menu.classList.add('is-active');
        contador = 0;    
    }
    else{
        contador = 1;
        navegacion.classList.remove('nav-activado')
        menu.classList.remove('is-active');
    }
});

/**=======================================================
 *                 REDES SOCIALES
 =========================================================*/
let red = document.getElementsByClassName("social");
for(let i = 0 ; i < red.length ; i++){
    red[i].onmouseover=function(){
        this.style="background: white; color: #3C415E; transition:.7s;font-weight: bold"
    }
    red[i].onmouseout=function(){
        this.style="transition: ease out .5s";
    }
}
/**=======================================================
 *                 BANNER - SLIDER
 =========================================================*/
let item=["./img/banner_01.jpg","./img/banner_02.jpg"];
let i=0;
function banner(){
    $("#imgBanner").attr("src", item[i]);
        i++;
    if(i >= item.length)
        i=0;
    setTimeout(banner,5000);
}
banner();

/**=======================================================
 *                      FIGURE
 =========================================================*/
const enlaces ={
    titulo:'Derecho Penal',
    url:'',
}

let btnFigcaption = document.querySelectorAll('.figcaption__titulo-btn');
for(let i = 0 ; i < btnFigcaption.length; i++){
    btnFigcaption[i].addEventListener('click',function(e){
        console.log(e.target)
        window.location.href='nosotros.html';
    })
}


/**=======================================================
 *                      CREANDO ELEMENTO FIGURE
 =========================================================*/
//VARIABLES HIJOS: 
const $article = document.createElement("article"),
$figure = document.createElement("figure"),
$img = document.createElement("img"),
$p = document.createElement("p"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("prueba"),

//VARIABLE PADRE:
$cards = document.querySelector(".cards")

//GUARDANDO DATA EN VARIABLES:
//ELEMENTO 'IMG'
$img.setAttribute("src","./img/portfolio-1.jpg");
$img.setAttribute("Alt","Imagen");

//ELEMENTO 'FIGCAPTION'
$figcaption.classList.add("figcaption__titulo");
$figcaption.classList.add("figcaption__titulo-btn");
$figcaption.appendChild($figcaptionText);

//ELEMENTO 'P'
$p.textContent="Especialistas";
$p.classList.add("figure__texto");

//ELEMENTO 'ARTICLE'
$article.classList.add('article');
$article.appendChild($figure);

//ELEMENTO 'FIGURE'
$figure.appendChild($img);
$figure.appendChild($p);
$figure.appendChild($figcaption)

//ELEMENTO 'DIV'
$cards.appendChild($article);











/**=======================================================
 *                     NAVEGACIÓN FIJA 'nav'
 =========================================================*/
document.addEventListener('DOMContentLoaded', function() {
    // scrollNav();
    navegacionFija();
});
function navegacionFija() {
    const barra = document.querySelector('.container-header');
    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector('.banner'));
};
function scrollNav() {
     
}
/**=======================================================
 *                   ACORDEÓN MENU
 =========================================================*/
let btnItems = document.querySelectorAll(".item .btn-item");
let conteo = 1;
for(let i = 0 ; i < btnItems.length; i++ ){
    btnItems[i].addEventListener("click",function(e){
    let btn = e.target;
        if(conteo == 1){
            btn.classList.add('active')
            conteo = 0;
        }
        else{
            conteo = 1;
            btn.classList.remove("active");
        }
  })
}
/**=======================================================
 *                   ACORDEÓN 'NOSOTROS'
 =========================================================*/
 let btnAcordeon = document.querySelectorAll(".acordeon .btn-acordeon");
 for(let i = 0 ; i < btnAcordeon.length; i++ ){
     btnAcordeon[i].addEventListener("click",function(e){
     let btnA = e.target;
     if(btnA.className == "btn-acordeon activo"){
         removeClass()
     }
     else{
         removeClass();
         btnA.classList.add("activo");
     }
   })
 }
 //Funciones para que solo se muestre una selección y las demás se oculten 
 function removeClass(){
     for(let i = 0 ; i < btnAcordeon.length; i++){
         btnAcordeon[i].classList.remove("activo");
     }
 }

