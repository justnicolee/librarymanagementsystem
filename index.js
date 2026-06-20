
class Book{
    constructor(title, author, year, available){
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = true;
    }
}

class Library{
    constructor(){
        this.book = [];
    }

    addBook(book){
        this.book.push(book);
        console.log(`${book.title} has been added to the library.`)
    }

    borrowBook(title){
        let book = this.book.find(book => book.title === title);

        if (book){
            if (book.available){
                book.available = false;
                console.log(`You borrowed "${book.title}".`);
            }
            else{
                console.log(`${book.title} is already borrowed.`);
            }
        }
        else{
            console.log("Book not found.")
        }
    }
    
    returnBook(title){
        let book = this.book.find(book => book.title === title);

        if(book){
            book.available = true;
            console.log(`${book.title} has been returned.`);
        }
        else{
            console.log("Book not found.")
        }
    }

    listAvailableBook(){
        let availableBooks = this.book.filter(book => book.available);

        if (availableBooks.length === 0){
            console.log("No books are currently available.");
        }
        else{
            console.log("Available Books:");

            availableBooks.forEach(book => {
                console.log( `${book.title} by ${book.author} (${book.year})`);
            });
        }
    }

}