const newBookButton = document.getElementById("new-book-button");
const closeButton = document.querySelector(".close-button");
const addBookButton = document.getElementById("add-book-button");
const form = document.getElementById("form");
const bookCardContainer = document.querySelector(".book-card-container");
const readButton = document.querySelector(".read");
const removeButton = document.querySelector(".remove");

newBookButton.addEventListener("click", () => {
  form.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  form.style.display = "none";
});

addBookButton.addEventListener("click", addBookToLibrary);

const book = {
  title: this.title,
  author: this.author,
  pages: this.pages,
  read: this.read
}

let myLibrary = [];

function addBookToLibrary(e) {
  e.preventDefault();
  form.style.display = "none";
  inputValues = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.getElementById("read").checked
  };
  let newBook = Object.create(book);
  newBook.title = inputValues.title;
  newBook.author = inputValues.author;
  newBook.pages = inputValues.pages;
  newBook.read = inputValues.read;
  myLibrary.push(newBook);
  displayLibrary(myLibrary);
  setStorage();
  form.reset();
};

function displayLibrary (myLibrary) {
  while (bookCardContainer.firstChild) {
    bookCardContainer.removeChild(bookCardContainer.firstChild);
  }
  for(let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.dataset.id = i;
    
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

    let readCheck = myLibrary[i].read
    let readDiv = document.createElement("button");
    function check(readCheck) {
      if(readCheck) {
        readDiv.classList.add("read");
        readDiv.innerHTML = "Read";
      }
      else {
        readDiv.classList.add("not-read");
        readDiv.innerHTML = "Not Read";
      }
    }
    check(readCheck);
    readUpdate(readDiv);
    readDiv.setAttribute("type", "submit");
    bookCard.appendChild(readDiv);

    let removeDiv = document.createElement("button");
    removeDiv.classList.add("remove");
    removeDiv.setAttribute("type", "submit");
    removeDiv.innerHTML = "Remove";
    bookCard.appendChild(removeDiv);

    remove(bookCard, removeDiv);

    bookCardContainer.appendChild(bookCard);
  };
};

// Remove button functionality
function remove(bookCard, removeDiv) {
  removeDiv.addEventListener("click", (e) => {
      myLibrary.splice(bookCard.dataset.id, 1);
      displayLibrary(myLibrary);
      return myLibrary;
  })
  setStorage();
}

//Read button functionality
function readUpdate(readDiv) {
  readDiv.addEventListener("click", () => {
    if(readDiv.classList.contains("read")) {
      readDiv.classList.remove("read");
      readDiv.classList.add("not-read");
      readDiv.innerHTML = "Not Read";
      return myLibrary;
    }
    else {
      readDiv.classList.remove("not-read");
      readDiv.classList.add("read");
      readDiv.innerHTML = "Read";
      return myLibrary;
    }
  })
  setStorage();
}

function setStorage() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function restoreLibrary() {
  if(localStorage.myLibrary === false) {
      displayLibrary(myLibrary);
  }else {
      let objects = localStorage.getItem('myLibrary') 
      objects = JSON.parse(objects);
      myLibrary = objects;
      displayLibrary(myLibrary);
  }
}

restoreLibrary();