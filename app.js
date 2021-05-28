// Buttons and their event listeners
const newBookButton = document.getElementById("new-book-button");
const closeButton = document.querySelector(".close-button");
const addBookButton = document.getElementById("add-book-button");
const modal = document.getElementById("modal");

newBookButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

addBookButton.addEventListener("click", addBookToLibrary);


// Book Constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = modal.title.value;
    this.author = modal.author.value;
    this.pages = modal.pages.value + "pages";
    this.read = modal.read.checked;
  };
};

let myLibrary = [];

function addBookToLibrary() {
  modal.style.display = "none";
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
};


