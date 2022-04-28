// ESTRUTURA DE REPETIÇÃO

//FOR classico

for (let index = 0; index < 7; index++) {
        //i= index

    console.log ('Linha' ,index);
}
// NÃO TEM ';' NO FINAL

for (let i= -30; i <20; i+=10){
    console.log(`Passo ${i}`);
}

for (let i =0  ; i <10 ; i++) {
    const par = i % 2 === 0? 'par':'impar';
        console.log(i,par);
}
//---------------------------------------------
console.log(/* espaçamento */);

//percorrendo um Array
const frutas = [ 'maca', 'banana', 'limao', 'pera'];
console.log ('qtd de elementos',frutas.length); // =4

for (let i=0; i < frutas.length; i++){
    console.log (`Indice ${i} = ${frutas[i]}`);
}