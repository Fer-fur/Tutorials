const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = () => {
        console.log(this);
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

    function generatePEl(content, className = '') {
        const p = document.createElement("p");
        p.textContent = content;
        if (className) p.className = className;
        return p
    }

    const bookCard = document.createElement("div");
    bookCard.classList.add("boxShadow", "bookCard");

    bookCard.appendChild(generatePEl(book.title, 'bookTitle'));
    bookCard.appendChild(generatePEl('by'));
    bookCard.appendChild(generatePEl(book.author));
    bookCard.appendChild(generatePEl(`${book.pages} pages`));
    bookCard.appendChild(generatePEl(`Reading Status: ${book.status}`));

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



