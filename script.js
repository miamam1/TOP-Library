


const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + author + pages + read;
    }

}

function addToLibrary(title, author, pages, read) {
     let newBook = new book(title, author, pages, read)
     return myLibrary.push(newBook)

}






