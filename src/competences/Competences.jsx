import Section from '../Section'
import Competence from './Competence'
import './Competence.scss'

export default function Competences({}) {
    return <>
        <a className="lien-section" id="competences"></a>
        <Section classe="competences">
            <h1>Mes compétences</h1>
            <div>
                <div className="liste-competences">
                    <h2>Compétences BUT</h2>
                    <Competence
                        intituleCompetence={"Réaliser un développement d’application"}
                        codeCompetence={"BUT C1"}
                        listeProjets={["Ramses", "PLATINE", "Codenames", "Pacman", "GogoItinero", "Racylist", "BRAP Education", "LS Santé", "Secret-R"]}>
                        <p>
                            Cette compétence consiste à développer, c’est-à-dire concevoir, coder,
                            tester et intégrer une solution informatique pour un client.
                        </p>
                        <h2>Niveaux validées :</h2>
                        <ul>
                            <li>Niveau 1 : Développer des applications informatiques simples</li>
                            <li>Niveau 2 : Partir des exigences et aller jusqu’à une application complète</li>
                            <li>Niveau 3 : Se spécialiser sur un ensemble de supports (embarqué, web, mobile, IOT...) avec un suivi qualitatif</li>
                        </ul>
                    </Competence>
                    <Competence
                        intituleCompetence={"Optimiser des applications informatiques"}
                        codeCompetence={"BUT C2"}
                        listeProjets={["Ramses", "PLATINE", "Codenames", "Pacman", "GogoItinero", "Racylist", "BRAP Education", "LS Santé"]}>
                        <p>
                            Cette compétence consiste à proposer des applications informatiques
                            optimisées en fonction du temps d’exécution, de la précision, de la
                            consommation de ressources...
                        </p>
                        <h2>Niveaux validées :</h2>
                        <ul>
                            <li>Niveau 1 : Appréhender et construire des algorithmes</li>
                            <li>Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné</li>
                            <li>Niveau 3 : Analyser et optimiser des applications</li>
                        </ul>
                    </Competence>
                    <Competence
                        intituleCompetence={"Administrer des systèmes informatiques communicants complexes"}
                        codeCompetence={"BUT C3"}
                        listeProjets={["Ramses", "PLATINE", "GogoItinero", "Racylist", "BRAP Education"]}>
                        <p>
                            Cette compétence consiste à installer, configurer, mettre à disposition,
                            maintenir en conditions opérationnelles des infrastructures, des services et
                            des réseaux et optimiser le système informatique d’une organisation.
                        </p>
                        <h2>Niveaux validées :</h2>
                        <ul>
                            <li>Niveau 1 : Installer et configurer un poste de travail</li>
                            <li>Niveau 2 : Déployer des services dans une architecture réseau</li>
                        </ul>
                    </Competence>
                    <Competence
                        intituleCompetence={"Gérer des données de l’information"}
                        codeCompetence={"BUT C4"}
                        listeProjets={["Ramses", "PLATINE", "GogoItinero", "Racylist", "BRAP Education"]}>
                        <p>
                            Cette compétence consiste à concevoir, gérer, administrer et exploiter les
                            données de l’entreprise et mettre à disposition toutes les informations pour
                            un bon pilotage de l’entreprise.
                        </p>
                        <h2>Niveaux validées :</h2>
                        <ul>
                            <li>Niveau 1 : Concevoir et mettre en place une base de données à partir d’un cahier des charges client</li>
                            <li>Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité</li>
                        </ul>
                        
                    </Competence>
                    <Competence
                        intituleCompetence={"Conduire un projet"}
                        codeCompetence={"BUT C5"}
                        listeProjets={["Ramses", "PLATINE", "GogoItinero", "Racylist", "BRAP Education", "LS Santé", "Yourfood"]}>
                        <p>
                            Cette compétence consiste à satisfaire les besoins des utilisateurs au
                            regard de la chaîne de valeur du client, organiser et piloter un projet
                            informatique avec des méthodes classiques ou agiles.
                        </p>
                        <h2>Niveaux validées :</h2>
                        <ul>
                            <li>Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs</li>
                            <li>Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs</li>
                        </ul>
                    </Competence>
                    <Competence
                        intituleCompetence={"Travailler dans une équipe informatique"}
                        codeCompetence={"BUT C6"}
                        listeProjets={["Ramses", "PLATINE", "Codenames", "Pacman", "Racylist", "BRAP Education"]}>
                        <p>
                            Cette compétence consiste à acquérir, développer et exploiter les aptitudes
                            nécessaires pour travailler efficacement dans une équipe informatique.
                        </p>
                        <h2>Niveaux validées :</h2>
                        <ul>
                            <li>Niveau 1 : Identifier ses aptitudes pour travailler dans une équipe</li>
                            <li>Niveau 2 : Situer son rôle et ses missions au sein d’une équipe informatique</li>
                            <li>Niveau 3 : Manager une équipe informatique</li>
                        </ul>
                    </Competence>
                </div>
            </div>
        </Section>
    </>
}