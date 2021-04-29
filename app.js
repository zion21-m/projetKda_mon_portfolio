// Gestion du défilement sur la page. Pour savoir quand on est sur une section

const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("header .menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navList.forEach((a) => {
    a.classList.remove("activ");
    if (a.classList.contains(current)) {
      a.classList.add("activ");
    }
  });
});

// animation page accueil sur les professions. Professions prises dans le fichier json

let profession = document.getElementById("homes__profession");
let myProfessions = [];

fetch(
  "https://my-json-server.typicode.com/zion21-m/projetKda_mon_portfolio/professions"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (professions) {
    for (let profession of professions) {
      myProfessions.push(profession.name);
    }

    let index1 = 0;
    let index2 = 0;

    window.setInterval(() => {
      if (index2 == myProfessions[index1].length) {
        index2 = 0;
        index1++;

        profession.textContent = "";
      }
      if (index1 == myProfessions.length) {
        index1 = 0;
      }
      // profession.innerHTML += `${MyProfessions[index1][index2]}`
      profession.appendChild(
        document.createTextNode(`${myProfessions[index1][index2]}`)
      );

      index2++;
    }, 200);
  });

// récupération des éléments dans la base des données et intéraction avec le dom

window.onload = function () {
  const homes__name = document.querySelector("#homes__name");
  const aboutMe__identity__name = document.querySelector(
    ".aboutMe__identity__name"
  );
  const aboutMe__identity__profile = document.querySelector(
    ".aboutMe__identity__profile"
  );
  const aboutMe__identity__email = document.querySelector(
    ".aboutMe__identity__email"
  );
  const aboutMe__identity__phone = document.querySelector(
    ".aboutMe__identity__phone"
  );
  const aboutMe__me__biography = document.querySelector(
    "#aboutMe__me__biography"
  );
  const aboutMe__picture = document.querySelector(".aboutMe__picture img");

  let contactMe__tel = document.querySelector("#contactMe__tel");
  let contactMe__mail = document.querySelector("#contactMe__mail");

  let contactMe__pays = document.querySelector("#contactMe__pays");
  let contactMe__address = document.querySelector("#contactMe__address");

  // dans le premier élément de la ressource. identité

  fetch(
    "https://my-json-server.typicode.com/zion21-m/projetKda_mon_portfolio/identite"
  )
    .then(function (response) {
      return response.json();
    })
    // fetch("http://localhost:3000/identite").then(function(response){
    //     return response.json();
    // })
    .then(function (identites) {
      for (let identite of identites) {
        let name = document.createTextNode(
          `${identite.prenom} ${identite.nom}`
        );
        let names = document.createTextNode(
          `${identite.prenom} ${identite.nom}`
        );
        let profile = document.createTextNode(`${identite.profile}`);
        let email = document.createTextNode(`${identite.email}`);
        let phone = document.createTextNode(`${identite.telephone}`);
        let biography = document.createTextNode(`${identite.biographie}`);

        aboutMe__picture.setAttribute("src", identite.image);

        homes__name.appendChild(names);
        aboutMe__identity__name.appendChild(name);
        aboutMe__identity__profile.appendChild(profile);
        aboutMe__identity__email.appendChild(email);
        aboutMe__identity__phone.appendChild(phone);
        aboutMe__me__biography.appendChild(biography);

        let contactPhone = document.createElement("a");
        contactPhone.classList.add("coulisse");
        contactPhone.setAttribute("href", identite.hreftel);

        let contactPhoneLogo = document.createElement("i");
        contactPhoneLogo.classList.add("large", "phone", "square", "icon");

        contactPhoneText = document.createElement("span");
        contactPhoneText.classList.add("contactMe--blue");

        contactPhoneText.textContent = `${identite.telephone}`;

        contactMe__tel.appendChild(contactPhone);
        contactPhone.appendChild(contactPhoneLogo);
        contactPhone.appendChild(contactPhoneText);

        let contactMail = document.createElement("a");
        contactMail.classList.add("coulisse");
        contactMail.setAttribute("href", identite.mailto);

        let contactMailLogo = document.createElement("i");
        contactMailLogo.classList.add("large", "envelope", "icon");

        contactMe__mail.appendChild(contactMail);
        contactMail.appendChild(contactMailLogo);

        let contactMailText = document.createElement("span");
        contactMailText.classList.add("contactMe--blue");
        contactMail.appendChild(contactMailText);
        contactMailText.textContent = `${identite.email}`;

        let contactMe__paysLogo = document.createElement("i");
        contactMe__paysLogo.classList.add("huge", "congo", "flag");
        contactMe__pays.appendChild(contactMe__paysLogo);

        let contactMe__paysText = document.createElement("span");
        contactMe__paysText.textContent = `${identite.pays}`;
        contactMe__pays.appendChild(contactMe__paysText);

        let contactMe__addressLogo = document.createElement("i");
        contactMe__addressLogo.classList.add("fas", "fa-map-marker-alt");
        contactMe__address.appendChild(contactMe__addressLogo);

        let contactMe__addressText = document.createElement("span");
        contactMe__addressText.textContent = `  ${identite.adresse}`;
        contactMe__address.appendChild(contactMe__addressText);
      }
    });

  // dans le deuxième élément compétence

  let listeCompetences = document.querySelector("#aboutMe__skills");

  fetch(
    "https://my-json-server.typicode.com/zion21-m/projetKda_mon_portfolio/competences"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (competences) {
      for (let competence of competences) {
        let aboutMe__skills1 = document.createElement("div");
        let aboutMe__skillsLabel = document.createElement("label");
        let aboutMe__skillsProgress = document.createElement("progress");
        aboutMe__skillsProgress.classList.add("progress__bar--settings");
        aboutMe__skillsProgress.classList.add("aboutMe__skills--presentation");
        aboutMe__skillsLabel.textContent = `${competence.nomCompetence}`;
        aboutMe__skillsProgress.setAttribute(
          "value",
          competence.pourcentageCompétence
        );
        aboutMe__skillsProgress.setAttribute("max", 100);

        listeCompetences.appendChild(aboutMe__skills1);
        aboutMe__skills1.appendChild(aboutMe__skillsLabel);
        aboutMe__skills1.appendChild(aboutMe__skillsProgress);
      }
    });

  let listProjects = document.querySelector("#projects__made");

  fetch(
    "https://my-json-server.typicode.com/zion21-m/projetKda_mon_portfolio/Projets"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (projets) {
      for (let projet of projets) {
        let column = document.createElement("div");
        column.classList.add("column");

        let card = document.createElement("div");
        card.classList.add("ui", "fluid", "card");

        let image = document.createElement("div");
        image.classList.add("image");

        let img = document.createElement("img");
        img.setAttribute("src", projet.src);
        img.setAttribute("alt", projet.alt);

        let content = document.createElement("div");
        content.classList.add("content");

        let header = document.createElement("a");
        header.classList.add("header");
        header.textContent = `${projet.titreProjet}`;
        header.setAttribute("href", projet.href);

        let description = document.createElement("div");
        description.classList.add("description");

        let paragraph = document.createElement("p");
        paragraph.textContent = `${projet.descriptionProjet}`;

        listProjects.appendChild(column);
        column.appendChild(card);
        card.appendChild(image);
        card.appendChild(content);
        image.appendChild(img);
        content.appendChild(header);
        content.appendChild(description);
        description.appendChild(paragraph);
      }
    });

  let listeLiensSociaux = document.querySelector("#liensSociaux");

  fetch(
    "https://my-json-server.typicode.com/zion21-m/projetKda_mon_portfolio/liensSociaux"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (liensSociaux) {
      for (let lienSocial of liensSociaux) {
        let lien = document.createElement("a");
        lien.classList.add("coulisse");
        lien.setAttribute("href", lienSocial.href);

        let logoLien = document.createElement("i");
        logoLien.classList.add(lienSocial.nom, "icon", "large");

        listeLiensSociaux.appendChild(lien);
        lien.appendChild(logoLien);
      }
    });
};
