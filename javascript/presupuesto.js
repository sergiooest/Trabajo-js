document.links[2].className = "borde";

//Guardando elementos HTML en una constante
//Inputs
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono")
const email = document.getElementById("email");
const lista = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const plazo = document.getElementById("plazo");
const color = document.getElementById("color");
const version1 = document.getElementById("v1");
const version2 = document.getElementById("v2");
const boton = document.getElementById("boton");
const checkbox = document.getElementById("privacidad");

//Span
const presupuesto = document.getElementById("precio");

//Parrafos
const msjNom = document.getElementById("nomError");
const msjApe = document.getElementById("apeError");
const msjTel = document.getElementById("telError");
const msjEma = document.getElementById("emaError");
const msjPro = document.getElementById("proError");
const msjPla = document.getElementById("plaError");

//Expresiones Regulares
const reglaCaracteres = /^[a-zA-Z\s]+$/;
const reglaNumeros = /^[0-9]+$/;
const reglaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

//Variables Globales
var almacenar;
var multiplicador = 0;
var descuento = 0;
var suma = 0;

//Creando las Funciones
    //Funcion del Nombre
    function validaNombre(){
        if (nombre.value == "" || nombre.value == null){
            msjNom.innerText = "Este campo no puede estar vacio";
            msjNom.className = "color1";
            return false;
        }else{
            if(nombre.value.length > 15){
                msjNom.innerText = "Este campo no puede contener mas 15 caracteres";
                msjNom.className = "color1";
                return false; 
            }else{
                if(!reglaCaracteres.test(nombre.value)){
                    msjNom.innerText = "El campo solo puede conter caracteres";
                    msjNom.className = "color1";
                    return false;
                    }else{
                        msjNom.className = "color";
                        return true;
                        }
                    }
        }
    }
    //Funcion del Apellido
    function validaApellido(){
        if (apellido.value == "" || apellido.value == null){
            msjApe.innerText = "Este campo no puede estar vacio";
            msjApe.className = "color1";
            return false;
        }else{
            if(nombre.value.length > 40){
                msjNom.innerText = "Este campo no puede contener mas 40 caracteres";
                msjNom.className = "color1";
                return false; 
            }else{
            if(!reglaCaracteres.test(apellido.value)){
                msjApe.innerText = "El campo solo puede conter caracteres";
                msjApe.className = "color1";
                return false;
                }else{
                    msjApe.className = "color";
                    return true;
                    }
                }
        }
    }

    //Funcion del Telefono
    function validarTelefono(){
        if (telefono.value == "" || telefono.value == null){
            msjTel.innerText = "Este campo no puede estar vacio";
            msjTel.className = "color1";
            return false;
        }else{
            if(nombre.value.length > 9){
                msjNom.innerText = "Este campo no puede contener mas 9 caracteres";
                msjNom.className = "color1";
                return false; 
            }else{
            if(!reglaNumeros.test(telefono.value)){
                msjTel.innerText = "Este campo solo puede contener numeros";
                msjTel.className = "color1";
                return false;
            }else{
                msjTel.className = "color";
                return true;
                }
            }
        }
    }
    //Funcion del Email
    function validaEmail(){
        if (email.value == "" || email.value == null){
            msjEma.innerText = "Este campo no puede estar vacio";
            msjEma.className = "color1";
            return false;
        }else{
            if(!reglaEmail.test(email.value)){
                msjEma.innerText = "El correo no es valido";
                msjEma.className = "color1";
                return false;
            }else{
                msjEma.className = "color";
                return true;
            }
        }
    }
    //Funcion Seleccionar el Producto
    function selecionarProducto(){
        switch (lista.value){
            case "":
                msjPro.innerText = "Debe Elegir un Producto";
                msjPro.className = "color1";
                return false;
            case "elegir":
                msjPro.innerText = "Debe Elegir un Producto";
                msjPro.className = "color1";
                presupuesto.innerHTML = "0 €"
                return false;
            case "protesis1":
                msjPro.innerHTML = "" ;
                msjPro.className = "color";
                almacenar = 10000;
                presupuesto.innerHTML = almacenar + " €";
                plazo.disabled = false;
                color.disabled = false;
                version1.disabled = false;
                version2.disabled = false;
                return true;
            case "protesis2":
                msjPro.innerHTML = "" ;
                msjPro.className = "color";
                almacenar = 8000;
                presupuesto.innerHTML = almacenar + " €";
                plazo.disabled = false;
                color.disabled = false;
                version1.disabled = false;
                version2.disabled = false;
                return true;
            case "protesis3":
                msjPro.innerHTML = "" ;
                msjPro.className = "color";
                almacenar = 5000;
                presupuesto.innerHTML = almacenar + " €";
                plazo.disabled = false;
                color.disabled = false;
                version1.disabled = false;
                version2.disabled = false;
                return true;
            case "webware1":
                msjPro.innerHTML = "" ;
                msjPro.className = "color";
                almacenar = 1000;
                presupuesto.innerHTML = almacenar + " €";
                plazo.disabled = false;
                color.disabled = false;
                version1.disabled = false;
                version2.disabled = false;
                return true;
            case "webware2":
                msjPro.innerHTML = "" ;
                msjPro.className = "color";
                almacenar = 500;
                presupuesto.innerHTML = almacenar + " €";
                plazo.disabled = false;
                color.disabled = false;
                version1.disabled = false;
                version2.disabled = false;
                return true;
            case "dron":
                msjPro.innerHTML = "" ;
                msjPro.className = "color";
                almacenar = 1200;
                presupuesto.innerHTML = almacenar + " €";
                plazo.disabled = false;
                color.disabled = false;
                version1.disabled = false;
                version2.disabled = false;
                return true;
        }  
    }
    //Funcion para Validar el Plazo
    function validarPlazo(){
        if(lista.value == "" || lista.value == "elegir"){
            msjPro.innerText = "Debe Elegir un Producto";
            msjPro.className = "color1";
            plazo.disabled = true;  
        }else{
            if (plazo.value > 5 && plazo.value < 11){
                descuento = (multiplicador*10)/100;
                console.log(descuento);
                calcularPresupuesto();
                return true;
            }else{
                if (plazo.value > 10 && plazo.value < 21) {
                    descuento = (multiplicador*20)/100;
                    console.log(descuento);
                    calcularPresupuesto();
                    return true;
                }else{
                    if(plazo.value > 20 && plazo.value < 31){
                        descuento = (multiplicador*30)/100;
                        console.log(descuento);
                        calcularPresupuesto();
                        return true;
                    }
                }
            }
        }
    }
    //Funcion para calcular el Presupuesto
    function calcularPresupuesto(){
        presupuesto.innerHTML = (multiplicador - descuento) + suma + " €";
    }
    //Funcion Validar el Checkbox
    function validarCheckbox(){
        if(checkbox.checked){
            return true;
        }else{
            return false;
        }
    }
    //Funcion Enviar
    function enviar(){
        validarCheckbox();
        const nombreCliente = validaNombre();
        const apellidoCliente = validaApellido();
        const telefonoCliente = validarTelefono();
        const emailCliente = validaEmail();
        const elegirProducto = selecionarProducto();
        const plazoPresupuesto = validarPlazo();
        console.log(elegirProducto);
        console.log(plazoPresupuesto);
        if(nombreCliente && apellidoCliente && telefonoCliente && emailCliente && elegirProducto && plazoPresupuesto){
            document.getElementById("formulario").submit();
        }else{
            suma = 0;
            descuento = 0;
            multiplicador = 0;
            lista.value = "elegir";
            color.checked = false;
            version1.checked = false;
            version2.checked = false;
            alert("El formulario es incorrecto");
        }
    }



