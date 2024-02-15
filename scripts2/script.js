function ouvrirMenuNav(e) {
    e.classList.toggle("ouvert");
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