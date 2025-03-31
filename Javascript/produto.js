// Função para carregar e exibir os produtos
fetch('../data/produtos.json')
    .then(response => response.json())
    .then(data => {
        // Função para exibir produtos
        const exibirProdutos = (produtos, categoria) => {
            const produtosContainer = document.getElementById('produtos');
            produtosContainer.innerHTML = ''; // Limpa o conteúdo anterior

            // Exibe o nome da categoria
            if (categoria !== 'todas') {
                produtosContainer.innerHTML += `<h2 class="text-center my-3">Produtos de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>`;
            }

            // Exibe os produtos filtrados
            produtos.forEach(produto => {
                const produtoCard = `
                    <div class="col-md-3 categoria ${produto.categoria} d-flex col-mt-3 justify-content-center mb-4">
                        <div class="card w-100">
                            <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="max-height: 200px; object-fit: cover;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${produto.nome} - ${produto.preco}</h5>
                                <p class="card-text flex-grow-1">${produto.descricao}</p>
                            </div>
                        </div>
                    </div>
                `;
                produtosContainer.innerHTML += produtoCard;
            });
        };

        // Chama a função para exibir todos os produtos inicialmente
        exibirProdutos(data, 'todas');

        // Evento de filtro
        const filtroSelect = document.getElementById('filtro');
        filtroSelect.addEventListener('change', () => {
            const categoriaSelecionada = filtroSelect.value;
            
            // Filtra os produtos com base na categoria selecionada
            const produtosFiltrados = categoriaSelecionada === 'todas' 
                ? data 
                : data.filter(produto => produto.categoria === categoriaSelecionada);
            
            // Exibe os produtos filtrados com o nome da categoria
            exibirProdutos(produtosFiltrados, categoriaSelecionada);
        });
    })
    .catch(error => console.error('Erro ao carregar os produtos:', error));

    