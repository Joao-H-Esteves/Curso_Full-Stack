

try {
    //Tenta executar se não ser erro
} catch (error) {
    //Executa caso haja erros
} finally{
    //Vai rodar sempre!
}

//=====================================================

//resolvendo um erro em um arquivo:

try {
    console.log('Abrindo o arquivo');
    console.log('Manipulando o arquivo');
    //console.log(a); // simulando erro
    console.log('Fecchando o arquivo');


} catch (error) {
    console.log('ERRO! Tratando o erro');
}finally{
    console.log('FINALLY: Sempre serei executado');
}

//==================================================
console.log('');

//EXERCICIO


function mostraHora(data) {
    
    if (data && !(data instanceof Date)) {
        //se não for objetos de data, irá dar erro
        throw new TypeError ('Esperando uma Instancia de Date');
    }
    if(!data){
        data = new Date()
        // Se não enviar uma data ele gera automaticamente
    }
    return data.toLocaleTimeSpring('pt-BR',
    {hour: '2-digit',
    minute:'2-digit',
    second: '2-digit',
    hour12: false
    
    });

    
}

try {
    const data = new Date ('14-06-1984 09:00:10')
    let hora = mostraHora(data);
    console.log(hora);
    
} catch (error) {
    console.log('Deu erro na execução');
    console.log(error);
}  finally{
    console.log('____Fim da execução____');
}  