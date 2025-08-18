import './Competence.scss'

export default function Competence({intituleCompetence, codeCompetence, listeProjets, children}) {
    return <>
        <a className="lien-page" id={codeCompetence}></a>
        <div className={"competence"}>
            <div className="competence-titre">
                <h1>{codeCompetence + " : " + intituleCompetence}</h1>
                <div>
                    <div id="bar-fleche-1"></div>
                    <div id="bar-fleche-2"></div>
                </div>
            </div>
            <div className="competence-detail">
                {children}
                {(listeProjets) && (
                    <><h2>Projets en lien avec cette compétence :</h2>
                    <div className="liste-projets-competence">
                        {
                            listeProjets.map((projet, index) => (
                                <a key={index} className="projet-associe" href={"#" + projet}>{projet}</a>
                            ))
                        }
                    </div>
                </>)}
            </div>
        </div>
    </>
}