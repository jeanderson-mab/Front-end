
async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error("CEP inexistente!")
        }

        var cidade = doument.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');


       cidade.value = consultaCEPConvertida.localidade;
       logradouro.value = consultaCEPConvertida.logradouro;
       estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
            return consultaCEPConvertida;
    } catch(erro){
        console.log(erro)
    }
}

var cep = document.getElementsByClassName("campo__escrita");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));





