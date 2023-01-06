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
        var textoCifrado = texto.replace(/a/igm,"ai");
        var textoCifrado = textoCifrado.replace(/e/igm,"enter");
        var textoCifrado = textoCifrado.replace(/i/igm,"imes");
        var textoCifrado = textoCifrado.replace(/o/igm,"ober");
        var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

        noContent.classList.add("oculto");
        content.classList.remove("oculto");

        document.getElementById("conteudo_cifrado").innerHTML = textoCifrado;
    }
};

