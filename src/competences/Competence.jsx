import './Competence.scss'

export default function Competence({intituleCompetence, codeCompetence, children}) {
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
                <h2>Projets en lien avec cette compétence :</h2>
            </div>
        </div>
    </>
}