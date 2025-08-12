import './Presentation.scss'

function calculerAge(dateAnniversaire) {
    const aujourdhui = new Date();
    let age = aujourdhui.getFullYear() - dateAnniversaire.getFullYear();
    const moisDifference = aujourdhui.getMonth() - dateAnniversaire.getMonth();
    
    if (moisDifference < 0 || (moisDifference === 0 && aujourdhui.getDate() < dateAnniversaire.getDate())) {
        age--;
    }
    return age;
}

export default function Presentation() {
    const age = calculerAge(new Date('2004-05-27'));
    return <div className="presentation">
        <h2>Qui suis-je ?</h2>
        <div>
            <p>
                Je m’appelle Loric Audin, j'ai {age} ans et je suis passionné d’informatique depuis tout jeune.
                Ce que j’aime tant dans l’informatique, c’est la programmation.
                Depuis le collège, j’adorais faire des petits programmes.
                J’ai commencé par faire du Scratch,
                et ma grande curiosité m’a permis d’acquérir des nouveaux langages de programmation
                et de découvrir davantage de fonctionnalités.
                J’adore créer des sites web et des applications,
                que ce soit sur PC ou mobile, peut importe la technologie utilisée.
            </p>
            <img className="profil" src="src/assets/images/moi.jpg"/>
        </div>
    </div>
}