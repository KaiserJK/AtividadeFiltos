const nameList = ["aline","Otavio","Camila","Nareba","Jean","Julio","Julio Rodalo","Rany","Ti"]
var Identificador = -1
const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");
// searchField.addEventListener("input", inputHandler);
const btFiltrar = document.getElementById("btFiltrar");
const btAdicionar = document.getElementById("btAdicionar");
const btRemover = document.getElementById("btRemover");
const btSelecionar = document.getElementById("btSelecionar");



filllist()
function filllist(list = nameList){
    listE1.innerHTML = "";
    for(let i=0; i< list.length; i++){
        let listItens = document.createElement("li");
        if(i == Identificador){
            listItens.className = "alert alert-success"
        }else{
            listItens.className = "alert alert-light"
        }
        listItens.innerHTML = list[i];
        listE1.appendChild(listItens);
    }
}



function inputHandler(){
    const filteredList = nameList.filter(e1 => {
        const listItens = e1.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItens.includes(searchWord)
    })
    filllist(filteredList);
}
function AddList(){
    if(searchField.value === ""){
        alert("Campo Vazio")
    }else{
        nameList.push(searchField.value);
        filllist()
        alert("Membro Adicionado")
    }

}
function Selecionar(){
    if(Identificador > (nameList.length - 2)){
        Identificador = 0;
    }else{
        Identificador += 1;
    }

    filllist();
}

function RemList(){
    if(Identificador > (nameList.length - 2)){
        nameList.splice(Identificador, 1);
        Identificador -= 1;
        filllist();
    }else{
        nameList.splice(Identificador, 1);
        filllist();
    }

    }

btFiltrar.addEventListener("click",inputHandler);
btAdicionar.addEventListener("click",AddList);
btRemover.addEventListener("click",RemList);
btSelecionar.addEventListener("click",Selecionar);