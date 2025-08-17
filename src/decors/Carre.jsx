export default function Carre({taille, x, y, couleur}) {
    const styleCarre = {
        position: "absolute",
        left: x,
        top: y,
        width: taille,
        height: taille,
        borderRadius: "15%",
        boxShadow: "16px 16px 30px rgba(0, 0, 0, 0.5), -8px -8px 20px rgba(0, 0, 0, 0.1)",
        zIndex: -1
    }

    if (!couleur) {
        styleCarre.backgroundImage = "linear-gradient(to bottom, var(--couleur-principale), var(--couleur-secondaire))"
    } else {
        styleCarre.backgroundColor = couleur
    }
    return <span style={styleCarre}>
    </span>
}