function contraste() {
    
    document.querySelector("#dark").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode")
    })

};

const noContent = document.querySelector("#sem_conteudo");
const content = document.querySelector("#conteudo_cifrado");

function crypto() {

    var texto = document.getElementById("message").value.toLowerCase();

    if(texto == ""){
        alert("Insira antes uma mensagem!")
    }
    else {
        var textoCifrado = texto.replace(/e/ig,"enter");
        var textoCifrado = textoCifrado.replace(/i/ig,"imes");
        var textoCifrado = textoCifrado.replace(/a/ig,"ai");
        var textoCifrado = textoCifrado.replace(/o/ig,"ober");
        var textoCifrado = textoCifrado.replace(/u/ig,"ufat");

        noContent.classList.add("oculto");
        content.classList.remove("oculto");

        document.getElementById("conteudo_cifrado").innerHTML = textoCifrado;
    }
};

function decrypto() {
    var texto = document.getElementById("message").value.toLowerCase();

    if(texto == ""){
        alert("Insira antes uma mensagem criptografada!")
    }
    else {
        var textoCifrado = texto.replace(/enter/ig,"e");
        var textoCifrado = textoCifrado.replace(/imes/ig,"i");
        var textoCifrado = textoCifrado.replace(/ai/ig,"a");
        var textoCifrado = textoCifrado.replace(/ober/ig,"o");
        var textoCifrado = textoCifrado.replace(/ufat/ig,"u");

        noContent.classList.add("oculto");
        content.classList.remove("oculto");

        document.getElementById("conteudo_cifrado").innerHTML = textoCifrado;
    }
}
