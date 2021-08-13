
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];

let semaforo = true;

document.querySelectorAll(".nav")[0].addEventListener("mouseover", function(){
    enlacesHeader.classList.toggle("menudos");
})



document.querySelectorAll(".nav")[0].addEventListener("mouseout", function(){
    enlacesHeader.classList.toggle("menudos");
})