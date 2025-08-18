import { useState } from 'react';
import './Header.scss'

export default function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false);

    const ouvrirFermerMenuNav = () => {
        setMenuOuvert(prev => !prev);
    };

    return <header className={menuOuvert ? "header-ouvert": "header-ferme"}>
        <button id="bouton-menu-nav" onClick={ouvrirFermerMenuNav}>
            <div className={menuOuvert ? "ouvert" : ""}>
                <div id="bar-nav-1"></div>
                <div id="bar-nav-2"></div>
                <div id="bar-nav-3"></div>
            </div>
        </button>
        <h1><a href="#"><img src="/images/icone.png"/> Loric Ipsum</a></h1>
        <nav className={menuOuvert ? "nav-ouvert" : ""}>
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