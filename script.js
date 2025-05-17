//your JS code here. If required.
// Get DOM elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitButton = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// Handle form submission
submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    // Validate input fields
    if (!title || !author || !isbn) {
        alert("Please fill out all fields");
        return;
    }

    // Add book to table
    addBookToTable(title, author, isbn);

    // Clear input fields
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
});

function addBookToTable(title, author, isbn) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Add delete functionality
    row.querySelector(".delete").addEventListener("click", () => {
        row.remove();
    });

    bookList.appendChild(row);
}