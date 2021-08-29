
let listaDeTarefas = []

function adicionar() {
    var campoTarefas = document.getElementById('addTarefas').value;
    if (!campoTarefas) {
        alert('Campo Vazio!')
    } else {
        listaDeTarefas = JSON.parse(localStorage.getItem('campoTarefas'));
        if (listaDeTarefas == null) {
            listaDeTarefas.push(campoTarefas);
        } else {
            listaDeTarefas.push(campoTarefas);
        }
        localStorage.setItem('campoTarefas', JSON.stringify(listaDeTarefas));
    }
}


function exibir() {
    var pegar = JSON.parse(localStorage.getItem('campoTarefas'))
    var table = document.getElementById("tabela");
    table.innerHTML = " ";
    for (let i in pegar) {
        table.innerHTML += '<tr><td>' + pegar[i] + '<td>' + '</tr>';
    }
    console.log(pegar)
}



