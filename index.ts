import Book from './Book';
import Library from './Library';

const library = new Library();

const book = new Book('tytul', 'autor', 'https://wp.pl', 'text10znakow');
library.addBook(book);
library.createUser('imie', 'nazwisko');
console.log(library.books);
console.log(library.users);
const userID = library.users[0].id;
const bookID = library.books[0].id;
library.rentBook(userID, bookID);

console.log(library.borrowedBooks);
console.log(library.bookings);

library.bookings[0].extendsBooking(10);
console.log(library.bookings);
