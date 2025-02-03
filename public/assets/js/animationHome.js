
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const chat = document.querySelector('.chat');
const chien = document.querySelector('.chien');
const chienchat = document.querySelector('.chienChat');

const TL1 = new TimelineMax({paused: true});


const mediaQuery = window.matchMedia("(max-width: 480px)");

// Fonction pour ajuster les animations selon la taille de l'écran
function handleScreenChange(e) {
    if (e.matches) {
        TL1
        .from(h1, 0.5, {y: 20, opacity: 0},'+=0.5' )
        .from(h2, 0.5, {y: 20, opacity: 0},'-=0.4' )
        .from(chienchat, 0.5, {y: 20, opacity: 0},'-=0.3' )
        TL1.play();
       
    } else {
        TL1
        .from(h1, 0.5, {x: -400, opacity: 0},'+=0.5' )
        .from(h2, 0.5, {x: -400, opacity: 0},'-=0.4' )
        .from(chat, 0.5, {x: -400, opacity: 0},'-=0.3' )
        .from(chien, 0.5, {x: -400, opacity: 0},'-=0.2' )
        TL1.play();
    }
}

// Écouteur d'événement pour surveiller les changements de taille d'écran
mediaQuery.addEventListener("change", handleScreenChange);

// Initialisation de l'animation lors du chargement de la page
handleScreenChange(mediaQuery);