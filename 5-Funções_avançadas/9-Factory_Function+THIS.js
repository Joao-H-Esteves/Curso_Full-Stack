// FUNÇÕES QUE RETORNAM OBJETOS

//QUANDO UMA FUNÇÃO ESTA DENTRO DE UM OBJETO É CHAMADA DE  """MÉTODO"""

//Ex:
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function (assunto) { // MÉTODO
            return `${nome} esta falando sobre ${assunto}`;
        }
    };
}
const p1 = criaPessoa('João', 'Esteves');

console.log(p1); //{ nome: 'João', sobrenome: 'Esteves' }

//=============================================================

