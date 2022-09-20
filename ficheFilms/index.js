const BASE_URL = window.location.origin;
const FILM_URI = "ficheFilms"
const SEP = "/"
const HTML = ".html"

const FILMS = ["arriety", "chateauDansLeCiel", "ayaEtLaSorciere", "laCollineAuxCoquelicots", "leTombeauDesLucioles", "leChateauAmbulant", "kiki", "totoro", "yamadas", "makingOf", "pompoko", "ponyo", "porcoRosso", "mononoke", "chihiro", "terremer", "royaumeChat", "tortueRouge", "kaguya", "leVent", "marnie", "oreille"];


function next() {
    const name = getCurrentFilmName();
    let index = getIndex(name);

    if (index + 1 == FILMS.length) {
        index = 0;
    } else {
        index++
    }

    window.open(BASE_URL + SEP + FILM_URI + SEP + FILMS[index] + HTML, "_self");
}

const previous = () => {
    const name = getCurrentFilmName();
    let index = getIndex(name);

    if (index == 0) {
        index = FILMS.length - 1;
    } else {
        index--
    }

    window.open(BASE_URL + SEP + FILM_URI + SEP + FILMS[index] + HTML, "_self");
}

function getIndex(name) {
    let index = 0;
    for (let i = 0; i < FILMS.length; i++) {
        if (name == FILMS[i]) {
            index = i;
        }
    }
    return index;
}

function getCurrentFilmName() {
    const currentUrl = window.location.href;
    const fileName = currentUrl.substring(currentUrl.lastIndexOf(SEP) + 1);
    const name = fileName.substring(0, fileName.lastIndexOf(HTML));
    return name;
}