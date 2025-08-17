import "./Technologie.scss";
import Technologie from "./Technologie";

export default function Technologies() {
    return <section id="technologies">
        <h1>Mes technologies</h1>
        <div>
            <div className="liste-technologies">
                <h2>Les langages de programmation d'applications</h2>
                <div>
                    <Technologie
                        nom="Python"
                        type="application"
                        icone="py"
                    />
                    <Technologie
                        nom="Microsoft Visual Basic"
                        type="application"
                        icone="vbs"
                    />
                    <Technologie
                        nom="C"
                        type="application"
                        icone="c"
                    />
                    <Technologie
                        nom="C++"
                        type="application"
                        icone="cpp"
                    />
                    <Technologie
                        nom="C#"
                        type="application"
                        icone="cs"
                    />
                    <Technologie
                        nom="Java"
                        type="application"
                        icone="java"
                    />
                    <Technologie
                        nom="Android Java et Kotlin"
                        type="mobile"
                        icone="kts"
                    />
                </div>
            </div>
            <div className="liste-technologies">
                <h2>Les langages de programmation web</h2>
                <div>
                    <Technologie
                        nom="HTML"
                        type="web"
                        icone="html"
                    />
                    <Technologie
                        nom="CSS"
                        type="web"
                        icone="css"
                    />
                    <Technologie
                        nom="JavaScript"
                        type="web"
                        icone="js"
                    />
                    <Technologie
                        nom="TypeScript"
                        type="web"
                        icone="ts"
                    />
                    <Technologie
                        nom="PHP"
                        type="web"
                        icone="php"
                    />
                    <Technologie
                        nom="React"
                        type="web-front"
                    />
                    <Technologie
                        nom="Vue"
                        type="web-front"
                    />
                    <Technologie
                        nom="Angular"
                        type="web-front"
                    />
                    <Technologie
                        nom="Spring/Spring Boot"
                        type="web-back"
                    />
                    <Technologie
                        nom="Django"
                        type="web-back"
                    />
                    <Technologie
                        nom="FastApi"
                        type="web-back"
                    />
                    <Technologie
                        nom="Express"
                        type="web-back"
                    />
                    <Technologie
                        nom="Node"
                        type="web"
                    />
                    <Technologie
                        nom="Nest"
                        type="web-back"
                    />
                    <Technologie
                        nom="Next"
                        type="web-front"
                    />
                </div>
            </div>
            <div className="liste-technologies">
                <h2>Bases de données</h2>
                <div>
                    <Technologie
                        nom="MySQL"
                        type="baseDeDonnees"
                        icone="mysql"
                    />
                    <Technologie
                        nom="Oracle Database"
                        type="baseDeDonnees"
                        icone="oracle"
                    />
                    <Technologie
                        nom="Microsoft SQL Server"
                        type="baseDeDonnees"
                        icone="sqlserver"
                    />
                    <Technologie
                        nom="MongoDB"
                        type="baseDeDonnees"
                        icone="mongodb"
                    />
                </div>
            </div>
            {/* <div className="liste-technologies">
                <h2></h2>
                <div>
                    
                </div>
            </div> */}
        </div>
    </section>
}