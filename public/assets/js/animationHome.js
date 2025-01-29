
gsap.fromTo("body,.desktop, h2, .chat, .chien",
    { x: -300, opacity: 0 }, /* État initial */
    { x: 0, opacity: 1, duration: 1.5, stagger: 0.8 } /* État final */
);