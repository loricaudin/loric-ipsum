import './Parcours.scss'

export default function ElementParcours({titre, sousTitre, dateDebut, dateFin, description, emplacement, imageSrc, enCours}) {
    return <div className={"elt-parcours" + ((enCours == "true") ? " en-cours" : "")}>
        <div>
            <h1>{titre} {dateDebut ? <>({dateDebut}-{dateFin ? dateFin : "Aujourd'hui"})</> : ""}</h1>
            <h2>{sousTitre}</h2>
            <p>{description}</p>
            <p>{emplacement}</p>
        </div>
        <div>
            <img className="clair-affichage" src={"/images/parcours/" + imageSrc + "-clair.png"}/>
            <img className="sombre-affichage" src={"/images/parcours/" + imageSrc + "-sombre.png"}/>
        </div>
    </div>
}