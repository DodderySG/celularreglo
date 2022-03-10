//=======> nav and menu
const  menu = document.getElementById("menu"),
    btnMenu=document.querySelector("#btn-menu"),
    icon = document.querySelector('.icon'),
    subm = document.getElementById("subm");

var nav = document.querySelector(".nav");   

btnMenu.addEventListener('click', ()=>{   //Mostrar menu
        menu.classList.toggle('show-menu');
        icon.classList.toggle('uil-apps');
        icon.classList.toggle('uil-times');
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