let listeCompetences = document.querySelector("#listeCompetences");

fetch("http://localhost:3000/competences")
.then(function(respons) {
    return respons.json();
})
.then(function(competences) {
    for (const competence of competences) {

        let carteCompetence = document.createElement("div");

        let descriptionCompetence = document.createElement("p");
        descriptionCompetence.textContent = `${competence.nomCompetence} : ${competence.pourcentageCompétence}`;

        let imageCompetence = document.createElement("img");
        imageCompetence.setAttribute("src", `${competence.image}`);
        imageCompetence.width = 200;

        listeCompetences.appendChild(carteCompetence);
        carteCompetence.appendChild(descriptionCompetence);
        descriptionCompetence.appendChild(imageCompetence);
    }
});