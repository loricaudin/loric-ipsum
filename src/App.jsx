import './App.css'
import Accueil from './accueil/Accueil'
import Presentation from './presentation/Presentation'
import Parcours from './parcours/Parcours'
import Competences from './competences/Competences'
import Technologies from './technologies/Technologies'
import Projets from './projets/Projets'
import Contact from './contact/Contact'
import Carre from './decors/Carre'
// import Header from "./Header"
// import Footer from "./Footer"

function App() {

  return (
    <>
      {/* <Carre taille="300px" x="10px" y="10px"/>
      <Carre taille="70px" x="500px" y="10px" couleur="white"/> */}
      <Accueil/> {/* TODO : Style */}
      <Presentation/>
      <Parcours/>
      <Competences/> {/* TODO */}
      <Technologies/> {/* TODO */}
      <Projets/> {/* TODO */}
      <Contact/> {/* TODO */}
    </>
  )
}

export default App
