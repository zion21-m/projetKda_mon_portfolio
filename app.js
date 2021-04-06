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
            homes__name.appendChild(names);
            aboutMe__identity__name.appendChild(name);
            aboutMe__identity__profile.appendChild(profile);
            aboutMe__identity__email.appendChild(email);
            aboutMe__identity__phone.appendChild(phone);
        }
    })
}

// window.onload = function () {
//     const icone_contacts__logo = document.querySelector(".icone_contacts__logo");
//     fetch("http://localhost:3000/icone_contacts")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         for (let i of data) {
//           let content = document.createTextNode(`${i.icones_contacts__logo}`);
//           icone_contacts__logo.appendChild(content);
//         }
//       });