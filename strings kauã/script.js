const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto')
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavraschave = processaTexto(texto);


    campoResultado.textContent = palavraschave.join(', ');
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    let frequencias = {};
    for(let i in palavras) {
        frequencias [i] = 0;
        for (let jin palavras) {
            if (palavras[i]==palavras[j]){
                frequencias[i]++;
            }
        }
    }
    console.log(frequencias);
    


    return palavras;
