document.addEventListener('DOMContentLoaded', () => {
    const inputTarefa = document.getElementById('novaTarefa');
    const botaoAdicionar = document.getElementById('adicionarTarefa');
    const listaTarefas = document.getElementById('listaTarefas');

    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const salvarTarefas = () => {
        try {
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        } catch (error) {
            console.error('Erro ao salvar no localStorage:', error);
            alert('Erro ao salvar tarefas. Verifique o espaço do navegador.');
        }
    };

    const renderizarTarefas = () => {
        listaTarefas.innerHTML = '';
        
        if (tarefas.length === 0) {
            listaTarefas.innerHTML = '<p class="empty-message">Nenhuma tarefa por enquanto. Adicione uma!</p>';
            return;
        }

        tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            li.setAttribute('data-index', index);
            
            li.innerHTML = `
                <span class="tarefa-texto ${tarefa.concluida ? 'concluida' : ''}" onclick="toggleConcluir(${index})">
                    ${tarefa.texto}
                </span>
                <div class="acoes">
                    <button class="btn-acao btn-remover" onclick="removerTarefa(${index})">🗑️</button>
                </div>
            `;
            listaTarefas.appendChild(li);
        });
    };

    const adicionarTarefa = () => {
        const texto = inputTarefa.value.trim();
        
        if (texto === '') {
            inputTarefa.classList.add('erro-validacao');
            setTimeout(() => inputTarefa.classList.remove('erro-validacao'), 500);
            return;
        }

        tarefas.push({ texto, concluida: false });
        inputTarefa.value = '';
        salvarTarefas();
        renderizarTarefas();
    };

    window.removerTarefa = (index) => {
        // Remover do array imediatamente e permanentemente
        tarefas.splice(index, 1);
        salvarTarefas();
        renderizarTarefas();
    };

    window.toggleConcluir = (index) => {
        tarefas[index].concluida = !tarefas[index].concluida;
        salvarTarefas();
        renderizarTarefas();
    };

    botaoAdicionar.addEventListener('click', adicionarTarefa);

    inputTarefa.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            adicionarTarefa();
        }
    });

    renderizarTarefas();
});