//Creando los Eventos
nombre.addEventListener("input", validaNombre);
apellido.addEventListener("input", validaApellido);
telefono.addEventListener("input", validarTelefono);
email.addEventListener("input", validaEmail);
lista.addEventListener("click", selecionarProducto);
lista.addEventListener("click", ()=>{
    multiplicador = almacenar*cantidad.value;
    cantidad.value = "1";
    plazo.value = "1";
});
cantidad.addEventListener("click", ()=>{
    multiplicador = almacenar*cantidad.value;
    calcularPresupuesto();
    plazo.value = "1";
});
plazo.addEventListener("input",validarPlazo)
color.addEventListener("click", ()=>{
    if (lista.value == "elegir"){
        msjPro.innerText = "Debe Elegir un Producto";
        msjPro.className = "color1";
        color.checked = false;
        color.disabled = true;
    }else if (color.checked) {
        suma = suma + 100;
        calcularPresupuesto();
    }else{
        suma = suma - 100;
        calcularPresupuesto();
    }
});
version1.addEventListener("click", ()=>{
    if (lista.value == "elegir"){
        msjPro.innerText = "Debe Elegir un Producto";
        msjPro.className = "color1";
        version1.checked = false;
        version1.disabled = true;
    }else if (version1.checked) {
        suma =  suma + 200;
        calcularPresupuesto();
    }else{
        suma =  suma - 200;
        calcularPresupuesto();
    }    
});
version2.addEventListener("click", ()=>{
    if (lista.value == "elegir"){
        msjPro.innerText = "Debe Elegir un Producto";
        msjPro.className = "color1";
        version2.checked = false;
        version2.disabled = true;
    }else if (version2.checked) {
        suma =  suma + 300;
        calcularPresupuesto();
    }else{
        suma =  suma - 300;
        calcularPresupuesto();
    }    
});
checkbox.addEventListener("click", validarCheckbox);
boton.addEventListener("click", enviar);


    

