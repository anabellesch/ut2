function getTheTitles(books){
    let titles = [];
    books.forEach(book => {
        titles.push(book.titulo);
    });
    return titles;
}

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    }
  ]
  

let libros = [libro1, libro2, libro3];

function libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}
