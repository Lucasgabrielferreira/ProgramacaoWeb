// JavaScript e DOM

window.alert('Bem Vindo ao DOM');

// Criar um elemento <h1>
let article = document.createElement('article');
let section = document.createElement('section');


let titulo01 = document.createElement('h1');
let titulo02 = document.createElement('h1');

let paragrafo01 = document.createElement('p');
let paragrafo02 = document.createElement('p');

titulo01.innerHTML = "Lucas Gabriel Ferreira"
titulo01.style.borderBottom = 'solid 3px #000';
titulo01.style.fontSize = '50px';

titulo02.innerHTML = "Programador Junior"
titulo02.style.borderBottom = 'solid 3px #000';
titulo02.style.fontSize = '50px';


paragrafo01.innerHTML = "Dom Dom Dom Dom"
paragrafo01.style.color = "red";
paragrafo01.style.borderBottom = 'solid 2px #000';
paragrafo01.style.fontSize = '20px';

paragrafo02.innerHTML = "C#, HTML, CSS, JavaScript"
paragrafo02.style.color = "red";
paragrafo02.style.borderBottom = 'solid 2px #000';
paragrafo02.style.fontSize = '20px'

document.title = 'DOM';

document.body.appendChild(section);
document.body.appendChild(article);

section.appendChild(titulo01);
section.appendChild(paragrafo01);

article.appendChild(titulo02);
article.appendChild(paragrafo02);




