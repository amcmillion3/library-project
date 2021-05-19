const newBookButton = document.getElementById("new-book-button");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
};

function addBookToLibrary() {
  // do stuff here
};

newBookButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

body.addEventListener("click", (e) => {
  if(e.target == body) {
    console.log("Hey you clicked the body");
  }
})

function newBook() {

};

