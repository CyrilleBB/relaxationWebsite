const ambiance = document.querySelector("#ambiance");

const mer = document.querySelector(".mer");
const merUrl = 'url("./images/mer.jpg")';
const merSon = "sons/mer.mp3";
changeBackground(mer, merUrl, merSon);

const montagne = document.querySelector(".montagne");
const montagneUrl = 'url("./images/montagne.jpg")';
const montagneSon = "sons/montagne.mp3";
changeBackground(montagne, montagneUrl, montagneSon);

const pluie = document.querySelector(".pluie");
const pluieUrl = 'url("./images/pluie.jpg")';
const pluieSon = "sons/pluie.mp3";
changeBackground(pluie, pluieUrl, pluieSon);

const campagne = document.querySelector(".campagne");
const campagneUrl = 'url("./images/campagne.png")';
const campagneSon = "sons/campagne.mp3";
changeBackground(campagne, campagneUrl, campagneSon);

const foret = document.querySelector(".foret");
const foretUrl = 'url("./images/foret.jpg")';
const foretSon = "sons/foret.mp3";
changeBackground(foret, foretUrl, foretSon);

function changeBackground(background, url, son) {
  background.addEventListener("click", function() {
    document.body.style.backgroundImage = url;
    ambiance.innerHTML = `<audio src=${son} autoplay loop/>`;
  });
}
