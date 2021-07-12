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
        this.style="background: white; color: #3C415E; transition:.7s;font-weight: bold; border-radius: 50%"
    }
    red[i].onmouseout=function(){
        this.style="transition: ease out .5s";
    }
}
/**=======================================================
 *                     SLIDER
 =========================================================*/
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
} );




/**=======================================================
 *                      CREANDO ELEMENTO FIGURE
 =========================================================*/
const especialidad = 
[{
    imagen: './img/portfolio-1.jpg',
    comentario:'Especialistas en Derecho Penal',
    nombre: 'Derecho Penal', 
},
{
    imagen: './img/portfolio-2.jpg',
    comentario:'Especialistas en Contratos Civiles',
    nombre: 'Contratos Civiles', 
},
{
    imagen: './img/portfolio-3.jpg',
    comentario:'Especialistas en Recursos Humanos',
    nombre: 'Recursos Humanos', 
},
{
    imagen: './img/portfolio-4.jpg',
    comentario:'Asesores en Contrataciones con el Estado',
    nombre: 'Contratos con el Estado', 
},
{
    imagen: './img/portfolio-5.jpg',
    comentario:'Especialistas en Procedimiento Administrativo Sancionador y Procedimiento Administrativo Disciplinario',
    nombre: 'Procedimiento Administrativo', 
}
];
let especialidadArray = Object.entries(especialidad);
const $fragment = document.createDocumentFragment();

especialidadArray.forEach(function(e){
    //console.log(e[1])
    //VARIABLES HIJOS: 
    const $article = document.createElement("article"),
    $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $p = document.createElement("p"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode(e[1].nombre),
    //VARIABLE PADRE:
    $cards = document.querySelector(".cards")
    //****** GUARDANDO DATA EN VARIABLES:******
    //ELEMENTO 'ARTICLE'
    $article.classList.add('article');
    $article.appendChild($figure);
    //ELEMENTO 'FIGURE'
    $figure.appendChild($img);
    $figure.appendChild($p);
    $figure.appendChild($figcaption)
    //ELEMENTO 'IMG'
    $img.setAttribute("data-src",e[1].imagen);
    $img.setAttribute("Alt","Imagen");
    $img.classList.add("imagenes");
    //ELEMENTO 'P'
    $p.textContent=e[1].comentario;
    $p.classList.add("figure__texto");
    //ELEMENTO 'FIGCAPTION'
    $figcaption.classList.add("figcaption__titulo");
    $figcaption.classList.add("figcaption__titulo-btn");
    
    $figcaption.appendChild($figcaptionText);

    $fragment.appendChild($article);    
    //ELEMENTO 'DIV'
    $cards.appendChild($fragment);
});


/**===================================================================
 *  API:'Intersection Observer'CARGA IMG CUANDO ES VISIBLE POR SCROLL
 =====================================================================*/
const img = document.querySelectorAll('img'); 

function intersection(entries,observer){
    entries.forEach(entry =>{
        // console.log('intersection',entry.target);
        if(entry.isIntersecting){
            if(entry.target.classList.contains('imagenes')){
               entry.target.src = entry.target.dataset.src; 
            }
            observer.unobserve(entry.target);
        }
    });
}
const options ={
    root: null,
    rootMargin: '0px',
    threshold: 0
};
const observer = new IntersectionObserver(intersection,options);

img.forEach(i =>{
    observer.observe(i);
})

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
 //Función para que solo se muestre una selección y las demás se oculten 
 function removeClass(){
     for(let i = 0 ; i < btnAcordeon.length; i++){
         btnAcordeon[i].classList.remove("activo");
     }
 }

 /**=======================================================
 *      EVENTO 'MOUSEOVER' EN ELEMENT 'NOSOTROS-IMG'
 =========================================================*/
let imgNosotros = document.querySelector('.nosotros__imagen');

imgNosotros.addEventListener('mouseover',function(){
    imgNosotros.src = '../img/l&h_consultores_asesores_nosotros2.jpg';
});
imgNosotros.addEventListener('mouseout',function(){
    imgNosotros.src = '../img/l&h_consultores_asesores_nosotros.jpg';
});
