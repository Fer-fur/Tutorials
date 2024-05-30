const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`)
    }
}

function addBookToLibrary(title, author, pages, status) {
    const bookToAdd = new Book(title, author, pages, status)
    myLibrary.push(bookToAdd);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien" , 295, "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien" , 295, "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien" , 295, "not read yet");


function createBookCard(book){
    const bookCard = document.createElement("div");
    bookCard.classList = "boxShadow bookCard";

    const bookTitle = document.createElement("p");
    bookTitle.textContent = book.title;
    bookTitle.className = "bookTitle";

    const by = document.createElement("p");
    by.textContent = "by";

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("p");
    bookPages.textContent = book.pages + " pages";

    const bookStatus = document.createElement("p");
    bookStatus.textContent = "Reading Status: " + book.status;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(by);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookStatus);

    return bookCard;
}

const formBookTitle = document.getElementById("bookTitle");
const formBookAuthor = document.getElementById("bookAuthor");
const formBookPages = document.getElementById("bookPages");
const formBookStatus = document.getElementById("bookStatus");
const addBookBtn = document.getElementById("addNewBookBtn");
const booksCardsContainer = document.getElementById("booksCardsContainer");

function renderLibrary(){
    myLibrary.forEach((book) => {
        booksCardsContainer.appendChild(createBookCard(book));
    })
}

function clearLibraryDisplay() {
    booksCardsContainer.textContent = "";
}

addBookBtn.addEventListener('click', () => {
    addBookToLibrary(formBookTitle.value, formBookAuthor.value, formBookPages.value, formBookStatus.value);
    clearLibraryDisplay();
    renderLibrary();
})

renderLibrary();



