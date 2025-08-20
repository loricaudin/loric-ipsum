import './App.scss'
import Accueil from './accueil/Accueil'
import Presentation from './presentation/Presentation'
import Parcours from './parcours/Parcours'
import Competences from './competences/Competences'
import Technologies from './technologies/Technologies'
import Projets from './projets/Projets'
import Contact from './contact/Contact'
import Decorations from './decors/Decorations'
import Header from "./Header"
import Footer from "./Footer"

function App() {

    if (window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
        document.body.className = "sombre anime";
    }

    return (
        <>
            <Header />
            <main>
                <Accueil />
                <Presentation />
                <Parcours />
                <Competences />
                <Technologies />
                <Projets />
                <Contact />
            </main>
            <Footer />

            <Decorations />
        </>
    )
}

export default App
