

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
//funcion que hace que el dropdown se muestre al pasar el mouse por encima de los menus
//entretenimiento
var entretenimientoBtn = document.getElementById("entretenimiento-btn");
var entretenimientoDropdown = entretenimientoBtn.nextElementSibling;
//salud
var saludBtn = document.getElementById("salud-btn");
var saludDropdown = saludBtn.nextElementSibling;
//social
var socialBtn = document.getElementById("social-btn");
var socialDropdown = socialBtn.nextElementSibling;
//turismo
var turismoBtn = document.getElementById("turismo-btn");
var turismoDropdown = turismoBtn.nextElementSibling;


//entretenimiento
entretenimientoBtn.addEventListener("mouseenter", function () {
    entretenimientoDropdown.classList.add("show");
});
entretenimientoBtn.addEventListener("mouseleave", function () {
    entretenimientoDropdown.classList.remove("show");
});

entretenimientoDropdown.addEventListener("mouseenter", function () {
    entretenimientoDropdown.classList.add("show");
});
entretenimientoDropdown.addEventListener("mouseleave", function () {
    entretenimientoDropdown.classList.remove("show");
});

//salud
saludBtn.addEventListener("mouseenter", function () {
    saludDropdown.classList.add("show");
});
saludBtn.addEventListener("mouseleave", function () {
    saludDropdown.classList.remove("show");
});

saludDropdown.addEventListener("mouseenter", function () {
    saludDropdown.classList.add("show");
});
saludDropdown.addEventListener("mouseleave", function () {
    saludDropdown.classList.remove("show");
});

//social
socialBtn.addEventListener("mouseenter", function () {
    socialDropdown.classList.add("show");
});
socialBtn.addEventListener("mouseleave", function () {
    socialDropdown.classList.remove("show");
});

socialDropdown.addEventListener("mouseenter", function () {
    socialDropdown.classList.add("show");
});
socialDropdown.addEventListener("mouseleave", function () {
    socialDropdown.classList.remove("show");
});

//turismo
turismoBtn.addEventListener("mouseenter", function () {
    turismoDropdown.classList.add("show");
});
turismoBtn.addEventListener("mouseleave", function () {
    turismoDropdown.classList.remove("show");
});

turismoDropdown.addEventListener("mouseenter", function () {
    turismoDropdown.classList.add("show");
});
turismoDropdown.addEventListener("mouseleave", function () {
    turismoDropdown.classList.remove("show");
});




//valida compartir receta
function validarFormularioa() {
    var nombre = document.getElementById("nombre").value;
    var receta = document.getElementById("receta").value;
    var mensaje = document.getElementById("mensaje").value;
    var mensaje1 = document.getElementById("mensaje1").value;
    if (nombre === "" || receta === "" || mensaje === "" || mensaje1 === "") {
        alert("Por favor, completa todos los campos del formulario");
        return false;
    } else {
        alert("El formulario es válido, se puede enviar");
        return true;
    }
}
//valida comentario
function validarFormulariob() {
    var nombreC = document.getElementById("nombreC").value;
    var comentario = document.getElementById("comentarioC").value;

    if (nombreC === "" || comentario === "") {
        alert("Por favor, completa todos los campos del formulario");
        return false;
    } else {
        alert("El formulario es válido, se puede enviar");
        return true;
    }
}

//valida medicina
function validarFormularioc() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;


    if (nombre === "" || (edad === "" && edad >= 65) || telefono === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario");
        return false;
    } else {
        alert("El formulario es válido, se puede enviar");
        return true;
    }
}

//compartir receta
function mostrarMensaje() {
    if (validarFormularioa() === true) {
        var mensajeEnviado = document.getElementById("mensaje-enviado");
        mensajeEnviado.classList.remove("oculto");
    }
}

function ocultarMensaje() {
    var mensajeEnviado = document.getElementById("mensaje-enviado");
    mensajeEnviado.classList.add("oculto");
    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("receta").value = "";
    document.getElementById("mensaje").value = "";
    document.getElementById("mensaje1").value = "";
}
//comentario
function mostrarComentario() {
    if (validarFormulariob() === true) {
        var comentarioEnviado = document.getElementById("comentario-enviado");
        comentarioEnviado.classList.remove("oculto");
    }

}

function ocultarComentario() {
    var comentarioEnviado = document.getElementById("comentario-enviado");
    comentarioEnviado.classList.add("oculto");

    document.getElementById("nombreC").value = "";
    document.getElementById("comentarioC").value = "";
}

//iess
function openUrl() {
    const externalUrl = "https://www.iess.gob.ec/en/web/pensionados/programa-del-adulto-mayor";
    window.open(externalUrl, "_blank");
}

//ejercicios doctor
function mostrarDoctor() {
    var mensajeEnviado = document.getElementById("mensaje-enviado");
    mensajeEnviado.classList.remove("oculto");
}
function graciasMensaje() {
    var graciasEnviado = document.getElementById("gracias-enviado");
    graciasEnviado.classList.remove("oculto");
}
function ocultarGracias() {
    var mensajeEnviado = document.getElementById("mensaje-enviado");
    mensajeEnviado.classList.add("oculto");
    var graciasEnviado = document.getElementById("gracias-enviado");
    graciasEnviado.classList.add("oculto");
    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("mensaje").value = "";

}

//validacion de campos (Ejercicio doctor)
function validarFormulario() {

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    var numero = document.getElementById("numero").value;
    var mensaje = document.getElementById("mensaje").value;

    // Verifica que el campo de nombre no esté vacío
    if (nombre === '') {
        alert('Por favor ingrese su nombre');
        return false;
    }

    // Verifica que el campo de correo electrónico no esté vacío y tenga un formato válido
    if (correo === '') {
        alert('Por favor ingrese su correo electrónico');
        return false;
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        alert('Por favor ingrese un correo electrónico válido');
        return false;
    } else if (numero.trim() === "" || !/^\d+$/.test(numero)) {
        alert("Por favor, ingrese un número de contacto válido.");
        return false;
    } else if (mensaje === "") {
        alert("Por favor, ingrese su mensaje.");
        return false;
    }

    // Si los campos están validados correctamente, devuelve true    
    return true;
}

//medicina
const linkedinLink = document.querySelector(".linkedin");

linkedinLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/johannagavidia?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvKnTPcz1ROuGHkRBgfk1Qg%3D%3D", "_blank");
});

//medicina formulario
function mostrarMedicina() {
    if (validarFormularioc() === true) {        
        var graciasMedicina = document.getElementById("gracias-medicina");        
        graciasMedicina.classList.remove("oculto");           
    } else{
        $('#servicio2').modal('show');
    }
}

function ocultarMedicina(){
    var graciasEnviado = document.getElementById("gracias-medicina");
    graciasEnviado.classList.add("oculto");
    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
}

//js turismo
function mostrarForo() {
    var foroAgregado = document.getElementById("comentario-enviado");
    foroAgregado.classList.remove("oculto");
}

function mostrarGuia() {
    var guiaRegistrada = document.getElementById("mensaje-enviado");
    guiaRegistrada.classList.remove("oculto");
}