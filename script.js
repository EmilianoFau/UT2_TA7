function getTitles(books) {
    console.log(books.map(book => book.title));
}

const books = [
    {
      title: 'Juanito',
      author: 'Pepe'
    },
    {
      title: 'Juanita',
      author: 'Pepe'
    }, 
    {
        title: 'Kekeke',
        author: 'kadkas'
    }
  ]

getTitles(books);
  