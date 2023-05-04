/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

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
//funcion que hace que el dropdown de salud se muestre al pasar el mouse por encima
var saludBtn = document.getElementById("salud-btn");
var saludDropdown = saludBtn.nextElementSibling;

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
}

//ejercicios doctor
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


