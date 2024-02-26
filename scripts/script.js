/* ---------- Bouton de navigation ----------- */
var boutonNav = document.getElementById("bouton-menu-nav");
boutonNav.addEventListener("click", ouvrirFermerMenuNav);

function ouvrirFermerMenuNav() {
    boutonNav.classList.toggle("ouvert");
    let nav = document.querySelector("nav");
    let resultat = nav.classList.toggle("nav-ouvert");
    let header = document.querySelector("header");
    if(resultat){
        header.classList.add("header-ouvert");
        header.classList.remove("header-ferme");
    }
    else{
        header.classList.add("header-ferme");
        header.classList.remove("header-ouvert");
    }
}

let body = document.querySelector("body");
body.addEventListener("click", function(e){
    let nav = document.querySelector("nav");
    if(nav.classList.contains("nav-ouvert") && e.target.tagName.toLowerCase() == "a"){
        setTimeout('ouvrirFermerMenuNav()', 1000);
    }
})

/* ---------- Mode d'affichage ---------- */
function miseAJourModeAffichage(e){
    let body = document.querySelector("body");
    let valeur;
    if(e != null){
        valeur = e.target.value;
        if(valeur == "clair-simple"){
            localStorage.removeItem("li_theme");
        }
        else{
            localStorage.setItem("li_theme", valeur);
        }
    }
    else{
        valeur = localStorage.getItem("li_theme");
        if(valeur != null){
            let choixModeAffichage = document.querySelector(".choix-mode-affichage");
            choixModeAffichage.value = valeur;
        }
    }
    if(valeur == "sombre-simple" || valeur == "sombre-colore"){
        body.classList.add("modeSombre");
    }
    else{
        body.classList.remove("modeSombre");
    }
    if(valeur == "clair-colore" || valeur == "sombre-colore"){
        body.classList.add("modeColore");
    }
    else{
        body.classList.remove("modeColore");
    }
}

let choixModeAffichage = document.querySelector(".choix-mode-affichage");
choixModeAffichage.addEventListener("change", miseAJourModeAffichage);

miseAJourModeAffichage(null);

/* ---------- Animation de démarrage ---------- */
function activerAnimationDemarrage(){
    let body = document.querySelector("body");

    let demarrage = document.querySelector(".demarrage");
    let titreDemarrage = document.querySelector(".demarrage h1");
    let mainDemarrage = document.querySelector("main");
    
    body.style.display = "block";

    if(body.classList.contains("modeSombre")){
        demarrage.style.animationName = "fond-demmarrage-sombre";
        titreDemarrage.style.animationName = "titre-demarrage-sombre";
    }
    else{
        demarrage.style.animationName = "fond-demmarrage";
        titreDemarrage.style.animationName = "titre-demarrage";
    }
    mainDemarrage.style.animationName = "main-demarrage";
    demarrage.style.visibility = "collapse";
}

function desactiverAnimationDemarrage(){
    let demarrage = document.querySelector(".demarrage");
    demarrage.style.animationName = "none";

    let titreDemarrage = document.querySelector(".demarrage h1");
    titreDemarrage.style.animationName = "none";

    let mainDemarrage = document.querySelector("main");
    mainDemarrage.style.animationName = "none";
}

window.addEventListener("load", function(){ // À la fin du chargement de la page, on fait l'animation
    activerAnimationDemarrage();
    setTimeout('desactiverAnimationDemarrage()', 5000);
});

