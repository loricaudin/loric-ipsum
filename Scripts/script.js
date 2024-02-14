function ouvrirMenuNav(e) {
    e.classList.toggle("ouvert");
    let nav = document.querySelector("nav");
    nav.classList.toggle("nav-ouvert");
}