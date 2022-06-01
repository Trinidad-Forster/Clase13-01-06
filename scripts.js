/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

const datos = [
    {
        picsum: "https://picsum.photos/id/1069/200/2333",
        title: "Medusa",
        text: "Canción de Ed Sheeran",
    },
    {
        picsum: "https://picsum.photos/id/1081/5512/3708",
        title: "Construcción abstracta",
        text: "El dia esta muy soleado, no hace tanto frio como siempre",
    },
    {
        picsum: "https://picsum.photos/id/307/5760/3840",
        title: "Simulación textura",
        text: "Sacar fotos de diferentes angulos de la arquitectura es genial! ",
    },
    {
        picsum: "https://picsum.photos/id/546/3456/2304",
        title: "Modelado Arquitectura e iuminación",
        text: "Dia estas palabras cantando",
    },
     {
        picsum: "https://picsum.photos/id/564/2000/1333",
        title: "Cueva",
        text: "Sacar fotos de diferentes angulos de la arquitectura es genial! ",
    },
    {
        picsum: "https://picsum.photos/id/679/2448/2448",
        title: "Efecto visuales",
        text: "Dia estas palabras cantando",
    },
];

datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("portafolio").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    } else {
        // impar
        document.querySelector("#portafolio").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    }
});

async function users() {
    console.log(datos);
}
users().catch((error) => console.error(error));

