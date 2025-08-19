import './Technologie.scss'

export default function Technologie({nom, texte, type, icone, couleur}) {
    const styleTexte = (couleur === "rgb(255, 255, 255)") ? {color: "#000000"} : {}

    return <div className="technologie" style={{backgroundColor: couleur}} title={nom}>
        {(texte) ?
            <div className="techno-avec-texte">
                {(icone) ?
                    <><img src={"/images/technologies/" + icone + ".png"}/>
                    <p style={styleTexte}>{texte}</p></>
                    :
                    <p style={styleTexte}>{texte}</p>
                }
            </div>
            :
            <div className="techno-sans-texte">
                {(icone) ?
                    <img src={"/images/technologies/" + icone + ".png"}/>
                    :
                    <p>Pas de technologie</p>
                }
            </div>
        }
    </div>
}