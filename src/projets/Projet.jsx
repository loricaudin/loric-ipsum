import { useState, useRef, useEffect } from 'react';
import './Projet.scss';

export default function Projet({ nomProjet, icone, anneeCreation, type, description, lienTelechargement, lienSite, lienCodeSource, lienCodeSourceFront, lienCodeSourceBack, listeImages, listeCompetences, listeTechnologies }) {
    const [indexDiaporama, setIndexDiaporama] = useState(0);
    const [imageEnCoursDeChangement, setImageEnCoursDeChangement] = useState(false);
    const diaporamaRef = useRef(null);
    const intervalRef = useRef(null);

    const afficherImageDiaporama = (positionPrecedente, nouvellePosition) => {
        const nbImages = listeImages.length;
        let index = nouvellePosition;

        if (positionPrecedente != nouvellePosition) {
            if (index >= nbImages) {
                index = 0;
            }
            if (index < 0) {
                index = nbImages - 1;
            }

            let positionActuelle = positionPrecedente;
            let n = 5;

            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                const distance = index - positionPrecedente;
                positionActuelle += distance / n;
                n += n / 4;

                const seuil = 0.01;
                const atteint = (distance > 0 && positionActuelle >= index - seuil) || (distance < 0 && positionActuelle <= index + seuil);

                if (atteint) {
                    positionActuelle = index;
                    clearInterval(intervalRef.current);
                    setImageEnCoursDeChangement(false);
                }

                const largeur = document.documentElement.clientWidth;
                const translateX = largeur >= 1000 ? - positionActuelle * 30 : - positionActuelle * 70;

                if (diaporamaRef.current) {
                    diaporamaRef.current.style.transform = `translateX(${translateX}vw)`;
                }
            }, 10);

            setIndexDiaporama(index);
        } else {
            setImageEnCoursDeChangement(false);
        }
    }

    const deplacerImageDiaporama = (n) => {
        if (!imageEnCoursDeChangement) {
            setImageEnCoursDeChangement(true);
            afficherImageDiaporama(indexDiaporama, indexDiaporama + n);
        }
    };

    const changerImageDiaporama = (n) => {
        if (!imageEnCoursDeChangement) {
            setImageEnCoursDeChangement(true);
            afficherImageDiaporama(indexDiaporama, n);
        }
    };

    return (
        <>
            <a className="lien-page" id={nomProjet}></a>
            <div className="projet">
                <div>
                    <h1>{nomProjet}</h1>
                    <h2>Année de création : {anneeCreation}</h2>
                    {(listeTechnologies) && (
                        <h3>Technologies :
                        {
                            listeTechnologies.map((technologie, index) => (
                                <span key={index} className="technologie-utilisee">{technologie}</span>
                            ))
                        }
                    </h3>)}
                    <p>{description}</p>
                    {(listeCompetences) && (
                        <h3>Compétences associées au projet : 
                        {
                            listeCompetences.map((competence, index) => (
                                <a key={index} className="competence-associee" href={"#" + competence}>{competence}</a>
                            ))
                        }
                    </h3>)}
                    <div className="projet-action">
                        {lienTelechargement && <a href={lienTelechargement} target="_blank"><button>Télécharger l'application</button></a>}
                        {lienSite && <a href={lienSite} target="_blank"><button>Visiter le site</button></a>}
                        {lienCodeSource && <a href={lienCodeSource} target="_blank"><button>Voir le code source</button></a>}
                        {lienCodeSourceFront && <a href={lienCodeSourceFront} target="_blank"><button>Voir le code source Frontend</button></a>}
                        {lienCodeSourceBack && <a href={lienCodeSourceBack} target="_blank"><button>Voir le code source Backend</button></a>}
                    </div>
                </div>

                {listeImages && (
                    <div>
                        <div className="diaporamaRealisations">
                            <div className="imageRealisation" ref={diaporamaRef}>
                                {listeImages.map((image, index) => (
                                    <div className="image-projet" key={index}><img src={"/images/projets/" + image + ".png"}/></div>
                                ))}
                            </div>
                            {
                                (listeImages.length > 1) && <>
                                    <a className="imageRealisationPrecedente" onClick={() => deplacerImageDiaporama(-1)}>❮</a>
                                    <a className="imageRealisationSuivante" onClick={() => deplacerImageDiaporama(1)}>❯</a>
                                </>
                            }
                            
                        </div>
                        <div className="diaporamaListePoints">
                            {
                                (listeImages.length > 1) && (
                                    listeImages.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`lienImageRealisation${index === indexDiaporama ? ' imageRealisationActive' : ''}`}
                                            onClick={() => changerImageDiaporama(index)}
                                        ></span>
                                    ))
                                )
                            }
                        </div>
                        <br />
                    </div>
                )}
            </div>
        </>
    );
}
