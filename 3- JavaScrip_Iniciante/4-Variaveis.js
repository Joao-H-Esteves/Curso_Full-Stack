/*TRANSFORMAR:
letra A= B , letra B= C , letra C=A*/

let letraA = 'A';   //B
let letraB = 'B';   //C
let letraC = 'C';   //A
const coringa =  letraA;


letraA = letraB;
letraB = letraC;
letraC = coringa;

console.log(letraA, letraB, letraC);

// USANDO STRINGS [ ]
let letraA1 = 'A';   //B
let letraB1 = 'B';   //C
let letraC1 = 'C';   //A

[letraA1, letraB1, letraC1] = [letraB1, letraC1, letraA1]

console.log(letraA1, letraB1, letraC1);