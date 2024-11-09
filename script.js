// Array to store book objects
const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add a new book to the library array and display it
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

// Function to display all books in the library
function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = ''; // Clear previous content

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.dataset.index = index;

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p>${book.pages} pages</p>
      <p>Status: ${book.read ? 'Read' : 'Not Read'}</p>
      <button onclick="toggleReadStatus(${index})">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
      <button onclick="removeBook(${index})">Remove Book</button>
    `;

    libraryDiv.appendChild(bookCard);
  });
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

// Function to remove a book from the library
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Event listener for the "Add New Book" button
document.getElementById('new-book-btn').addEventListener('click', () => {
  document.getElementById('form-container').classList.toggle('hidden');
});

// Event listener for the form submission
document.getElementById('book-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page
  
  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  // Create a new book object and add it to the library
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  // Clear the form and hide it
  document.getElementById('book-form').reset();
  document.getElementById('form-container').classList.add('hidden');
});
