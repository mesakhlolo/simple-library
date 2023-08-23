const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  const libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookEl = document.createElement("div");
    bookEl.setAttribute("class", "card");
    bookEl.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">By: ${
          book.author
        }</h6>
        <p class="card-text">Pages: ${book.pages}</p>
        <p class="card-text">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="btn btn-danger" onclick="removeBook(${i})">Remove</button>
        <button class="btn btn-success" onclick="toggleRead(${i})">Change Read Status</button>
      </div>
  `;
    libraryEl.appendChild(bookEl);
  }
}

// function to remove a book from library
function removeBook(index) {
  console.log(index);
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

// newBook button is clicked
const newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", function () {
  const newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

// addBook button is submited
const newBookForm = document.querySelector("#new-book-form");

newBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
  newBookForm.style.display = "none";
});
