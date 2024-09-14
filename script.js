const ls = localStorage;
const catalogo = []; //título, autor, gênero, ano de publicação e avaliação
const tableBody = document.getElementById('tableBody');

catalogo.push(
    {
        'id':1,
        'titulo': 'Título 1',
        'autor': 'Autor 1',
        'genero': 'Ação',
        'AnoPublicacao': 2020,
        'avaliacao': 3
    },
    {
        'id':2,
        'titulo': 'Título 2',
        'autor': 'Autor 2',
        'genero': 'Terror',
        'AnoPublicacao': 2021,
        'avaliacao': 2
    }
)

function criarLinha(data) {
    const linha = document.createElement('tr');
    const id = document.createElement('th');
    const titulo = document.createElement('td');
    const autor = document.createElement('td');
    const genero = document.createElement('td');
    const ano = document.createElement('td');
    const avaliacao = document.createElement('td');
    
    id.innerText = data.id;
    titulo.innerText = data.titulo;
    autor.innerText = data.autor;
    genero.innerText = data.genero;
    ano.innerText = data.AnoPublicacao;
    avaliacao.innerText = data.avaliacao

    linha.appendChild(id)
    linha.appendChild(titulo)
    linha.appendChild(autor)
    linha.appendChild(genero)
    linha.appendChild(ano)
    linha.appendChild(avaliacao)

    return linha
}
function carregarLista() {
    tableBody.innerHTML = '';
    
    catalogo.forEach((data) =>{
        let novaLinha = criarLinha(data);
        tableBody.appendChild(novaLinha);
    })
}
carregarLista()