const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('header .menu a');
console.log(navList)

window.addEventListener('scroll', ()=>{
    let current = '';

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id')
        }
    })
    navList.forEach( a => {
        a.classList.remove('activ');
        if(a.classList.contains(current)) {
            a.classList.add('activ');
        }
    })
})

// animation page accueil sur les métiers

let profession = document.getElementById('homes__profession');
const myProfessions = ['Développeur frontend ','UI Designer','UX Designer'];

let index1 = 0;
let index2 = 0;

window.setInterval(()=> {
    if(index2 == myProfessions[index1].length) {
        index2 = 0;
        index1++;
        
        profession.textContent = '';
        // profession = document.createTextNode(`${''}`);
    }
    if(index1 == myProfessions.length) {
        index1 = 0;
    }
    // profession.innerHTML += `${MyProfessions[index1][index2]}`
    profession.appendChild(document.createTextNode(`${myProfessions[index1][index2]}`))

    index2++;
}, 200);

// récupération des éléments dans la base des données

window.onload = function () {
    const homes__name = document.querySelector("#homes__name");
    const aboutMe__identity__name = document.querySelector(".aboutMe__identity__name");
    const aboutMe__identity__profile = document.querySelector(".aboutMe__identity__profile");
    const aboutMe__identity__email = document.querySelector(".aboutMe__identity__email");
    const aboutMe__identity__phone = document.querySelector(".aboutMe__identity__phone");
    const aboutMe__me__biography = document.querySelector("#aboutMe__me__biography");

    // dans le premier élément de la ressource. identité

    fetch("http://localhost:3000/identite").then(function(response){
        return response.json();
    })
    .then(function (data) {
        for (let i of data) {
            let name = document.createTextNode(`${i.prenom} ${i.nom}`);
            let names = document.createTextNode(`${i.prenom} ${i.nom}`);
            let profile = document.createTextNode(`${i.profile}`);
            let email = document.createTextNode(`${i.email}`);
            let phone = document.createTextNode(`${i.telephone}`);
            let biography = document.createTextNode(`${i.biographie}`);
           
            homes__name.appendChild(names);
            aboutMe__identity__name.appendChild(name);
            aboutMe__identity__profile.appendChild(profile);
            aboutMe__identity__email.appendChild(email);
            aboutMe__identity__phone.appendChild(phone);
            aboutMe__me__biography.appendChild(biography);
        }
    })

    const aboutMe__skills_1 = document.querySelector('#aboutMe__skills_1');
    const aboutMe__skills_2 = document.querySelector('#aboutMe__skills_2');
    const aboutMe__skills_3 = document.querySelector('#aboutMe__skills_3');
    const aboutMe__skills_4 = document.querySelector('#aboutMe__skills_4');

    // dans le deuxième élément compétence
    fetch("http://localhost:3000/competences").then(function(response){
        return response.json();
    })
    .then(function(data) {
        for (let i of data) {
            let skills1 = document.createTextNode(`${i.html} ${i.pourcentageHtml}`);
            let skills2 = document.createTextNode(`${i.css} ${i.pourcentageCss}`);
            let skills3 = document.createTextNode(`${i.javascript} ${i.pourcentageJavascript}`);
            let skills4 = document.createTextNode(`${i.python} ${i.pourcentagePython}`);

            aboutMe__skills_1.appendChild(skills1);
            aboutMe__skills_2.appendChild(skills2);
            aboutMe__skills_3.appendChild(skills3);
            aboutMe__skills_4.appendChild(skills4);
        }
    })

    // const projects__1_image = document.querySelector('#projects__1_image img');
    // const projects__1_title = document.querySelector('#projects__1_title');
    // const projects__1_description = document.querySelector('#projects__1_description');

    // const projects__2_image = document.querySelector('#projects__2_image img');
    // const projects__2_title = document.querySelector('#projects__2_title');
    // const projects__2_description = document.querySelector('#projects__2_description');

    // const projects__3_image = document.querySelector('#projects__3_image img');
    // const projects__3_title = document.querySelector('#projects__3_title');
    // const projects__3_description = document.querySelector('#projects__3_description');

    // fetch("http://localhost:3000/Projets").then(function(response){
    //     return response.json();
    // })
    // .then(function(data) {
    //     for (let i = 0; i<= data.length; i++) {
    //         if (i=0) {
    //             let projects1__image = document.createTextNode(`${data[i].image}`);
    //             let projects1__title = document.createTextNode(` ${data[i].titreProjet}`);
    //             let projects1__description = document.createTextNode(`${data[i].descriptionProjet}`);

    //             projects__1_image.appendChild(projects1__image);
    //             projects__1_title.appendChild(projects1__title);
    //             projects__1_description.appendChild(projects1__description);
    //         }
    //         if (i=1) {
    //             let projects2__image = document.createTextNode(`${data[i].image}`)
    //             let projects2__titre = document.createTextNode(` ${data[i].titreProjet}`)
    //             let projects2__description = document.createTextNode(`${data[i].descriptionProjet}`)

    //             projects__2_image.appendChild(projects__1_image);
    //             projects__2_title.appendChild(projects__1_title);
    //             projects__2_description.appendChild(projects__1_title);
    //         }
    //         if (i=2) {
    //             let projects3__image = document.createTextNode(`${data[i].image}`)
    //             let projects3__titre = document.createTextNode(` ${data[i].titreProjet}`)
    //             let projects3__description = document.createTextNode(`${data[i].descriptionProjet}`)

    //             projects__3_image.appendChild(projects__1_image);
    //             projects__3_title.appendChild(projects__1_title);
    //             projects__3_description.appendChild(projects__1_title);
    //         }
    //     }
    // })
}

