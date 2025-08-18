import { useState } from 'react';
import './Header.scss'

export default function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [theme, setTheme] = useState(null);

    const basculerClairSombre = () => {
        if (document.body.className.includes("sombre")) {
            document.body.className = "clair";
        } else {
            document.body.className = "sombre";
        }
        setTheme(document.body.className);
    }

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
            <div onClick={basculerClairSombre}><img src={(theme !== "sombre") ? "/images/mode-sombre.png" : "/images/mode-clair.png"}/></div>
        </div>
    </header>
}