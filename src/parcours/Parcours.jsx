import ElementParcours from './ElementParcours'
import './Parcours.scss'

export default function Parcours() {
    return <div id="parcours">
        <h1>Mon parcours</h1>
        <div>
            <div className="parcours-chronologique">
                <h2>Parcours académique</h2>
                <ElementParcours
                    titre="CESI Lyon"
                    sousTitre="École d'ingénieur"
                    dateDebut="2025"
                    dateFin="2028"
                    description=""
                    emplacement="Lyon Villeurbanne"
                    imageSrc="cesi"
                    enCours="true"
                />
                <ElementParcours
                    titre="IUT Lyon 1"
                    sousTitre="BUT Informatique"
                    dateDebut="2022"
                    dateFin="2025"
                    description="Parcours RA (Réalisation d'Applications)"
                    emplacement="Lyon Villeurbanne"
                    imageSrc="iut_lyon1"
                    enCours="false"
                />
            </div>
            <div className="parcours-chronologique">
                <h2>Parcours professionnel</h2>
                <ElementParcours
                    titre="Hoortrade"
                    sousTitre="Alternance de 3 ans"
                    dateDebut="2025"
                    dateFin="2028"
                    description="Développeur Full Stack - Orientation Backend"
                    emplacement="Lyon 07"
                    imageSrc="hoortrade"
                    enCours="true"
                />
                <ElementParcours
                    titre="KPI Technologie"
                    sousTitre="Stage de 12 semaines + Alternance d'1 an"
                    dateDebut="2024"
                    dateFin="2025"
                    description="Développement de projets informatiques pour des sociétés industrielles"
                    emplacement="Lyon 09"
                    imageSrc="kpi_technologie"
                    enCours="false"
                />
            </div>
        </div>
    </div>
}