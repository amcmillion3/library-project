const newBookButton = document.getElementById("new-book-button");
const closeButton = document.querySelector(".close-button");
const addBookButton = document.getElementById("add-book-button");
const modal = document.getElementById("modal");
const bookCardContainer = document.querySelector(".book-card-container");
const readButton = document.querySelector(".read");
const removeButton = document.querySelector(".remove");

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

function addBookToLibrary(e) {
  e.preventDefault();
  modal.style.display = "none";
  inputValues = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.getElementById("read").value
  };
  let newBook = new Book(inputValues.title, inputValues.author, inputValues.pages, inputValues.read);
  myLibrary.push(newBook);
  displayLibrary(myLibrary);
  myLibrary = [];
  modal.reset();
};


function displayLibrary (myLibrary) {
  for(let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    
    let titleDiv = document.createElement("p");
    titleDiv.classList.add("card-info");
    titleDiv.innerHTML = `<strong>Title</strong>: ${myLibrary[i].title}`;
    bookCard.appendChild(titleDiv);
    
    let authorDiv = document.createElement("p");
    authorDiv.classList.add("card-info");
    authorDiv.innerHTML = `<strong>Author</strong>: ${myLibrary[i].author}`;
    bookCard.appendChild(authorDiv);
    
    let pagesDiv = document.createElement("p");
    pagesDiv.classList.add("card-info");
    pagesDiv.innerHTML = `<strong>Pages</strong>: ${myLibrary[i].pages}`;
    bookCard.appendChild(pagesDiv);

    let readDiv = document.createElement("button");
    readDiv.classList.add("read");
    readDiv.setAttribute("type", "submit");
    readDiv.innerHTML = "Read";
    bookCard.appendChild(readDiv);

    let removeDiv = document.createElement("button");
    removeDiv.classList.add("remove");
    removeDiv.setAttribute("type", "submit");
    removeDiv.innerHTML = "Remove";
    bookCard.appendChild(removeDiv);

    bookCardContainer.appendChild(bookCard);
  };
};

readButton.addEventListener("click", () => {
  readButton.style.backgroundColor = "#ff4d4d"
});

removeButton.addEventListener("click", (e) => {
  
})