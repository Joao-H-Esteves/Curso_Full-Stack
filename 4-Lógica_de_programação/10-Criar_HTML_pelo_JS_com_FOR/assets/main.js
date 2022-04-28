const elementos =[ //Elementos a serem criados
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

// const endHTML= document.querySelector('.container');
// const criarElemnt = document.createElement(tag);

const [{item1},{item2},{item3},{item4}] = elementos;

 for(i=0 ; i < elementos.length; i++){
     console.log(i, ' = ', elementos[i]);
     console.log([i][tag]);

 }
 //console.log(typeof(elementos));//objeto