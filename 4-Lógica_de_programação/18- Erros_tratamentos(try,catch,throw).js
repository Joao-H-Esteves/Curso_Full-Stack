// TRY & CATCH

//SE OCORRER UM ERRO NO BLOCO TRY, O CATCH SERÁ EXECUTADO

try{ // tentar reproduzir

        console.log(euNaoExisto);
        //vai tentar reproduzi e ao dar erro cai para a linha catch
    
} catch(err){ // caso não consiga irá reproduzir o catch

    console.log('"euNaoExisto", ainda não está definido');

}
// para ver o problema do erro é só executar a variavel "err"

//console.log(err);// mostrando o erro
console.log('');
//=============================================================

//THROW

function soma(x, y) {
    if (typeof x !== 'number'|| typeof y !==  'number') {
        throw ('"x" e "y" precisam ser numeros.');
    }
    return x + y;
}

console.log(soma (1, 2));
//console.log(soma (1, '2'));
console.log('');
//================================================

// USANDO O TRY CATCH E THROW JUNTOS

function subtrai(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
    throw new Error ('Ambos numeros tem de serem numéricos');
    }
    return a - b;
}

try {
    console.log(subtrai(3 , 2));
    console.log(subtrai(3 , "a"));
} catch (error) {
console.log(error); // nunca divulgar erros aos usuarios
console.log('Mostrar sempre algo mais amigavel para o ususario');
}