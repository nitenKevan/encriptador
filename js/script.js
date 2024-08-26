
const textoEncriptar = document.getElementById("textoEncriptar");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munecoImg = document.getElementById("munecoImg");
const pDerecho = document.getElementById("pDerecho");
const seccionesId = document.getElementById("seccionesId");




//Arreglo con las cadenas

let remplazo = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]


botonEncriptar.addEventListener("click", () => {
   //Para obtener con el boton lo que escribas en el textoarea
    const cadenaEncriptar = textoEncriptar.value.toLowerCase();

        //Funcion encriptar
        function encriptar(nuevoTexto){
            for(let i = 0; i < remplazo.length; i++) {
            if(nuevoTexto.includes(remplazo[i][0])){
                    nuevoTexto = nuevoTexto.replaceAll(remplazo[i][0], remplazo[i][1]);
            }
            }
            return nuevoTexto;
        };


    const textoEncriptado = encriptar(cadenaEncriptar);

    textoEncriptar.value="";
    textoEncriptar.focus();

    //Enviar a la etiqueta html la cadena
    mensajeFinal.innerHTML = textoEncriptado;

    //Para quitar la imagen del muñeco y el mensaje de abajo
    munecoImg.style.display = "none";
    pDerecho.style.display = "none";

    //Aparece el boton copiar
    botonCopiar.style.display = "block";

    //Le añadimos una clase extra, ya creada en css
    seccionesId.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

   // console.log(encriptar(cadenaEncriptar));

});

botonDesencriptar.addEventListener("click", () => {

    const textDesen = textoEncriptar.value.toLowerCase();


        function desencriptar(nuevoTexto2) {
            for(let i = 0; i < remplazo.length; i++) {
                if(nuevoTexto2.includes(remplazo[i][1])){
                    nuevoTexto2 = nuevoTexto2.replaceAll(remplazo[i][1], remplazo[i][0]);
                }
            }
            return nuevoTexto2;
        }

     
    const textoDesencriptado = desencriptar(textDesen);
    
    mensajeFinal.innerHTML = textoDesencriptado;

    textoEncriptar.focus();

    munecoImg.style.display = "none";
    pDerecho.style.display = "none";

    //Aparece el boton copiar
    botonCopiar.style.display = "block";

    //Le añadimos una clase extra, ya creada en css
    seccionesId.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

});

botonCopiar.addEventListener("click", () => {
    let textCopiado = mensajeFinal;


    textCopiado.select();
    document.execCommand("copy");

    //Se posiciona en caja de encriptar
    textoEncriptar.focus();

    
});