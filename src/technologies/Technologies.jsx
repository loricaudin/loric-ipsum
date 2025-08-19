import "./Technologie.scss";
import Technologie from "./Technologie";
import Section from "../Section";

export default function Technologies() {
    return <>
        <a className="lien-section" id="technologies"></a>
        <Section classe="technologies">
            <h1>Mes technologies</h1>
            <div>
                <div className="liste-technologies">
                    <h2>Les langages de programmation d'applications</h2>
                    <div>
                        <Technologie
                            nom={"Python"}
                            texte={"Python"}
                            type={"application"}
                            icone={"py"}
                            couleur={"rgb(255, 226, 36)"}
                        />
                        <Technologie
                            nom={"C"}
                            type={"application"}
                            icone={"c"}
                            couleur={"rgb(0, 89, 157)"}
                        />
                        <Technologie
                            nom={"C++"}
                            type={"application"}
                            icone={"cpp"}
                            couleur={"rgb(0, 89, 157)"}
                        />
                        <Technologie
                            nom={"C# (Marque déposée par Microsoft)"}
                            texte={"C#"}
                            type={"application"}
                            couleur={"rgb(129, 48, 132)"}
                        />
                        <Technologie
                            nom={"Java"}
                            type={"application"}
                            icone={"java"}
                            couleur={"rgb(249, 183, 60)"}
                        />
                        <Technologie
                            nom={"Microsoft Visual Basic (Marque déposée)"}
                            texte={"Visual Basic"}
                            type={"application"}
                            couleur={""}
                        />
                        <Technologie
                            nom={"Android Java et Kotlin (Marques déposés)"}
                            texte={"Android Java et Kotlin"}
                            type={"mobile"}
                            couleur={"rgb(61, 220, 132)"}
                        />
                    </div>
                </div>
                <div className="liste-technologies">
                    <h2>Les langages de programmation web</h2>
                    <div>
                        <Technologie
                            nom={"HTML"}
                            type={"web"}
                            icone={"html"}
                            couleur={"rgb(241, 101, 41)"}
                        />
                        <Technologie
                            nom={"CSS"}
                            type={"web"}
                            icone={"css"}
                            couleur={"rgb(38, 77, 228)"}
                        />
                        <Technologie
                            nom={"JavaScript"}
                            type={"web"}
                            icone={"js"}
                            couleur={"rgb(247, 223, 30)"}
                        />
                        <Technologie
                            nom={"TypeScript (Marque déposée par Microsoft)"}
                            texte={"TypeScript"}
                            type={"web"}
                            couleur={"rgb(45, 121, 199)"}
                        />
                        <Technologie
                            nom={"PHP"}
                            type={"web"}
                            icone={"php"}
                            couleur={"rgb(122, 134, 184)"}
                        />
                        <Technologie
                            nom={"Symfony"}
                            texte={"Symfony"}
                            type={"web"}
                            icone={"symfony"}
                            couleur={"rgb(255, 255, 255)"}
                        />
                        <Technologie
                            nom={"React"}
                            texte={"React"}
                            type={"web-front"}
                            icone={"react"}
                            couleur={"rgb(155, 233, 255)"}
                        />
                        <Technologie
                            nom={"Vue"}
                            texte={"Vue"}
                            type={"web-front"}
                            icone={"vue"}
                            couleur={"rgb(18, 184, 109)"}
                        />
                        <Technologie
                            nom={"Angular"}
                            texte={"Angular"}
                            type={"web-front"}
                            icone={"angular"}
                            couleur={"rgb(255, 151, 174)"}
                        />
                        <Technologie
                            nom={"Spring (Marque déposée par Broadcom)"}
                            texte={"Spring"}
                            icone={"spring"}
                            type={"web-back"}
                            couleur={"rgb(152, 225, 93)"}
                        />
                        <Technologie
                            nom={"Spring Boot (Marque déposée par Broadcom)"}
                            texte={"Spring Boot"}
                            icone={"springboot"}
                            type={"web-back"}
                            couleur={"rgb(152, 225, 93)"}
                        />
                        <Technologie
                            nom={"Django"}
                            texte={"Django"}
                            type={"web-back"}
                            icone={"django"}
                            couleur={"rgb(18, 94, 65)"}
                        />
                        <Technologie
                            nom={"FastAPI"}
                            texte={"FastAPI"}
                            type={"web-back"}
                            icone={"fastapi"}
                            couleur={"rgb(15, 181, 167)"}
                        />
                        <Technologie
                            nom={"Express"}
                            type={"web-back"}
                            icone={"express"}
                            couleur={"rgb(240, 241, 243)"}
                        />
                        <Technologie
                            nom={"Node JS"}
                            type={"web"}
                            icone={"nodejs"}
                            couleur={"rgb(175, 247, 186)"}
                        />
                        <Technologie
                            nom={"Nest JS"}
                            type={"web-back"}
                            icone={"nestjs"}
                            couleur={"rgb(248, 133, 160)"}
                        />
                        <Technologie
                            nom={"Next JS"}
                            texte={"Next JS"}
                            type={"web-front"}
                            icone={"nextjs"}
                            couleur={"rgb(50, 50, 50)"}
                        />
                        <Technologie
                            nom={"ThreeJS"}
                            texte={"ThreeJS"}
                            type={"web-front"}
                            icone={"threejs"}
                            couleur={"rgb(255, 255, 255)"}
                        />
                        <Technologie
                            nom={"Tailwind CSS"}
                            texte={"Tailwind CSS"}
                            type={"web-front"}
                            icone={"tailwindcss"}
                            couleur={"rgb(97, 227, 249)"}
                        />
                        <Technologie
                            nom={"SCSS"}
                            texte={"SCSS"}
                            type={"web-front"}
                            icone={"scss"}
                            couleur={"rgb(244, 153, 197)"}
                        />
                    </div>
                </div>
                <div className="liste-technologies">
                    <h2>Bases de données</h2>
                    <div>
                        <Technologie
                            nom={"MySQL"}
                            type={"baseDeDonnees"}
                            icone={"mysql"}
                            couleur={"rgb(253, 183, 70)"}
                        />
                        <Technologie
                            nom={"PostgreSQL (Marque déposée par Postgres)"}
                            texte={"PostgreSQL"}
                            type={"baseDeDonnees"}
                            icone={"postgresql"}
                            couleur={"rgb(87, 129, 164)"}
                        />
                        <Technologie
                            nom={"Oracle Database (Marque déposée par Oracle)"}
                            texte={"Oracle Database"}
                            type={"baseDeDonnees"}
                            couleur={"rgb(255, 0, 0)"}
                        />
                        <Technologie
                            nom={"Microsoft SQL Server (Marque déposée par Microsoft)"}
                            texte={"Microsoft SQL Server"}
                            type={"baseDeDonnees"}
                            couleur={"rgb(255, 44, 44)"}
                        />
                        <Technologie
                            nom={"SQLite"}
                            type={"baseDeDonnees"}
                            icone={"sqlite"}
                            couleur={"rgb(55, 181, 237)"}
                        />
                        <Technologie
                            nom={"MongoDB (Marque déposée)"}
                            texte={"MongoDB"}
                            type={"baseDeDonnees"}
                            couleur={"rgb(108, 172, 72)"}
                        />
                        <Technologie
                            nom={"Neo4j (Marque déposée)"}
                            texte={"Neo4j"}
                            type={"baseDeDonnees"}
                            couleur={"rgb(1, 139, 255)"}
                        />
                        <Technologie
                            nom={"Prisma"}
                            texte={"Prisma"}
                            type={"baseDeDonnees"}
                            icone={"prisma"}
                            couleur={"rgb(72, 98, 113)"}
                        />
                    </div>
                </div>
                <div className="liste-technologies">
                    <h2>Autres technologies</h2>
                    <div>
                        <Technologie
                            nom={"Docker"}
                            texte={"Docker"}
                            icone={"docker"}
                            couleur={"rgb(66, 157, 255)"}
                        />
                        <Technologie
                            nom={"Git"}
                            texte={"Git"}
                            icone={"git"}
                            couleur={"rgb(255, 116, 94)"}
                        />
                    </div>
                </div>
                {/* <div className="liste-technologies">
                    <h2></h2>
                    <div>
                        
                    </div>
                </div> */}
            </div>
        </Section>
    </>
}