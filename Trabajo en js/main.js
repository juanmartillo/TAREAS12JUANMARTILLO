alert("Deseas conocer el contenido")
const contenido = document.getElementById("contenido");

let nombre = "Dominicano Buenas noches";
let edad = 12;
let edades = [23,45,2,42,89]
// contenido.innerHTML= `<h2>${nombre}</h2>`;
// contenido.innerHTML += `<h3>${edad}</h3>`;

addContent(`<h2>${nombre}</h2><h3>${edad}</h3>`);

for(let i = 0; i<edades.length; i++){
    addContent(`<h3>la edad es de ${edades[i]} años</h3>`);
}
function addContent(newContent){
    contenido. innerHTML += newContent;
}


// if (edad > 18){
//     alert("Puedes entrar")
// }else if(edad > 13){
//     alert("Puedes entrar con un adulto ")
// }else{
//     alert("No puedes entrar")
// }