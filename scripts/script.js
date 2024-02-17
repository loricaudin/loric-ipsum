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