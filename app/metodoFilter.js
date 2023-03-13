const botoesLivros = document.querySelectorAll('button[data-attribute]')

botoesLivros.forEach(botao => botao.addEventListener('click', filtraLivros))

function filtraLivros() {
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value
    livrosFiltrados = categoria == 'disponivel' ? filtarPorDisponibilidade() : filtrarPorCategoria(categoria)
    mostraLivros(livrosFiltrados)
    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
        exibeValorTotalDosLivrosDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotalDosLivrosDisponiveis(valor) {
    elementoComValorTotalDosLivros.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
    `
}