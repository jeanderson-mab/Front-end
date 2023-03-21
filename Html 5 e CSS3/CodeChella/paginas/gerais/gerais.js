const pergunta = document.getElementsByClassName('perguntas')

var i;
var len = pergunta.length;

for(i = 0; i < len; i++){
    pergunta[i].addEventListener('click',function(){
        this.classList.toggle('active');
        var resposta = this.nextElementSibling;
        if(resposta.style.maxHeight){
            resposta.style.maxHeight = null;
        }else{
            resposta.style.maxHeight = resposta.scrollHeight + 'px'
        }
    })
}

