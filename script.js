let body = document.querySelector('body');
let link = document.querySelector("#link").value;
let name1 = document.querySelector("#name");
let pic1 = document.querySelector("#pic");
let button = document.querySelector("#button");
let divname = document.createElement('div');
let nametrack = document.createElement('p');
let forpic = document.createElement('div');
function myfunc(){

// let pic = document.createElement('img');
// pic.setAttribute('src',pic1.value);
// pic.setAttribute("id", "kartinka")
forpic.style.width = '200px'
forpic.style.height = '200px'
forpic.style.backgroundImage = url(${pic1.value})
forpic.style.backgroundSize = 'cover'
forpic.style.backgroundPosition = 'center'
body.appendChild(forpic);
// forpic.appendChild(pic);


nametrack.textContent = name1.value;
body.appendChild(divname);
divname.appendChild(nametrack);
nametrack.classList.add('font');
}
button.addEventListener('click', myfunc);

function reset(){
body.removeChild(divname);
body.removeChild(forpic);
}
sbros.addEventListener('click', reset);