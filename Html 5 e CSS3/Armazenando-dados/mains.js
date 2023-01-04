const form = document.getElementById("novoItem")
const list = document.getElementById('lista')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade){
    console.log(nome)
    

    const novoItem =  document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade

   
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    

    list.appendChild(novoItem)

    
}