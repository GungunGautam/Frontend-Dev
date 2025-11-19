class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("Gita", "Vyasa", "111"),
    new Book("Ramayan", "Valmiki", "222"),
    new Book("Wings of Fire", "APJ", "333"),
    new Book("Discovery of India", "Nehru", "444", true)
];

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

function issueByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (book && !book.isIssued) {
        book.issueBook();
        console.log(`Book issued: ${book.title}`);
    } else {
        console.log("Book not available.");
    }
}

issueByISBN("333");
