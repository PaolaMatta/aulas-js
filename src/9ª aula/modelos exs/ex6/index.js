let TAREFAS = [];

let contadorDeTarefas = 0;

function addTarefa(tarefa) {
  contadorDeTarefas++;
  TAREFAS.push({id: contadorDeTarefas, tarefa})
}

function mudaTarefa(id, novaTarefa) {
  const indiceTarefa = TAREFAS.findIndex((t) => t.id === id);
  TAREFAS[indiceTarefa].tarefa = novaTarefa;
}

function removeTarefa(id) {
  const novaLista = TAREFAS.filter( (tarefa) => tarefa.id !== id );
  TAREFAS = novaLista;
}

function exibeTarefas() {
  TAREFAS.forEach( (tarefa) => console.log(`ID: ${tarefa.id} Tarefa: ${tarefa.tarefa}`) );
}

addTarefa("Sonequinha <3");
addTarefa("Treino");
addTarefa("Cigarrinho");
exibeTarefas();
console.log("------------------");
removeTarefa(2);
exibeTarefas();
console.log("------------------");
addTarefa("Suicídio");
exibeTarefas();
console.log("------------------");
mudaTarefa(4, "Dar uma cagada");
exibeTarefas();
