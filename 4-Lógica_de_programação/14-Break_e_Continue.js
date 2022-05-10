//COMANDOS QUE FUNCIONAM EM QUALQUER LAÇO DE REPETIÇÃO

const num = [1,2,3,4,5,6,7,8,9];

for (const key of num) {
    if (key === 2) {
        console.log('pulei o ',key );
        continue;
    }
    console.log(key);
}
console.log('');
//quando o motor do js encontra a palavra continue ele pula esse comando e segue o laço.
    // no exemplo acima ao chegar no 2 ele pula o 2 e segue para o 3
    // Sempre deixar o comando continue acima do codigo que quer que pule

    //OuTRO EXEMPLO
    for (let key in num) {
        key = num[key];

        if (key === 4) {
            console.log('pulei o ',key );
            continue;
        }
        console.log(key);
        if (key ===7) {
            console.log('numero 7 encontrado');
            break
        }
    }
    console.log('_______________');

    
    i = 0;
    while (i < num.length) {
        let chave = num[i];

        
        if (chave === 6) {
            i ++;
            console.log('pulei o ', chave);
            continue;
        }
        console.log(chave);
        
        if (chave === 8) {
            i++;
            break

        }
        i++;
    }

