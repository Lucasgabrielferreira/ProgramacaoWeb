// QuerySelector
let titulo = window.document.querySelector('#titulo')
titulo.style.color = 'green';

//QuerySelectorAll
// let par = document.querySelectorAll('p');
// par[0].style.color = 'red';

let par = document.querySelectorAll('p')
for(let cont = 0; cont < par.length; cont++){
    par[cont].style.color = 'red';
}

let lis = document.querySelectorAll('li')
for(let i = 0; i < lis.length; i++){
    lis[i].style.color = "blue";
}