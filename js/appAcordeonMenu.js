/**=======================================================
 *                   ACORDEÓN MENU
 =========================================================*/
 document.addEventListener('DOMContentLoaded',function(){
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
});
    // //mql->mediaquerylist
    // const submenu = matchMedia('(min-width: 768px)');
    // const changeSize = mql =>{
    //     mql.matches
             
    // }
    // submenu.addListener(changeSize);
    // changeSize(submenu);
    
    // addEventListener('DOMContentLoaded',()=>{
    //     if(innerWidth > 600){
    //         document.body.style.background = 'red'
    //     }
    //     else{
    //         document.body.style.background = 'yellow'
    //     }
    // })