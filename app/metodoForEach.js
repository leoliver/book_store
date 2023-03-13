const gridLivros = document.querySelector('#livros')
const elementoComValorTotalDosLivros = document.getElementById('valor_total_livros_disponiveis')

function mostraLivros(listaDeLivros) {
    elementoComValorTotalDosLivros.innerHTML = ''
    gridLivros.innerHTML = ''
    let livrosComDesconto = aplicaDesconto(listaDeLivros)
    livrosComDesconto.forEach(livro => {
        const disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        gridLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${primeiraLetraMaiuscula(livro.categoria)}</span>
            </div>
            </div>
        `
    })
}

function primeiraLetraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}