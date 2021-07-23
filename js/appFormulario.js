/**=======================================================
 *                  EVENTO DE FORMULARIO
 =========================================================*/
 window.addEventListener('scroll',function(ev){
    let animando = document.querySelector('.animando')
    let posicionObjeto = animando.getBoundingClientRect().top;
    // console.log(posicionObjeto)
    let tamañoPantalla = window.innerHeight/3;
    if(posicionObjeto < tamañoPantalla){
        animando.style.opacity = 1;
    }

})