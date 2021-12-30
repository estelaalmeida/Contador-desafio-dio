const cliqueIncrementar = document.getElementById("clique_incrementar");
const cliqueDecrementar = document.getElementById("clique_decrementar");
const cliqueZerar = document.getElementById("clique_zerar");
const c = document.getElementById("contador");

let contador = 0;

c.innerHTML= contador;

//Incremento do contador
cliqueIncrementar.addEventListener('click', function(){
    c.innerHTML = ++contador;
});

//Decremento do contador
cliqueDecrementar.addEventListener('click', function(){
    c.innerHTML = --contador;
});

//Zerar do contador
cliqueZerar.addEventListener('click', function(){
    c.innerHTML = contador = 0;
});

console.log("clique_incrementar");
console.log("c");