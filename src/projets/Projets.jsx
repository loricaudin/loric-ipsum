import Projet from "./projet";
import './Projet.scss'

export default function Projets() {
    return <>
        <h1>Mes projets</h1>
        <div>
            <div className="liste-projets">
                <h2>Projets personnels</h2>
                <Projet
                    nomProjet={""}
                />
            </div>
            <div className="liste-projets">
                <h2>Projets académiques</h2>
                <Projet
                    nomProjet={""}
                />
            </div>
            <div className="liste-projets">
                <h2>Projets professionnels</h2>
                <Projet
                    nomProjet={""}
                />
            </div>
        </div>
        
    </>
}