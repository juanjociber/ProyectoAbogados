/**=======================================================
 *                     LOADER
 =========================================================*/
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden')
}

/**=======================================================
 *                  MENÚ-RESPONSIVE
 =========================================================*/
// document.addEventListener('DOMContentLoaded',function(){
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
// })
/**=======================================================
 *          MENÚ HORIZONTAL CON INDICADOR DE SCROLL
 =========================================================*/

/**=======================================================
 *                 REDES SOCIALES
 =========================================================*/
// document.addEventListener('DOMContentLoaded',function(){
    let red = document.getElementsByClassName("social");
    for(let i = 0 ; i < red.length ; i++){
        red[i].onmouseover=function(){
            this.style="background: white; color: #3C415E; transition:.7s;font-weight: bold; border-radius: 50%"
        }
        red[i].onmouseout=function(){
            this.style="transition: ease out .5s";
        }
    }
// });
/**=======================================================
 *                     SLIDER
 =========================================================*/
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
});

/**=======================================================
 *                      CREANDO ELEMENTO FIGURE
 =========================================================*/
// document.addEventListener('DOMContentLoaded',function(){
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
    //VARIABLES HIJOS: 
    const $article = document.createElement("article")
    const $figure = document.createElement("figure")
    const $img = document.createElement("img")
    const $p = document.createElement("p")
    const $figcaption = document.createElement("figcaption")
    const $figcaptionText = document.createTextNode(e[1].nombre)
    //VARIABLE PADRE:
    const $cards = document.querySelector(".cards")
    /*====== GUARDANDO DATA EN VARIABLES:=====*/
    //ELEMENTO 'ARTICLE'
    $article.classList.add('article');
    $article.appendChild($figure);
    //ELEMENTO 'FIGURE'
    $figure.appendChild($img);
        //ELEMENTO 'IMG'
        $img.setAttribute("data-src",e[1].imagen);
        $img.setAttribute("Alt","Imagen");
        $img.classList.add("imagenes");
    $figure.appendChild($p);
        //ELEMENTO 'P'
        $p.textContent=e[1].comentario;
        $p.classList.add("figure__texto");
    $figure.appendChild($figcaption)
        //ELEMENTO 'FIGCAPTION'
        $figcaption.classList.add("figcaption__titulo");
        $figcaption.classList.add("figcaption__titulo-btn");
    //AGREGANDO AL DOM: 
    $figcaption.appendChild($figcaptionText);
    $fragment.appendChild($article);
    $cards.appendChild($fragment);
    });
// }); 


/**===================================================================
 *  API:'Intersection Observer'CARGA IMG CUANDO ES VISIBLE POR SCROLL
 =====================================================================*/
// document.addEventListener('DOMContentLoaded',function(){
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
// });

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
    observer.observe(document.querySelector('.splide'));
};
// function scrollNav() {
    
// }

/**=======================================================
 *           EVENTO TITULO - DESCRIPCIÓN SLIDER
 =========================================================*/
document.addEventListener('DOMContentLoaded',function(){
    navegacionSlider1();
})
function navegacionSlider1(){
    const slide = document.querySelector('.slider-item');
    const observando1 = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            slide.classList.add('animate__animated','animate__backInDown');
        }
        else{
            slide.classList.remove('animate__animated','animate__backInDown');
        }
    });
    observando1.observe(document.querySelector('.splide'));
};

document.addEventListener('DOMContentLoaded',function(){
    navegacionSlider2();
})
function navegacionSlider2(){
    const slide1 = document.querySelector('.slider-item--mod')
    const observando2 = new IntersectionObserver(function(e){
        if(e[0].isIntersecting){
            slide1.classList.add('animate__animated','animate__fadeInLeft');
        }
        else{
            slide1.classList.add('animate__animated','animate__fadeInLeft');
        }
    });
    observando2.observe(document.querySelector('.splide'));
};


/**=======================================================
 *                   ACORDEÓN MENU
 =========================================================*/
// document.addEventListener('DOMContentLoaded',function(){
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
// });
/**=======================================================
 *                   ACORDEÓN 'NOSOTROS'
 =========================================================*/
// document.addEventListener('DOMContentLoaded',function(){
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
// });

 /**=======================================================
 *      EVENTO 'MOUSEOVER' EN ELEMENT 'NOSOTROS-IMG'
 =========================================================*/
// document.addEventListener('DOMContentLoaded',function(){
    let imgNosotros = document.querySelector('.nosotros-imagen1__img');
        imgNosotros.addEventListener('mouseover',function(){
        imgNosotros.src = '../img/l&h_consultores_asesores_nosotros2.jpg';
    });
        imgNosotros.addEventListener('mouseout',function(){
        imgNosotros.src = '../img/l&h_consultores_asesores_nosotros.jpg';
    });
// }); 

/**=======================================================
 *                 FORMULARIO GENERAL
 =========================================================*/



/**=======================================================
 *     TEXTO PARALLAX (ESCRIBE CARACTER POR CARACTER)
 =========================================================*/
//  document.addEventListener('DOMContentLoaded',function(){
    let escritura = str =>{
    let arrayStr = str.split('');
    let i = 0;
    let printStr = setInterval(function () {
        let texto = document.getElementById('idparallax-texto');
            if(arrayStr[i] === ''){
                texto.innerHTML += arrayStr[i];
                texto.innerHTML += arrayStr[i + 1];
                i +=2;                        
            }else{
                texto.innerHTML += arrayStr[i];
                i++
            }
            if(i=== arrayStr.length){
                clearInterval(printStr);
            }
        },200);
    }
escritura('Estamos disponibles para dar la asesoría a sus requerimientos.');
// });

let escritura2 = cadena =>{
    let arrayCadena = cadena.split('');
    let z = 0;
    let printCadena = setInterval(function () {
        let texto2 = document.getElementById('idparallax-texto--mod')
            if(arrayCadena[z] === ''){
                texto2.innerHTML += arrayCadena[z];
                texto2.innerHTML += arrayCadena[z + 1];
                z +=2;                        
            }else{
                texto2.innerHTML += arrayCadena[z];
                z++
            }
            if(z=== arrayCadena.length){
                clearInterval(printCadena);
            }
        },200);
    }
escritura2('El Derecho es un asunto complicado. Puede causarle un gran problema si lo ignora. ¡Déjanos ayudarte!');
// });

  