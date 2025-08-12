// Write a constructor for making “Book” objects.
// Your book objects should have the book’s title, author,
// the number of pages, and whether or not you have read the book.

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    const bookInfo =
      'The ' + this.title + ' by' + this.author + this.pages + this.read;
    return bookInfo;
  };
}

const handBook = new Book(
  'Unscripted',
  ' MJ Demaco, ',
  '235 pages, ',
  'Read already'
);
//console.log(handBook.info());
