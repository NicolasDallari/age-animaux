
const nav = document.querySelector('.dog');
const containerDog = document.querySelector('.containerDog');
const chienSeul = document.querySelector('.chienSeul');

const TL1 = new TimelineMax({paused: true});


const mediaQuery = window.matchMedia("(max-width: 480px)");

// Fonction pour ajuster les animations selon la taille de l'écran
function handleScreenChange(e) {
    if (e.matches) {
        TL1
        .from(containerDog, 0.5, {y: 100, opacity: 0},'+=0.5' )
        .from(chienSeul, 0.5, {y: 100, opacity: 0},'-=0.1' )
        TL1.play();
       
    } else {
        TL1
        .from(nav, 0.5, {y: -100, opacity: 0},'+=0.2' )
        .from(containerDog, 0.5, {x: -400, opacity: 0},'-=0.1' )
        TL1.play();
    }
}

// Écouteur d'événement pour surveiller les changements de taille d'écran
mediaQuery.addEventListener("change", handleScreenChange);

// Initialisation de l'animation lors du chargement de la page
handleScreenChange(mediaQuery);