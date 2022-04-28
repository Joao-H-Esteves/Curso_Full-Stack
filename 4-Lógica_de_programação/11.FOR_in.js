// FOR in => LÊ OS INDICES OU CHAVES DOS OBJETOS

//Exemplo 1 com Array
const frutas= ['maca','banana','pera','uva',''];

for (let i= 0; i <frutas.length;i++){
    console.log(i) // incrementa +1 por laço
    console.log(frutas[i]);
}//for padrão


for (let i in frutas){
    console.log(i); // lê o indice dos elementos APENAS
    console.log (frutas[i]);
}//forin


//Exemplo 2 com Objeto ++++++++++++++++++

const pessoa = {
    nome:'Joao',
    sobrenome: 'Esteves',
    idade: 38,
    mat: 2021216861
};
console.log (pessoa.nome)// 1- formas comuns de acessar as chaves
console.log (pessoa['nome']);// 2- formas comuns de acessar as chaves
for(let chave in pessoa){
    console.log(chave); // leu as chaves nome ,sobrenome ,idade,mat.
    console.log (pessoa[chave]);//USANDO O FOR IN
    //leu o conteudo da chave
}