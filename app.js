let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};
function exibirMensagemInicial(){
    exibirTextoNaTela('h1' ,'Jogo do número secreto');
    exibirTextoNaTela('p', 'Digite um número');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}` ;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor');
        } else{
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++
        limparCampo()
    }
};

function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1)
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto =  gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};