//Adicionar um horário
let buttonAddElement = document.querySelector("#add-time")
buttonAddElement.addEventListener('click', cloneField)
//seleciona o input
let cloneElement = document.querySelector(".schedule-item")
//esconder o primeiro botão de fechar
let buttonHidden = document.getElementsByClassName("remove-time")
let buttonRemove = document.querySelector(".remove-time")

if (buttonHidden.length === 1){
    buttonRemove.style.display = "none"
}
function cloneField() {
    //clonar itens
    cloneElement = cloneElement.cloneNode(true)
    const clearData = cloneElement.querySelectorAll('input')
    //limpa os campos do novo elemento criado
    clearData.forEach(function(data){
        data.value = data
    })
    //adiciona no site
    document.querySelector("#schedule-item").appendChild(cloneElement)
    //adicionar botão de remover
    //document.getElementsByClassName("schedule-item")[1].innerHTML += '<button type="button" class="remove-time" onclick="this.parentElement.remove()">x</button>'
    if (buttonHidden.length > 1){
        for (c=0;c < buttonHidden.length; c++)
            buttonHidden[c].style.display = "block"
            console.log(buttonHidden.length)
    }
}

for (c=0;c < buttonHidden.length; c++)
    buttonHidden[c].onclick = function(){
    if (buttonHidden.length == 1){
        buttonRemove.style.display = "none"
    }
}