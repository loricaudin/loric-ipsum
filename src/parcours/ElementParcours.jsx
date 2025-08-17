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
            <img src={"/public/images/parcours/" + imageSrc + "-clair.png"}/>
        </div>
    </div>
}