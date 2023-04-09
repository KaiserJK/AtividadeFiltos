const nameList = ["aline","Otavio","Camila","Nareba","Jean","Julio","Julio Rodalo","Rany","Ti"]

const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");
// searchField.addEventListener("input", inputHandler);
const btFiltrar = document.getElementById("btFiltrar");
const btAdicionar = document.getElementById("btAdicionar");
const btRemover = document.getElementById("btRemover");



filllist()
function filllist(list = nameList){
    listE1.innerHTML = "";
    for(let i=0; i< list.length; i++){
        let listItens = document.createElement("li");
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

function RemList(){
    
    if(searchField.value === ""){
        nameList.pop(searchField.value);
        filllist()
        alert("Ultimo membro Removido")
    }else{
        var x = searchField.value
        var y = nameList.indexOf(x)
        if (y<0){
            alert("membro não encontrado")
        }
        else{nameList.splice(y, 1);
            filllist()
            alert("Membro Removido")
        }
       
    }
}

btFiltrar.addEventListener("click",inputHandler);
btAdicionar.addEventListener("click",AddList);
btRemover.addEventListener("click",RemList);
