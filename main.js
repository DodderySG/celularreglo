//=======> nav and menu
const  menu = document.getElementById("menu"),
    btnMenu=document.querySelector("#btn-menu"),
    icon = document.querySelector('.icon');

var nav = document.getElementById("nav");
let subm=  document.getElementById("subm");


btnMenu.addEventListener('click', ()=>{   //Mostrar menu
        menu.classList.toggle('show-menu');
        icon.classList.toggle('uil-apps'); //Cambio de iconos 
        icon.classList.toggle('uil-times');
        document.getElementById("screwic").classList.toggle('show-sc'); //Tornillo girando 
        document.body.classList.toggle('no-scroll'); //Desactiva el sroll al dar click

        if(menu.classList.contains('show-menu')){ //Pregunta si tiene esa clase 
            subm.textContent="SERVICIOS ";
        }else{
            subm.textContent="CELULARREGLO";
        }
})

window.addEventListener("scroll",function(){
    nav.classList.toggle("navbg",window.scrollY>0);
    menu.classList.toggle('menubg',this.window.scrollY>0);
})


// window.onscroll = function(){
//     if(window.pageXOffset>50){
//         nav.style.background = "#fafafa";     //Intento fallido de de un scrooll 

//         nav.style.color="#0000";    
//     }
//     else{
//         nav.style.background = "transparent";
//         nav.style.color="fafafa";
//     }
// }