/**=======================================================
 *                  MENÚ-RESPONSIVE
 =========================================================*/
let menu = document.querySelector('.header__menu');
let navegacion = document.querySelector('.navegacion');
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
 *                  SCROLL
 =========================================================*/

