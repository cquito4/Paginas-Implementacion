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

function sendComment() {
    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const title = document.getElementById("title").value;
    const comment = document.getElementById("comment").value;
  
    // Crear un objeto con los datos del comentario
    const data = {
      name: name,
      email: email,
      title: title,
      comment: comment
    };
  
    // Enviar los datos del comentario al servidor usando Fetch
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Actualizar la sección de comentarios con el nuevo comentario
        getComments();
      })
      .catch(error => {
        console.error(error);
      });
      
  }

  function getComments() {
    // Recuperar los comentarios del servidor usando Fetch
    fetch("/api/comments")
      .then(response => response.json())
      .then(data => {
        // Limpiar la sección de comentarios
        const commentsSection = document.getElementById("comentarios-tema1");
        commentsSection.innerHTML = "";
  
        // Agregar cada comentario a la sección de comentarios
        data.forEach(comment => {
          const commentElement = document.createElement("div");
          commentElement.classList.add("comment");
          commentElement.innerHTML = `
            <h3>${comment.title}</h3>
            <p>${comment.comment}</p>
            <div class="comment-info">
              <span>${comment.name}</span>
              <span>${comment.email}</span>
            </div>
          `;
          commentsSection.appendChild(commentElement);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  

