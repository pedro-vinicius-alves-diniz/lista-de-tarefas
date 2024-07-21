let contador = 0;
let inputValue = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaTarefas')

function addTarefa(){
    // PEGAR O VALOR DIGITADO NO INPUT
    
    let valorInput = inputValue.value

    //ESTE VALOR NÃO PODE SER VAZIO, NULO OU INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        
        //ADICIONANDO MAIS UM NO contador
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="material-symbols-outlined">
                radio_button_unchecked
            </i>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>

        <div class="item-button">
            <button onclick="deletar(${contador})" class="delete-btn">
                <i class="material-symbols-outlined">delete</i>
            </button>
        </div>
    </div>`;
    
        

    //ADICIONANDO NA AREA DE LISTA DE TAREFAS
    main.innerHTML += novoItem;

    //ZERANDO O INPUT E COLOCAR FOCO NELE
    inputValue.value = "";
    inputValue.focus();

    //CONSOLE.LOG
    console.log("A tarefa " +valorInput+ " foi adicionada com sucesso. ID: "+contador)

    } 
}

//FUNÇÃO PARA DELETAR UMA TAREFA
function deletar(id){
    console.log(id)
    var tarefa = document.getElementById(id);

    tarefa.remove()

    //CONSOLE.LOG 
    console.log("A tarefa de id "+id+ " foi deletado com sucesso")
}

//FUNÇÃO PARA MARCAR COMO CONCLUIDA UMA TAREFA
function marcarTarefa(id){
    console.log(id)

    //ATRIBUINDO A VARIAVEL A TAREFA A SER MARCADA COMO CONCLUIDA
    var item = document.getElementById(id);

    //PEGANDO A CLASSE DA TAREFA PEGA
    var classe = item.getAttribute('class')
    var icone = document.getElementById("icone_"+id)

    if(classe == "item"){
        //MARCANDO A TAREFA CASO NÃO ESTEJA MARCADA
        item.classList.add("clicado");
        
        icone.innerHTML = "check_circle";

        item.parentNode.appendChild(item);
        
    }else{
        //DESMARCANDO A TAREFA CASO NÃO ESTEJA MARCADA
        item.classList.remove("clicado");
        icone.innerHTML = "radio_button_unchecked";
    };

    //CONSOLE.LOG
    console.log(classe);
    console.log("A tarefa de id "+id+ " foi concluida com sucesso");
}

//ATIVANDO FUNÇÃO PARA PODER ADICIONAR CLICANDO A TECLA ENTER
inputValue.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});