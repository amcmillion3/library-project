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

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

let myLibrary = [];

function addBookToLibrary() {
  e.preventDefault();
  modal.style.display = "none";
  getInputValues();
  console.log(getInputValues());
  let newBook = new Book(titleInputValue, authorInputValue, pagesInputValue, readInputValue);
  myLibrary.push(newBook);
};

function getInputValues() {
  let titleInputValue = document.getElementById("title").value;
  let authorInputValue = document.getElementById("author").value;
  let pagesInputValue = document.getElementById("pages").value;
  let readInputValue = document.getElementById("read").value;
  return titleInputValue, authorInputValue, pagesInputValue, readInputValue;
};


