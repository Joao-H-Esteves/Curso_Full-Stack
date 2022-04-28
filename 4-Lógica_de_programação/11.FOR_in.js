// FOR in => LÊ OS INDICES OU CHAVES DOS OBJETOS

const frutas= ['maca','banana','pera','uva',''];

for (let i= 0; i <frutas.length;i++){
    console.log(i) // incrementa +1 por laço
    console.log(frutas[i]);
}//for padrão


for (let i in frutas){
    console.log(i); // lê o indice dos elementos APENAS
    console.log (frutas[i]);
}//forin
