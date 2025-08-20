import "./App.scss"

export default function Popup({ titre, actionFermeture, children }) {

    return <span className="popup">
        <div className="fenetre-popup">
            <div className="popup-en-tete">
                <h1>{titre}</h1>
                {actionFermeture &&
                    <button className="bouton-fermer" onClick={actionFermeture}>
                        <div className="barre-croix-1"></div>
                        <div className="barre-croix-2"></div>
                    </button>
                }
            </div>
            <div className="contenu-fenetre">
                {children}
            </div>
        </div>
    </span>
}