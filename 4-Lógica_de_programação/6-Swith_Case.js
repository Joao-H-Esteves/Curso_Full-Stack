const data = new Date('1984-06-14');
const diaDaSemana = data.getDay();
const VarFunction = convertDiaSemana(diaDaSemana);

function convertDiaSemana(diaDaSemana) {
    //Para swicth dentro de funções o break é opcional
    switch (diaDaSemana) {
        case 0:
            return `Domingo`;
            //break;
        case 1:
            return `Segunda-feira`;        
        case 2:
            return `Terça-feira`;
        case 3:
            return `Quarta-feira`;
        case 4:
            return `Quinta-feira`;
        case 5:
            return `Sexta-feira`;
        case 6:
            return `Sabado`;
        default:
            return `Erro`;
    }
}
console.log(diaDaSemana,VarFunction);
