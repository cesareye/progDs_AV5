// Fase 2: Banco de Dados "Fake" (Array de Objetos com tema Hortifrúti)
const produtos = [
    {
        id: 1,
        nome: "Cenoura",
        categoria: "Legume",
        preco: "R$ 4,99 /kg",
        beneficio: "Rica em vitamina A"
    },
    {
        id: 2,
        nome: "Alface Crespa",
        categoria: "Verdura",
        preco: "R$ 2,50 /un",
        beneficio: "Calmante natural"
    },
    {
        id: 3,
        nome: "Morango",
        categoria: "Fruta",
        preco: "R$ 7,99 /bandeja",
        beneficio: "Antioxidante"
    },
    {
        id: 4,
        nome: "Brócolis",
        categoria: "Legume",
        preco: "R$ 5,50 /un",
        beneficio: "Fonte de ferro"
    },
    {
        id: 5,
        nome: "Espinafre",
        categoria: "Verdura",
        preco: "R$ 3,99 /maço",
        beneficio: "Força e energia"
    },
    {
        id: 6,
        nome: "Banana Prata",
        categoria: "Fruta",
        preco: "R$ 5,89 /kg",
        beneficio: "Evita cãibras"
    }
];

// Captura a div vazia do HTML onde os cards serão injetados
const vitrine = document.getElementById("vitrine");

// Fase 3: A Renderização (Desenhando os cards na tela)
function renderizarProdutos(listaDeProdutos) {
    // Limpa a tela antes de desenhar para evitar duplicados
    vitrine.innerHTML = "";

    // Laço de repetição forEach para varrer a lista de produtos
    listaDeProdutos.forEach(produto => {
        // Cria a estrutura HTML de cada card usando Template Strings
        vitrine.innerHTML += `
            <div class="card">
                <h3>${produto.nome}</h3>
                <p><strong>Categoria:</strong> ${produto.categoria}</p>
                <p><strong>Benefício:</strong> ${produto.beneficio}</p>
                <span class="preco">${produto.preco}</span>
            </div>
        `;
    });
}

// Fase 4: A Mágica dos Filtros (.filter)
function filtrarProdutos(categoriaSelecionada) {
    if (categoriaSelecionada === 'Todos') {
        // Se for 'Todos', passa a lista completa original
        renderizarProdutos(produtos);
    } else {
        // Se for uma categoria específica, aplica o método .filter()
        const produtosFiltrados = produtos.filter(produto => produto.categoria === categoriaSelecionada);
        // Renderiza apenas os produtos que passaram no filtro
        renderizarProdutos(produtosFiltrados);
    }
}

// Inicialização: Desenha todos os produtos na tela assim que a página carrega
renderizarProdutos(produtos);
