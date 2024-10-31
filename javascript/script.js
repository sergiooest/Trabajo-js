document.links[0].className = "borde";
//Inicializando la variable con cantidad inicial de elementos a mostrar
var adicionar = 10;

//Creando constantes para almacenar elementos HTML
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");
const btn1 = document.getElementById("btn-mostrar");

//Función que realiza una solicitud fetch
function realizarFetch(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la Solicitud: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {

            // Limitar el número de elementos
            const maximo = Math.min(adicionar, data.length);
            for (let i = adicionar - 10; i < maximo; i++) {
                const titulo = data[i];
                resultado.innerHTML += `
                <div>
                    <h3>${titulo.title}</h3>
                    <p>${titulo.body}</p>
                </div>
                `;
            }
        })
        .catch(fallo => {
            error.innerHTML += "<p>Error (fetch): " + fallo + "</p>";
            throw new Error("Error de Red: " + fallo);
        });
}
//Funcion para mostrar elementos
function mostrar() {
    if (adicionar < 50) {
        adicionar += 10;
        realizarFetch("../assets/json/noticias.json");
    }
}


btn1.addEventListener("click", mostrar);
