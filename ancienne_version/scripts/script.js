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

/* ----- Réalisations ----- */
var indexDiaporamas = [];
for(let i = 0; i < document.querySelectorAll(".diaporamaRealisations").length; i++){
    indexDiaporamas.push(0);
}

var imageEnCoursDeChangement = false;

function deplacerImageDiaporama(index, n) {
    if(!imageEnCoursDeChangement){
        imageEnCoursDeChangement = true;
        let positionPrecedente = indexDiaporamas[index];
        indexDiaporamas[index] += n;
        afficherImageDiaporama(index, positionPrecedente);
    }
}

function changerImageDiaporama(index, n) {
    if(!imageEnCoursDeChangement){
        imageEnCoursDeChangement = true;
        let positionPrecedente = indexDiaporamas[index];
        indexDiaporamas[index] = n;
        afficherImageDiaporama(index, positionPrecedente);
    }
}

function afficherImageDiaporama(index, positionPrecedente) {
    let diaporama = document.querySelectorAll(".diaporamaRealisations")[index].querySelector(".imageRealisation");
    let pointsDiaporama = document.querySelectorAll(".diaporamaListePoints")[index].querySelectorAll(".lienImageRealisation");
    let nbImages = diaporama.querySelectorAll("img").length;

    if(indexDiaporamas[index] >= nbImages){
        indexDiaporamas[index] = 0;
    }
    
    if(indexDiaporamas[index] < 0){
        indexDiaporamas[index] = nbImages - 1;
    }

    for(let i = 0; i < pointsDiaporama.length; i++){
        pointsDiaporama[i].classList.remove('imageRealisationActive');
    }
    
    // Afficher la slide demandée
    //diaporama.style.transform = "translateX(" + (-indexDiaporamas[index] * 30) + "vw)"; // Manière brute

    // Animez la translation en utilisant setInterval
    let positionActuelle = positionPrecedente;
    let n = 5;

    const animation = setInterval(() => {
        if ((positionPrecedente < indexDiaporamas[index] && positionActuelle >= indexDiaporamas[index] - 0.01) || (positionPrecedente >= indexDiaporamas[index] && positionActuelle <= indexDiaporamas[index] + 0.01)) {
            imageEnCoursDeChangement = false;
            clearInterval(animation); // Arrêtez l'animation lorsque la distance est atteinte
        } else {
            positionActuelle += (indexDiaporamas[index] - positionPrecedente) / n;
            n += n / 4;
            if ((positionPrecedente < indexDiaporamas[index] && positionActuelle >= indexDiaporamas[index] - 0.01) || (positionPrecedente >= indexDiaporamas[index] && positionActuelle <= indexDiaporamas[index] + 0.01)) {
                positionActuelle = indexDiaporamas[index];
            }
            if (document.querySelector("html").clientWidth >= 700) {
                diaporama.style.transform = "translateX(" + (-positionActuelle * 30) + "vw)";
            } else {
                diaporama.style.transform = "translateX(" + (-positionActuelle * 70) + "vw)";
            }
            
        }
    }, 10);



    pointsDiaporama[indexDiaporamas[index]].classList.add('imageRealisationActive');
}

function initialiserDiaporama(index){
    let diaporamaImg = document.querySelectorAll(".diaporamaRealisations")[index].querySelectorAll("img");
    if(diaporamaImg.length > 1){
        let emplacementPointsDiaporama = document.querySelectorAll(".diaporamaListePoints")[index];
        
        let diaporamaRealisations = document.querySelectorAll(".diaporamaRealisations")[index];
        
        let flecheGauche = document.createElement("a");
        let flecheDroite = document.createElement("a");
        flecheGauche.innerHTML = "&#10094;";
        flecheDroite.innerHTML = "&#10095;";
        flecheGauche.classList.add("imageRealisationPrecedente");
        flecheDroite.classList.add("imageRealisationSuivante");
        flecheGauche.addEventListener("click", function(){
            deplacerImageDiaporama(index, -1);
        })
        flecheDroite.addEventListener("click", function(){
            deplacerImageDiaporama(index, 1);
        })
        diaporamaRealisations.appendChild(flecheGauche);
        diaporamaRealisations.appendChild(flecheDroite);

        for(let i = 0; i < diaporamaImg.length; i++){
            let pointDiaporama = document.createElement("span");
            pointDiaporama.classList.add("lienImageRealisation");
            pointDiaporama.addEventListener("click", function(){
                changerImageDiaporama(index, i);
            })
            emplacementPointsDiaporama.appendChild(pointDiaporama);
        }

        let pointsDiaporama = document.querySelectorAll(".diaporamaListePoints")[index].querySelectorAll(".lienImageRealisation");
        pointsDiaporama[indexDiaporamas[index]].classList.add('imageRealisationActive');
    }
}

for(let i = 0; i < indexDiaporamas.length; i++){
    initialiserDiaporama(i);
}