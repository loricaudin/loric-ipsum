import './Competence.scss'

export default function Competence({intituleCompetence, codeCompetence, children}) {
    return <div className={"competence"}>
        <h1>{intituleCompetence}</h1>
        {children}
        <h2>Projets en lien avec cette compétence :</h2>
    </div>
}