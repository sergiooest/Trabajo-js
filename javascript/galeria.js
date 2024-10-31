document.links[1].className = "borde";
//Creando constantes para almacenar elementos HTML
const imagenes = document.querySelectorAll(".img");
const mostrar = document.querySelector(".mostrar");

//Agregando elemento al DOM
mostrar.innerHTML += '<img src="" alt="">'

//Codigo para abrir la imagen
imagenes.forEach(image =>{
    image.addEventListener("click", ()=>{
        mostrar.classList.toggle("abrir");
        mostrar.children[1].src = image.src;
        
    })  
})

//Codigo para cerrar la imagen
mostrar.addEventListener("click", ()=>{
    mostrar.classList.toggle("abrir");
})