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
 *                 BANNER -SLIDER
 =========================================================*/

let item=["./img/banner_01.jpg","./img/banner_02.jpg"];
let i=0;
function banner(){
    $("#imgBanner").attr("src", item[i]);
        i++;
    if(i >= item.length)
        i=0;
    setTimeout(banner,3000);
}
banner();