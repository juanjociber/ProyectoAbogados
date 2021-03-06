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
 *                     MAPA
 =========================================================*/
// document.addEventListener('DOMContentLoaded',function(){
//     var map = L.map('mapa').setView([-11.990477, -77.082744], 15);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     L.marker([-11.990477, -77.082744]).addTo(map)
//         .bindPopup('Mi dirección.')
//         .openPopup()
//         .bindTooltip('Un Tooltip')
//         .openTooltip()
// });
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
    *                BOTON DESPLAZA ARRIBA
    =========================================================*/
    $(document).ready(function(){
       $('.ir-arriba').click(function(){
           $('body,html').animate({
               scrollTop: '0px'
           },300);
       })
       $(window).scroll(function(){
           if($(this).scrollTop() > 0 ){
               $('.ir-arriba').slideDown(300);
           }
           else{
               $('.ir-arriba').slideUp(500);
           }
       })
   });

/**=======================================================
 *                     SLIDER
 =========================================================*/
 document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
});

/**=======================================================
 *           EVENTO TITULO - DESCRIPCIÓN SLIDER
 =========================================================*/
 function navegacionSlider1(){
    const slide = document.querySelector('.slider-items h2');
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
navegacionSlider1();

function navegacionSlider2(){
    const slide1 = document.querySelector('.slider-items p')
    const observando2 = new IntersectionObserver(function(e){
        if(e[0].isIntersecting){
            slide1.classList.add('animate__animated','animate__fadeInLeft');
        }
        else{
            slide1.classList.remove('animate__animated','animate__fadeInLeft');
        }
    });
    observando2.observe(document.querySelector('.splide'));
};
navegacionSlider2();

/**=======================================================
 *     TEXTO PARALLAX (ESCRIBE CARACTER POR CARACTER)
 =========================================================*/
 function viewOne(){
    const comentario = document.querySelector('#idparallax-texto')
    let printCadena
    const observando= new IntersectionObserver(function(e){
        if(e[0].isIntersecting){
            console.log('Ingreso de evento');
            let escritura = str =>{
                let arrayStr = str.split('');
                let i = 0;
                printCadena = setInterval(function () {
                        if(arrayStr[i] === ''){
                            comentario.innerHTML += arrayStr[i];
                            comentario.innerHTML += arrayStr[i + 1];
                            i +=2;                        
                        }
                        else{
                            comentario.innerHTML += arrayStr[i];
                            i++
                        }
                        if(i=== arrayStr.length){
                            clearInterval(printCadena);
                        }
                    },100);
            }
            escritura('Estamos disponibles para dar la asesoría a sus requerimientos.');
        }
        else{
            console.log('Salida de evento')
            clearInterval(printCadena)
            comentario.innerHTML= ""
        }
    });
    observando.observe(document.querySelector('#parallaxOne'))
};
viewOne();
/**=======================================================
 *     TEXTO 'CONTÁCTENOS' (ESCRIBE CARACTER POR CARACTER)
 =========================================================*/
function viewContactenos(){
    const comentario = document.querySelector('#contactenos')
    let printCadena;
    const observando= new IntersectionObserver(function(e){
        if(e[0].isIntersecting){
            console.log('Ingreso de evento');
            let escritura = str =>{
                let arrayStr = str.split('');
                let i = 0;
                printCadena = setInterval(function () {
                        if(arrayStr[i] === ''){
                            comentario.innerHTML += arrayStr[i];
                            comentario.innerHTML += arrayStr[i + 1];
                            i +=2;                        
                        }
                        else{
                            comentario.innerHTML += arrayStr[i];
                            i++
                        }
                        if(i=== arrayStr.length){
                            clearInterval(printCadena);
                        }
                    },100);
            }
            escritura('Contáctenos..!!');
        }
        else{
            console.log('Salida de evento')
            clearInterval(printCadena)
            comentario.innerHTML= ""
        }
    });
    observando.observe(document.querySelector('#section-contactenos'))
};
viewContactenos();
/**=======================================================
 *               CREANDO ELEMENTO FIGURE
 =========================================================*/
 const especialidad = 
 [{
     imagen: './img/portfolio-1.jpg',
     comentario:'Especialistas en Derecho Penal',
     nombre: 'Derecho Penal',
     url : 'derecho-penal.html' 
 },
 {
     imagen: './img/portfolio-2.jpg',
     comentario:'Especialistas en Contratos Civiles',
     nombre: 'Contratos Civiles',
     url: 'derecho-civil.html' 
 },
 {
     imagen: './img/portfolio-3.jpg',
     comentario:'Especialistas en Recursos Humanos',
     nombre: 'Recursos Humanos',
     url : 'recursos-humanos.html' 
 },  
 {
     imagen: './img/portfolio-4.jpg',
     comentario:'Asesores en Contrataciones con el Estado',
     nombre: 'Contratos con el Estado',
     url: 'contratos-estado.html' 
 },
 {
     imagen: './img/portfolio-5.jpg',
     comentario:'Especialistas en Procedimiento Administrativo Sancionador y Procedimiento Administrativo Disciplinario',
     nombre: 'Procedimiento Administrativo',
     url: 'procedimiento-administrativo.html' 
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

/**=======================================================
 *               ENLACES A PÁGINAS
 =========================================================*/
// const especialidades = especialidad[0].nombre
// console.log(especialidades)
window.addEventListener('click',function(event){
    console.log(event.target.innerHTML)
    if(especialidad[0].nombre == event.target.innerHTML){
        console.log('Muestra página')
        this.location.href = especialidad[0].url
    }
    if(especialidad[1].nombre == event.target.innerHTML){
        console.log('Muestra página')
        this.location.href = especialidad[1].url
    }
    if(especialidad[2].nombre == event.target.innerHTML){
        console.log('Muestra página')
        this.location.href = especialidad[2].url
    }
    if(especialidad[3].nombre == event.target.innerHTML){
        console.log('Muestra página')
        this.location.href = especialidad[3].url
    }
    if(especialidad[4].nombre == event.target.innerHTML){
        console.log('Muestra página')
        this.location.href = especialidad[4].url
    }
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
});

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
    };
    //Función para que solo se muestre una selección y las demás se oculten 
    function removeClass(){
        for(let i = 0 ; i < btnAcordeon.length; i++){
            btnAcordeon[i].classList.remove("activo");
        }
    };
// });

 /**=======================================================
 *      EVENTO 'MOUSEOVER' EN ELEMENT 'NOSOTROS-IMG'
 =========================================================*/
document.addEventListener('DOMContentLoaded',function(){
    let imgNosotros = document.querySelector('.nosotros-imagen1__img');
        imgNosotros.addEventListener('mouseover',function(){
        imgNosotros.src = '../img/l&h_consultores_asesores_nosotros2.jpg';
    });
        imgNosotros.addEventListener('mouseout',function(){
        imgNosotros.src = '../img/l&h_consultores_asesores_nosotros.jpg';
    });
}); 
/**=======================================================
 *               SELECCIÓN DE MENÚ
 =========================================================*/
document.addEventListener('DOMContentLoaded',function(){
    scrollNav();
})
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion__items')
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();
            // console.log(e.target.attributes.href.value)
            const seccion = document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    }) 
};


