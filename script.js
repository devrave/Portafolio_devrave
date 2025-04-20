let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;    
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("java");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("gitGithub");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("metodologias");
        habilidades[7].classList.add("resolucion");     
    }    
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Inicializar EmailJS
emailjs.init("V6VSfKI3GXsVgnh8A"); // Reemplaza con tu User ID real

// Lógica del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = this.nombre.value.trim();
    const telefono = this.telefono.value.trim();
    const correo = this.correo.value.trim();
    const tema = this.tema.value.trim();
    const mensaje = this.mensaje.value.trim();

    console.log({
        nombre, telefono, correo, tema, mensaje
    });
    


    // Enviar el formulario usando EmailJS
    emailjs.send("service_portafolio", "template_e7fudra", {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        tema: tema,
        mensaje: mensaje
    }).then(function(response) {
        alert("¡Mensaje enviado con éxito!");
        document.getElementById('formulario-contacto').reset();
    }, function(error) {
        console.error("Error:", error);
        alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    });
});