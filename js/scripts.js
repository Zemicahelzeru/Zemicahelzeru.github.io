/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

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

    // Dynamic auto-type string switching (Data Analyst, Full-Stack Developer, AI Enthusiast, Problem Solver)
    if (document.querySelector('.auto-type')) {
        var typed = new Typed(".auto-type", {
            strings: ["Data Analyst", "Full-Stack Developer", "AI Enthusiast", "Problem Solver"],
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500,
            loop: true
        });
    }

    let currentClass = document.querySelector('.current-class');
    if (currentClass) {
        currentClass.style.color = 'var(--bs-orange)';
    }

    let nextStep = document.querySelector(".try");
    if (nextStep) {
        nextStep.style.color = "#6c757d";
    }
});
