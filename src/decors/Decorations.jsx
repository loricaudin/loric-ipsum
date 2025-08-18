import { useState } from "react";
import Carre from "./Carre";
import "./Decorations.scss"

const NB_CARRES_ACCUEIL = 10;
const NB_CARRES_PAGE = 100;
const listeCarres = [];

export default function Decorations({}) {

    const [fondCarres, setFondCarres] = useState([]);

    if (listeCarres != []) {
        setTimeout(() => {
            for (let i = 0; i < NB_CARRES_ACCUEIL; i++) {
                listeCarres.push({
                    "x": Math.floor(Math.random() * 100),
                    "y": Math.floor(Math.random() * window.innerHeight),
                    "taille": 50 + Math.floor(Math.random() * 200)
                });
            }

            for (let i = 0; i < NB_CARRES_PAGE; i++) {
                listeCarres.push({
                    "x": Math.floor(Math.random() * 100),
                    "y": Math.floor(Math.random() * (document.documentElement.scrollHeight - 150)),
                    "taille": 50 + Math.floor(Math.random() * 200)
                });
            }

            setFondCarres(listeCarres);
        }, 1000)
    }

    
    
    return <>
        <div className="fond"></div>
        {fondCarres.map((carre, index) => (
            (index % 2 === 0) ?
                <Carre key={index} taille={carre["taille"] + "px"} x={"calc(" + carre["x"] + "vw - 100px)"} y={"calc(" + carre["y"] + "px - 100px)"}/>
            :
                <Carre key={index} taille={carre["taille"] + "px"} x={"calc(" + carre["x"] + "vw - 100px)"} y={"calc(" + carre["y"] + "px - 100px)"} couleur="white"/>
        ))}
    </>;
}