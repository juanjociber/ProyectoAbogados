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
 *              BOTON DESPLAZA ARRIBA
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
 *             ESCRITURA TEXTO 'CONTÁCTENOS'
 =========================================================*/
const mensaje = document.querySelector('.page__contactenos--mensaje')
let escritura = str =>{
    let arrayStr = str.split('');
    let i = 0;
    printCadena = setInterval(function () {
            if(arrayStr[i] === ''){
                mensaje.innerHTML += arrayStr[i];
                mensaje.innerHTML += arrayStr[i + 1];
                i +=2;                        
            }
            else{
                mensaje.innerHTML += arrayStr[i];
                i++
            }
            if(i=== arrayStr.length){
                clearInterval(printCadena);
            }
        },300);
}
escritura('Contáctenos');



