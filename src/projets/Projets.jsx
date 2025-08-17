import Projet from "./Projet";
import './Projet.scss'

export default function Projets() {
    return <section id="projets">
        <h1>Mes projets</h1>
        <div>
            <div className="liste-projets">
                <h2>Projets personnels</h2>
                <Projet
                    nomProjet={"Loric Apps"}
                    anneeCreation={2025}
                    description={`
                        Projet pas encore terminé, il s'agit d'un projet qui a un objectif environnement de permettre de garder le plus longtemps possible les appareils.
                        L'objectif est de prendre soin de la batterie en annonçant quand la batterie est chargée afin de réduire la consommation d'électricité et d'abîmer la batterie, mais également de vider régulièrement les fichiers caches ralentissant l'appareil.
                        Il s'agit de mon tout premier projet pour lequel sont réalisés des applications pour Windows, Linux et Android avec les mêmes fonctionnalités.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSource={""}
                    listeImages={[]}
                />
                <Projet
                    nomProjet={"Loric Informatique"}
                    anneeCreation={2024}
                    description={`
                        Il s'agit d'un des plus gros projets que j'ai réalisé.
                        Ce site contient tout d'abord tous les mémentos des langages que j'ai appris (des mémentos provenant de documents Word, converti en XML, puis en HTML grâce à du code Python), mais aussi des astuces pour améliorer son PC et des aides pour résoudre des erreurs.
                    `}
                    lienTelechargement={""}
                    lienSite={"https://loricaudin.github.io/loric-informatique/"}
                    lienCodeSource={"https://github.com/loricaudin/loric-informatique"}
                    listeImages={["loric-informatique-01", "loric-informatique-02"]}
                />
                <Projet
                    nomProjet={"Loric Révisions"}
                    anneeCreation={2022}
                    description={`
                        Il s'agit d'un site web qui permet de réviser grâce à des fiches de révisions personnalisées.
                        À l'aide du logiciel programmé en Python, les fiches de révisions sont entièrement personnalisable et permettent de nous interroger sur les notions que nous avons saisies sur la fiche de révisions.
                        Il s'agit du premier projet qui est réalisé à la fois en Python et en web.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSource={""}
                    listeImages={["loric-revisions-01", "loric-revisions-02", "loric-revisions-03", "loric-revisions-04"]}
                />
            </div>
            <div className="liste-projets">
                <h2>Projets académiques</h2>
                <Projet
                    nomProjet={"Ramses"}
                    anneeCreation={2025}
                    type={"Application web"}
                    description={`
                        Il s'agit du projet le plus difficile du BUT sur lequel il y aura eu le plus de développeurs en simultanée (19 en tout).
                        L'objectif est de reprendre une ERP d'une autre classe centralisant l’ensemble des services administratifs du département informatique de l’IUT
                        et d'y ajouter des fonctionnalités et de l'améliorer.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSourceFront={"https://github.com/loricaudin-projets-academiques/Ramses-Frontend"}
                    lienCodeSourceBack={"https://github.com/loricaudin-projets-academiques/Ramses-Backtend"}
                    /* listeImages={["iut-ramses-01"]} */
                    listeCompetences={["BUT C1", "BUT C2", "BUT C3", "BUT C4", "BUT C5", "BUT C6"]}
                    listeTechnologies={["Angular", "Nest", "Prisma", "MySQL", "Docker"]}
                />
                <Projet
                    nomProjet={"Codenames"}
                    anneeCreation={2024}
                    type={"Application web"}
                    description={`
                        Il s'agit de la reproduction du jeu de société Codenames dans le cadre du cours de qualité de développement.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSourceFront={"https://github.com/loricaudin-projets-academiques/Codenames-front-end"}
                    lienCodeSourceBack={"https://github.com/loricaudin-projets-academiques/Codenames-back-end"}
                    listeImages={[]}
                    listeCompetences={["BUT C1", "BUT C2", "BUT C6"]}
                    listeTechnologies={["Angular", "FastAPI"]}
                />
                <Projet
                    nomProjet={"PLATINE"}
                    anneeCreation={2024}
                    type={"Application web"}
                    description={`
                        Il s'agit du projet du BUT sur lequel il y aura eu le plus de développeurs en simultanée (19 en tout).
                        L'objectif est de réaliser une ERP centralisant l’ensemble des services administratifs du département informatique de l’IUT
                        (emplois du temps, notes, ressources humaines et académiques, stages et alternances…).
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSourceFront={"https://github.com/loricaudin-projets-academiques/PLATINE-Front-end"}
                    lienCodeSourceBack={"https://github.com/loricaudin-projets-academiques/PLATINE-Back-end"}
                    /* listeImages={["iut-platine-01"]} */
                    listeCompetences={["BUT C1", "BUT C2", "BUT C3", "BUT C4", "BUT C5", "BUT C6"]}
                    listeTechnologies={["React", "Tailwind CSS", "Next", "Express", "TypeScript", "Prisma", "PostgreSQL", "Docker"]}
                />
                <Projet
                    nomProjet={"Pacman"}
                    anneeCreation={2024}
                    type={"Application Java"}
                    description={`
                        Il s'agit de la reproduction du célèbre jeu Pacman en Java dans le cadre du cours de qualité de développement en Java.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSource={"https://github.com/loricaudin-projets-academiques/Pacman"}
                    listeImages={["iut-pacman-01", "iut-pacman-02", "iut-pacman-03"]}
                    listeCompetences={["BUT C1", "BUT C2", "BUT C6"]}
                    listeTechnologies={["Java"]}
                />
                <Projet
                    nomProjet={"GogoItinero"}
                    anneeCreation={2024}
                    type={"Application mobile"}
                    description={`
                        L'application consiste à trouver le chemin le plus rapide grâce à une API de Google pour aller d'un point à un autre en fonction de l'adresse de départ et d'arrivée.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSource={"https://github.com/loricaudin-projets-academiques/GogoItinero"}
                    /* listeImages={["iut-gogoitinero-01", "iut-gogoitinero-02", "iut-gogoitinero-03", "iut-gogoitinero-04", "iut-gogoitinero-05", "iut-gogoitinero-06", "iut-gogoitinero-07", "iut-gogoitinero-08", "iut-gogoitinero-09"]} */
                    listeCompetences={["BUT C1", "BUT C2", "BUT C3", "BUT C4", "BUT C5"]}
                    listeTechnologies={["Kotlin"]}
                />
                <Projet
                    nomProjet={"Racylist"}
                    anneeCreation={2024}
                    type={"Site web"}
                    description={`
                        Ce projet consiste à réaliser une application web (à 4 personnes) de liste de courses dans le cadre du projet de Symfony.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSource={"https://github.com/loricaudin-projets-academiques/Racylist"}
                    listeImages={[]}
                    listeCompetences={["BUT C1", "BUT C2", "BUT C3", "BUT C4", "BUT C5", "BUT C6"]}
                    listeTechnologies={["Symfony", "HTML", "CSS", "MySQL"]}
                />
                <Projet
                    nomProjet={"BRAP Education"}
                    anneeCreation={2023}
                    type={"Site web"}
                    description={`
                        Également réalisé à l'IUT, mais en groupe de 4, le projet avait pour objectif de permettre aux étudiants d'accéder facilement à leurs notes, emplois du temps, retards/absences, convocations et avertissements, et pour les enseignants d'effectuer l'appel pour leurs cours, saisir des notes, enregistrer des retards/absences et émettre des convocations.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSource={"https://github.com/loricaudin-projets-academiques/BRAP-Education"}
                    listeImages={["iut-brap-education-01", "iut-brap-education-02", "iut-brap-education-03", "iut-brap-education-04", "iut-brap-education-05"]}
                    listeCompetences={["BUT C1", "BUT C2", "BUT C3", "BUT C4", "BUT C5", "BUT C6"]}
                    listeTechnologies={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
                />
                <Projet
                    nomProjet={"LS Santé"}
                    anneeCreation={2023}
                    type={"Application Java"}
                    description={`
                        Il s'agit du plus gros projet réalisé en Java.
                        En 1 semestre, il fallait réaliser en binôme une application d'aide à la décision pour des centres de santé.
                        L'objectif était de rejoindre un bâtiment en fonction de la distance, de la durée et de la fiabilité.
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSource={""}
                    listeImages={["iut-ls-sante-01", "iut-ls-sante-02"]}
                    listeCompetences={["BUT C1", "BUT C2", "BUT C5"]}
                    listeTechnologies={["Java"]}
                />
                <Projet
                    nomProjet={"Secret-R"}
                    anneeCreation={2022}
                    type={"Application console Windows"}
                    description={`
                        Secret-R est une application console réalisée en langage C en binôme dans le cadre de ma formation.
                        L'objectif était de créer un annuaire et de pouvoir gérer des contacts sauvegardées dans un fichier CSV.
                    `}
                    lienTelechargement={"/public/projets/Secret-R.exe"}
                    lienSite={""}
                    lienCodeSource={"https://github.com/loricaudin-projets-academiques/Secret-R"}
                    listeImages={["iut-secret-r-01", "iut-secret-r-02", "iut-secret-r-03"]}
                    listeCompetences={["BUT C1"]}
                    listeTechnologies={["C"]}
                />
                <Projet
                    nomProjet={"Yourfood"}
                    anneeCreation={2022}
                    type={"Site web"}
                    description={`
                        Il s'agissait d'un projet réalisé à l'IUT en binôme qui avait pour objectif de créer un site vitrine de commande de Kebab.
                        Nous avons eu pour seule contrainte de n'utiliser que le HTML et le CSS.
                    `}
                    lienTelechargement={""}
                    lienSite={"http://p2200950.pages.univ-lyon1.fr/yourfood/"}
                    lienCodeSource={"https://github.com/loricaudin-projets-academiques/YourFood"}
                    listeImages={["iut-yourfood-01", "iut-yourfood-02"]}
                    listeCompetences={["BUT C5"]}
                    listeTechnologies={["HTML", "CSS"]}
                />
            </div>
            {/* <div className="liste-projets">
                <h2>Projets professionnels</h2>
                <Projet
                    nomProjet={""}
                    anneeCreation={2025}
                    description={`
                        
                    `}
                    lienTelechargement={""}
                    lienSite={""}
                    lienCodeSource={""}
                    listeImages={[]}
                />
            </div> */}
        </div>
    </section>
}