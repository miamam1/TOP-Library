const booksContainer = document.getElementById("booksContainer");
const dialog = document.querySelector("dialog")
const addBook = document.getElementById("addBook");
const closeForm = document.getElementById("closeForm");
const confirmBtn = document.getElementById("confirmBtn");
const formTitle = document.getElementById("formTitle");
const formAuthor = document.getElementById("formAuthor");
const formPages = document.getElementById("formPages")
const readCheck = document.getElementById("readCheck")



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

function displayBooks() {
    booksContainer.innerHTML = "";
    for(let i = 0;i < myLibrary.length; i++) {
        const book = document.createElement("div")
        book.classList.add("card")
 

        const title = document.createElement("p")
        title.classList.add("title")
        title.textContent = myLibrary[i].title
        
        const author = document.createElement("p")
        author.classList.add("author")
        author.textContent = myLibrary[i].author

        const pages = document.createElement("p")
        pages.classList.add("pages")
        pages.textContent = myLibrary[i].pages
       
        

        const remove = document.createElement("button")
        remove.classList.add("remove")
        
        remove.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            book.remove();
            console.log(myLibrary)
        })

        const cardRead = document.createElement("button")
        cardRead.textContent = myLibrary[i].read
        
        cardRead.classList.add("cardRead")
        cardRead.onclick = function() {
            if(cardRead.textContent == "Read") {
                cardRead.textContent = "Not read"
                
            } else {
                cardRead.textContent = "Read"
            }
        }
       

        
       
        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(pages)
        
        book.appendChild(cardRead)
        book.appendChild(remove)
        booksContainer.appendChild(book)    
    }
}






addBook.addEventListener("click", () => {
    formTitle.value = ""
    formAuthor.value = ""
    formPages.value = ""
    readCheck.value = ""
    readCheck.checked = false;
    formTitle.style.border = "1px solid black"
        formAuthor.style.border = "1px solid black"
        formPages.style.border = "1px solid black"
    dialog.showModal();
   
})


closeForm.addEventListener("click", () => {
    dialog.close();
})


confirmBtn.addEventListener('click', () => {
    if(readCheck.checked) {
        readCheck.textContent = "Read"
    } else {
         readCheck.textContent = "Not read"
    }
    if(formTitle.value === "" ||   formAuthor.value === "" || formPages.value === "" ) {
        
        formTitle.style.border = "1px solid red"
        formAuthor.style.border = "1px solid red"
        formPages.style.border = "1px solid red"
        if(formTitle.value !== "") {
            formTitle.style.border = "1px solid black"
        }
        if(formAuthor.value !== "") {
            formAuthor.style.border = "1px solid black"
        }
        if(formPages.value !== "") {
            formPages.style.border = "1px solid black"
        }

    } else {
        dialog.close(addToLibrary(formTitle.value, formAuthor.value, formPages.value, readCheck.textContent))
        displayBooks()

    }




})







addToLibrary("Macbeth", "Shakespeare", "298", "Not read")
addToLibrary("Romeo and Juliet", "Shakespeare", "240", "Read")
addToLibrary("Stoicism", "Some stoic dude", "199", "Read")






displayBooks()





