import './Header.scss'

function ouvrirFermerMenuNav() {
    /* boutonNav.classList.toggle("ouvert");
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
    } */
}

/*
let body = document.querySelector("body");
body.addEventListener("click", function(e){
    let nav = document.querySelector("nav");
    if(nav.classList.contains("nav-ouvert") && e.target.tagName.toLowerCase() == "a"){
        setTimeout('ouvrirFermerMenuNav()', 1000);
    }
})
*/

export default function Header() {
    return <header>
        <button id="bouton-menu-nav" onClick={ouvrirFermerMenuNav()}>
            <div>
                <div id="bar-nav-1"></div>
                <div id="bar-nav-2"></div>
                <div id="bar-nav-3"></div>
            </div>
        </button>
        <h1><a href="#"><img src="/public/images/icone.png"/> Loric Ipsum</a></h1>
        <nav>
            <ul>
                <li><a href="#presentation">Présentation</a></li>
                <li><a href="#parcours">Parcours</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
}