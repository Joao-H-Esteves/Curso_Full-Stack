var nrImagem = 0;
var imagens = [];
var refrescar = 1; // mudar imagem de 1 em 1 segundo

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "imagens/moto-eyes.jpg";
imagens[1] = "imagens/moto-eyes1.jpg";
// imagens[2] = "endereço terceira imagem";
//...erro no link das imagens

function rodarImagens() {
     document.getElementById('misto').src = imagens[]; //erro aqui
   document.images["misto"].src = imagens[nrImagem++];

   if (nrImagem >= imagens.length)
      nrImagem = 0;

   setTimeout("rodarImagens()", refrescar * 1000);  
}

rodarImagens();//não consigo chamar essa função