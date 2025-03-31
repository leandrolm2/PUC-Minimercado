document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os dados do formulário
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cpf = document.getElementById('cpf').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const opcao = document.getElementById('opcao').value;  
    const horario = document.getElementById('horario').value;

    // Cria o objeto de dados
    const cadastro = {
        nome,
        endereco,
        cpf,
        sexo,
        telefone,
        email,
        opcao,
        horario
    };

    // Salva o cadastro no LocalStorage com o email como chave
    localStorage.setItem(email, JSON.stringify(cadastro));

    // Exibe uma mensagem de sucesso
    alert('Cadastro realizado com sucesso!');

    // Fecha o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('cadastroModal'));
    modal.hide();
});
