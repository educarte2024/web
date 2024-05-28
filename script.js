window.addEventListener('load', function() {
    var loader = document.querySelector('.loader-wrapper');
    var content = document.querySelector('.content');
    var titleHeader = document.querySelector('.title-header h1');

    loader.style.display = 'none';
    content.style.display = 'block';
    titleHeader.classList.add('fadeInFromRight');
});
 
function toggleGame(event) {
    var targetId = event.currentTarget.getAttribute("data-target");
    var gameDiv = document.getElementById(targetId);

    if (gameDiv.classList.contains("fade-in")) {
        // Start fade-out animation
        gameDiv.classList.remove("fade-in");
        gameDiv.classList.add("fade-out");
        setTimeout(function() {
            gameDiv.style.display = "none";
            gameDiv.classList.remove("fade-out");
        }, 500); // Match this to the duration of fadeOut animation
    } else {
        // Start fade-in animation
        gameDiv.style.display = "block";
        gameDiv.classList.add("fade-in");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById('quienessomos');
    const windowHeight = window.innerHeight;

    function checkIfInView() {
        const scrollY = window.scrollY || window.pageYOffset;
        const elementY = element.getBoundingClientRect().top + scrollY;
        const distanceFromTop = elementY - scrollY;
        
        // Comprueba si el elemento está en el viewport
        if (distanceFromTop <= windowHeight && distanceFromTop >= 0) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        } else {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        }
    }

    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Ejecuta la función en la carga inicial por si el elemento ya está visible
});

document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById('juegosdisponibles');
    const windowHeight = window.innerHeight;

    function checkIfInView() {
        const scrollY = window.scrollY || window.pageYOffset;
        const elementY = element.getBoundingClientRect().top + scrollY;
        const distanceFromTop = elementY - scrollY;
        
        // Comprueba si el elemento está en el viewport
        if (distanceFromTop <= windowHeight && distanceFromTop >= 0) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        } else {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        }
    }

    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Ejecuta la función en la carga inicial por si el elemento ya está visible
});
