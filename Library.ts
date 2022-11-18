import Book from './Book';
import User from './User';
import Booking from './Booking';

export default class Library {
    books:Book[]

    availableBooks:Book[]

    borrowedBooks:Book[]

    bookings:Booking[]

    users:User[]

    constructor() {
      this.books = [];
      this.availableBooks = [];
      this.borrowedBooks = [];
      this.bookings = [];
      this.users = [];
    }

    createUser(name:string, surname:string) {
      this.users.push(new User(name, surname));
    }

    addBook(book:Book) {
      this.books.push(book);
      this.availableBooks.push(book);
    }

    rentBook(userID:string, bookID:string) {
      const user = this.getUser(userID);
      if (user === undefined) {
        throw new Error('User does not exist');
      }
      const book = this.getBook(bookID);
      if (book === undefined) {
        throw new Error('Book not found');
      }
      if (!this.isBookAvailable(book)) {
        throw new Error('Book is not available');
      }
      const booking = new Booking(bookID, userID);
      this.bookings.push(booking);
      this.borrowedBooks.push(book);
      this.removeBookFromList(book, this.availableBooks);
    }

    returnBook(bookID:string, fee:number = 0) {
      const book = this.getBook(bookID);

      if (!this.borrowedBooks.includes(book)) {
        throw new Error('Book is not borrowed');
      }
      const booking = this.getBooking(bookID);
      booking.payForRent(fee);
      this.removeBooking(booking);
      this.removeBookFromList(book, this.borrowedBooks);
      this.availableBooks.push(book);
    }

    private getUser(userID:string) {
      const user = this.users.find(({ id }) => userID === id);
      if (user === undefined) {
        throw new Error('User not found');
      }
      return user;
    }

    private getBook(bookID:string) {
      const book = this.books.find(({ id }) => bookID === id);
      if (book === undefined) {
        throw new Error('Book not found');
      }
      return book;
    }

    private isBookAvailable(book:Book) {
      return this.availableBooks.some(({ id }) => book.id === id);
    }

    private removeBookFromList(book:Book, list:Array<Book>):void {
      const index = this.getIndex(book.id, list);
      if (index === -1) {
        throw new Error('Book is not in list');
      }
      list.splice(index, 1);
    }

    private getIndex(bookID:string, list:Array<Book>) {
      return list.findIndex(({ id }) => id === bookID);
    }

    private getBooking(id:string) {
      return this.bookings.find(({ bookID }) => bookID === id);
    }

    private removeBooking(booking:Booking) {
      this.bookings = this.bookings.filter(({ id }) => id !== booking.id);
    }
}
