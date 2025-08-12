import './Projet.scss'

export default function Projet({nomProjet, anneeCreation, description, lienTelechargement, lienSite, lienCodeSource}) {
    return <div className="projet">
        <div>
            <h4>{nomProjet}</h4>
            <h5>Année de création : {anneeCreation}</h5>
            <p>{description}</p>
            <div>
                <a href={lienTelechargement} target="_blank"><button>Télécharger l'application</button></a>
                {/* <a href="" target="_blank"><button>Essayer l'application</button></a> */}
                <a href={lienSite} target="_blank"><button>Visiter le site</button></a>
                <a href={lienCodeSource} target="_blank"><button>Voir le code source</button></a>
            </div>
        </div>
        <div>
            <div class="diaporamaRealisations">
                <div class="imageRealisation">
                    <img src="images/R223-1.png"/>
                    <img src="images/R223-2.png"/>
                    <img src="images/R223-3.png"/>
                </div>
            </div>
            <br/>
            <div class="diaporamaListePoints"></div>
        </div>
    </div>
}