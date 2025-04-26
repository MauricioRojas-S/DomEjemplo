window.onload = function(){ ///Asegura que el DOM esté totalmente cargado
    let $h1 = document.querySelector(".Dorian2")
    console.log($h1)


    let $boton = document.querySelector("#btonPrincipal")
    $boton.addEventListener("click", respuestaClick)
    function respuestaClick(){
        console.log("Respuesta evento");
        alert("Respuesta evento");
    }

    let $boton2 = document.querySelector("#btonSecundario")
    $boton2.onclick = () =>{
        alert("Respuesta Evento Secundario")
    }

}