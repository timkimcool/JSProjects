let myLibrary = [];
let form = document.querySelector(".form1");

function Book(author, title, pages, read) {
    // constructor
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        if (read) {
            let readText = "not read yet";
        } else {
            let readText = "read";
        }
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + readText;
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    render(book);
}

function openForm() {
    form.classList.toggle("show-form");
    //document.getElementById("myForm").style.display = "block";
}
  
function submitForm() {
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let page = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    if (!formValidation()) {
        return;
    }
    document.getElementById("myForm").style.display = "none";
    form.classList.toggle("show-form");
    let book = new Book(author, title, page, read);
    addBookToLibrary(book);
    resetForm();
}

function resetForm() {
    document.getElementById('author').value = "";
    document.getElementById('title').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('read').checked = false;
}

function render(book) {
    let table = document.getElementById('table');
    let tr = document.createElement('tr');
    let title = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    let read = document.createElement('td');
    let checkBox = document.createElement('input');
    let remove = document.createElement('td');
    let trashIcon = document.createElement('i');
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    checkBox.type = "checkbox";
    checkBox.classList.add("read");
    checkBox.id="read";
    checkBox.checked = book.read;
    read.appendChild(checkBox);
    trashIcon.classList.add('material-icons');
    trashIcon.textContent = 'delete';
    trashIcon.addEventListener('click', deleteRow);
    remove.appendChild(trashIcon);
    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(pages);
    tr.appendChild(read);
    tr.appendChild(remove);
    table.appendChild(tr);
}

function deleteRow(row) {
    let tr = row.target.parentNode.parentNode;
    let parent = tr.parentNode;
    parent.removeChild(tr);
}

function findBook(title, author) {
    for (book in myLibrary()) {
        if (book.title === title && author === author) {
            myLibrary.removeChild(book);
            return;
        }
    }
}

let popup = document.getElementById("myForm");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    //popup.style.display = "none";
    form.classList.toggle("show-form");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popup) {
        //popup.style.display = "none";
        form.classList.toggle("show-form");
    }
}

function formValidation() {
    let forms = document.querySelectorAll(".form-control");
    for (let i = 0; i < forms.length; i++) {
        if (forms[i].value == "") {
            alert("Please " + forms[i].placeholder.toLowerCase());
            return false;
        }
    }
    return true;

}

const plusIcon = document.querySelector(".plus-button");
function rotateIcon() {
    plusIcon.classList.toggle("rotate-icon");
}

function showForm() {
    const form = document.querySelector("form");
    form.classList.toggle("show-form");
    rotateIcon();
}

