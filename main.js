//=======> nav and menu
const  menu = document.getElementById("menu"),
    btnMenu=document.querySelector("#btn-menu"),
    icon = document.querySelector('.icon');

var nav = document.querySelector(".nav"); 
let subm=  document.getElementById("subm");


btnMenu.addEventListener('click', ()=>{   //Mostrar menu
        menu.classList.toggle('show-menu');
        icon.classList.toggle('uil-apps'); //Cambio de iconos 
        icon.classList.toggle('uil-times');
        document.getElementById("screwic").classList.toggle('show-sc');
        document.body.classList.toggle('no-scroll'); //Desactiva el sroll al dar click

        if(menu.classList.contains('show-menu')){ //Pregunta si tiene esa clase 
            subm.textContent="Servicios";
        }else{
            subm.textContent="Celularreglo";
        }
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