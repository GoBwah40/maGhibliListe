const CARACSPECIAUX = [null, "/", "*", ",", "?", ";", ".", ":", "!", "§", "%", "$", "(", "#", "[", "{", "}", "]", ")", "@", "+", "=", "_"];
let research = "";

//fiche
const FILMS = document.querySelectorAll(".items")
const FILMSTABLEAU = []
for (film of FILMS) {
    FILMSTABLEAU.push(film);
}

//Div
const FICHES = document.querySelectorAll(".article");
const FICHESTABLEAU = [];
for (fiche of FICHES) {
    FICHESTABLEAU.push(fiche);
}

document.addEventListener("input", (e) => {
    const listeFilmsCacher = [];
    const listeFilmsMontrer = [];
    research = e.target.value;

    research.toLowerCase();
    for (const film of FILMSTABLEAU) {
        if (!film.alt.includes(research)) {
            listeFilmsCacher.push(film);
        } else {
            listeFilmsMontrer.push(film)
        }
    }
    for (const film of listeFilmsCacher) {
        film.parentElement.style.display = "none";
    }
    for (const film of listeFilmsMontrer) {
        film.parentElement.style.display = "";
    }
});