

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
    console.log(a); // simulando erro
    console.log('Fecchando o arquivo');
} catch (error) {
    console.log('ERRO! Tratando o erro');
}finally{
    console.log('FINALLY: Sempre serei executado');
}