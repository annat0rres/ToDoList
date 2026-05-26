$(document).ready(function() {
            const hoje = new Date().toLocaleDateString('pt-BR');
            $('#dataAtual').text(hoje);
});

const lista = document.getElementById('listaTarefas')
const botaoAdd = document.getElementById('botaoAdd')

botaoAdd.addEventListener('click', () => {
    const tarefa = document.createElement('div')
    tarefa.classList.add('tarefa')

    tarefa.innerHTML = '<input type="checkbox" name="" id=""> <input type="text" class="texto-tarefa" placeholder="Digite aqui..."> <button class="btnApagar"><span class="material-symbols-outlined">close</span></button>'
    lista.appendChild(tarefa)

    const input = tarefa.querySelector('.texto-tarefa')
    const btnApagar = tarefa.querySelector('.btnApagar')

    input.addEventListener('focus', () => {

        btnApagar.style.opacity = '0.6'

    })

    input.addEventListener('blur', () => {

        btnApagar.style.opacity = '0'

    })

    btnApagar.addEventListener('click', () => {

        tarefa.remove()

    })

})