let livros = []
let livrosFiltrados = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosAPI()

async function getBuscarLivrosAPI() {
    const response = await fetch(endpointAPI)
    livros = await response.json()
    await mostraLivros(livros)
}
