
const slides = document.querySelectorAll('.tweet-slide');
const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    let navLinks = document.getElementById('nav-links');
    let menuIcon = document.querySelector(".menu");
    let closeIcon = document.querySelector(".close");
    let currentSlide = 0;


    
//Sliders Tweet
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

//hamburger funcionalidad
hamburger.addEventListener('click', function() {
    const isActive = navbar.classList.contains('active');
    navbar.classList.toggle('active', !isActive);
    navLinks.classList.toggle('active', !isActive);
    menuIcon.style.display = isActive ? "block" : "none";
    closeIcon.style.display = isActive ? "none" : "block";
});

// Scroll al iniciar pagina
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});



    // Apertura hamburger al hacer scroll
let hasScrolled = false; 

window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        if (!hasScrolled) {
            navbar.classList.add('active');
            navLinks.classList.add('active');
            hamburger.classList.add('active');
            hasScrolled = true;
        }
    } })



    document.getElementById('link-acerca').addEventListener('click', function() {
        document.getElementById('acerca').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('link-proyectos').addEventListener('click', function() {
        document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('link-repositorio').addEventListener('click', function() {
        document.getElementById('repositorio').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('link-novedades').addEventListener('click', function() {
        document.getElementById('novedades').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('link-repositorio').addEventListener('click', function() {
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    });