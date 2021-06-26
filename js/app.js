/**=======================================================
 *                  MENÚ-RESPONSIVE
 =========================================================*/
let menu = document.querySelector('.menu');
let navegacion = document.querySelector('.container-nav-responsive');
let contador = 1;

menu.addEventListener('click',function(){
    if(contador == 1){
        navegacion.classList.add('navegacion-mostrar')
        contador = 0;    
    }
    else{
        contador = 1;
        navegacion.classList.remove('navegacion-mostrar')
    }
});

/**=======================================================
 *                 REDES SOCIALES
 =========================================================*/
let red = document.getElementsByClassName("social");
for(let i = 0 ; i < red.length ; i++){
    red[i].onmouseover=function(){
        this.style="background: white; color: #B89B5E; transition:.7s"
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
 *                   ACORDEÓN
 =========================================================*/
let btnItems = document.querySelectorAll(".item .btn-item");
for(let i = 0 ; i < btnItems.length; i++ ){
    btnItems[i].addEventListener("click",function(e){
    let btn = e.target;
    if(btn.className == "btn-item active"){
        removeClass()
    }
    else{
        removeClass();
        btn.classList.add("active");
    }
  })
}
//Funciones para que solo se muestre una selección y las demás se oculten 
function removeClass(){
    for(let i = 0 ; i < btnItems.length; i++){
        btnItems[i].classList.remove("active");
    }
}

