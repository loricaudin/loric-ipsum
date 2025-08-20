import { useState } from 'react';
import './Header.scss'
import Popup from './Popup';

let demarrage = true;

export default function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [popupOuverte, setPopupOuverte] = useState(false);
    const [theme, setTheme] = useState(null);

    if (demarrage == true && window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
        demarrage = false;
        document.body.className = "sombre";
        setTheme("sombre");
    }

    const basculerClairSombre = () => {
        if (document.body.className[document.body.className.length - 1] != " ") {
            document.body.className += " ";
        }

        if (document.body.className.includes("sombre") === true) {
            document.body.className = document.body.className.replace("sombre ", "");
        } else {
            document.body.className += "sombre ";
        }
        setTheme(document.body.className);
    }

    const basculerAnimations = () => {
        if (document.body.className[document.body.className.length - 1] != " ") {
            document.body.className += " ";
        }

        if (document.body.className.includes("anime")) {
            document.body.className = document.body.className.replace("anime ", "");
        } else {
            document.body.className += "anime ";
        }
    }

    const ouvrirFermerMenuNav = () => {
        setMenuOuvert(prev => !prev);
    };

    return <header className={menuOuvert ? "header-ouvert" : "header-ferme"}>
        <button id="bouton-menu-nav" onClick={ouvrirFermerMenuNav}>
            <div className={menuOuvert ? "ouvert" : ""}>
                <div id="bar-nav-1"></div>
                <div id="bar-nav-2"></div>
                <div id="bar-nav-3"></div>
            </div>
        </button>
        <h1><a href="#"><img src="/images/icone.png" /> Loric Ipsum</a></h1>
        <div>
            <nav className={menuOuvert ? "nav-ouvert" : ""}>
                <ul>
                    <li><a href="#presentation" onClick={ouvrirFermerMenuNav}>Présentation</a></li>
                    <li><a href="#parcours" onClick={ouvrirFermerMenuNav}>Parcours</a></li>
                    <li><a href="#competences" onClick={ouvrirFermerMenuNav}>Compétences</a></li>
                    <li><a href="#technologies" onClick={ouvrirFermerMenuNav}>Technologies</a></li>
                    <li><a href="#projets" onClick={ouvrirFermerMenuNav}>Projets</a></li>
                    <li><a href="#contact" onClick={ouvrirFermerMenuNav}>Contact</a></li>
                </ul>
            </nav>
            <button className="bouton-parametres" onClick={function () { setPopupOuverte(!popupOuverte) }}>
                <img className="clair-affichage" src={"/images/parametres-clair.png"} />
                <img className="sombre-affichage" src={"/images/parametres-sombre.png"} />
            </button>
        </div>
        {(popupOuverte == true) &&
            <Popup titre="Paramètre du site" actionFermeture={function () { setPopupOuverte(!popupOuverte) }} >
                <div>
                    Mode d'affichage :
                    <button className="clair-affichage" onClick={basculerClairSombre}>Activer mode sombre</button>
                    <button className="sombre-affichage" onClick={basculerClairSombre}>Désactiver mode sombre</button>
                </div>
                <div>
                    Animations lourdes :
                    <button className="animations-desactives" onClick={basculerAnimations}>Activer animations</button>
                    <button className="animations-actives" onClick={basculerAnimations}>Désactiver animations</button>
                </div>
            </Popup>
        }
    </header >
}