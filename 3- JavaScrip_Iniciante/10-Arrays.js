//INDEXAÇÃO POR ELEMENTOS
        //INDICE   0        1       2       3
const alunos = ['Luis', 'Pedro','Carlos','Roberta'];

console.log(alunos);
console.log(alunos[2]);

//EDITAR UM INDICE 
alunos [0] = 'Luiz Carlos';
console.log(alunos);

// ADICIONAR UM NOVO INDICIE
alunos [4] = 'Ana';
console.log(alunos);

alunos[alunos.length] = 'Eduardo';//para não precisar especificar o indicie
console.log(alunos);

alunos.push('Otavio');//forma automatica de adição
console.log(alunos);

//MUDA UM ELEMENTO PARA O INICIO DO ARRAY [0]
alunos.unshift('Otavio');
console.log(alunos);
alunos.unshift('Roberta');
console.log(alunos);

//APAGAR  ELEMENTO DO ARRAY
alunos.pop();   //APAGA O ULTIMO ELEMENTO
console.log(alunos);

let removido = alunos.pop(); // consegue aguardar o elemento removido em outra variavel.
console.log(removido);

alunos.shift(); //APAGA O PRIMEIRO ELEMENTO DO ARRAY
console.log(alunos);

delete alunos [4]; // O elemento fica vazio e não move os indicies
console.log(alunos);

//TAMANHO DO ARRAY
console.log(alunos.length);

// MOSTRANDO APENAS PARTE DO ARRAY (fatiamento)

console.log(alunos.slice(0,3));//colocar sempre 1 indice a mais

console.log(alunos.slice(0,-1)); // todos menos o ultimo elemento

//VERIFICAR SE A VARIAVEL É UM ARRAY

console.log( typeof alunos); // array retorna como objeto
console.log(alunos instanceof Array); // true ou false

