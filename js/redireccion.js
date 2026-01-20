//Encontramos los id's de redireccion en el documento.
const py = document.getElementById("irPy");
const js = document.getElementById("irJS");
const db = document.getElementById("irDB");
const ht = document.getElementById("irHTML");
//Empiezo a crear funciones para definir cada redireccion.
function rePy(){
    py.addEventListener('click', () =>{
        let inputPy = Number(prompt("Ingrese la semana que desea ver: "));
        switch(inputPy){
            case 1:
            window.location.href = "https://github.com/sixorca00-collab/UserHistoy"
            break;
            case 2:
            window.location.href = "https://github.com/sixorca00-collab/UserHistoy"
            break;
            case 3:
            window.location.href = "https://github.com/sixorca00-collab/UserHistoy"
            break;
            default:
                alert("ingrese una opcion valida.");
        }
    })
};
function reJS(){
    js.addEventListener('click', () =>{
        let inputJS = Number(prompt("Ingrese la semana que desea ver: "));
        switch(inputJS){
            case 1:
            window.location.href = ""
            break;
            case 2:
            window.location.href = "https://github.com/sixorca00-collab/S2M3-JS"
            break;
            case 3:
            window.location.href = ""
            break;
            default:
                alert("ingrese una opcion valida.");
        }
    })
};
function reDB(){
    db.addEventListener('click', () =>{
        let inputDB = Number(prompt("Ingrese la semana que desea ver: "));
        switch(inputDB){
            case 1:
            window.location.href = ""
            break;
            case 2:
            window.location.href = ""
            break;
            case 3:
            window.location.href = ""
            break;
            default:
                alert("ingrese una opcion valida.");
        }
    })
};
//Para HTML ya que solo tocamos el "Portafolio" pongo una sola redireccion, no hay mayores ajustes la true 
function reHTML(){
    ht.addEventListener('click', ()=>{
        window.location.href = "https://github.com/sixorca00-collab/-Riwi-Training-Modulo2"
    })
}

rePy();
reJS();
reDB();
reHTML();