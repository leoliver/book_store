const botaoOrdenacaoPreco = document.getElementById('btnOrdenarPorPreco')

botaoOrdenacaoPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados
    if(livrosFiltrados.length > 0) {
        livrosOrdenados = livrosFiltrados.sort((a, b) => a.preco - b.preco)
    } else {
        livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    }
    mostraLivros(livrosOrdenados)
}