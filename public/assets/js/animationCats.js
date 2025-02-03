
const nav = document.querySelector('.cats');
const containerCats = document.querySelector('.containerCats');
const h2 = document.querySelector('h2');
const chienSeul = document.querySelector('.chatSeul');

const TL1 = new TimelineMax({paused: true});


const mediaQuery = window.matchMedia("(max-width: 480px)");

// Fonction pour ajuster les animations selon la taille de l'écran
function handleScreenChange(e) {
    if (e.matches) {
        TL1
        .from(containerCats, 0.5, {y: 100, opacity: 0},'+=0.5' )
        .from(chienSeul, 0.5, {y: 100, opacity: 0},'-=0.1' )
        TL1.play();
       
    } else {
        TL1
        .from(nav, 0.5, {y: -100, opacity: 0},'+=0.2' )
        .from(containerCats, 0.5, {x: 400, opacity: 0},'-=0.1' )
        .from(h2, 0.5, {x: -400, opacity: 0},'-=0.1'  )

        TL1.play();
    }
}

// Écouteur d'événement pour surveiller les changements de taille d'écran
mediaQuery.addEventListener("change", handleScreenChange);

// Initialisation de l'animation lors du chargement de la page
handleScreenChange(mediaQuery);