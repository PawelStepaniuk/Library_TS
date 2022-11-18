import { v4 as uuidv4 } from 'uuid';

const add = require('date-fns/add');
const differenceInDays = require('date-fns/differenceInDays');

export default class Booking {
    id: string

    bookID: string

    userID: string

    private freeRentTime = 7;

    private bookingDate: Date

    private returnDate: Date

    private interest: number

    private payment: number

    constructor(bookID: string, userID: string) {
      this.id = uuidv4();
      this.setBookID = bookID;
      this.setUserID = userID;
      this.bookingDate = new Date();
      this.returnDate = add(this.bookingDate, { days: this.freeRentTime });
      this.setInterest = 10;
      this.setPayment = 0;
    }

    set setBookID(bookID:string) {
      this.bookID = bookID;
    }

    set setUserID(userID: string) {
      this.userID = userID;
    }

    set setPayment(payment: number) {
      if (payment < 0) {
        throw new Error('Payment should be higher or equal 0');
      }
      this.payment = payment;
    }

    set setInterest(interest: number) {
      if (interest < 0) {
        throw new Error('Interest should be higher or equal 0');
      }
      this.interest = interest;
    }

    extendsBooking(days: number) {
      if (days < 0) {
        throw new Error('Days should be higher than 0');
      }
      this.returnDate = add(this.returnDate, { days });
    }

    getPayment() {
      const rentTimeInDays = differenceInDays(new Date(), this.bookingDate);
      if (rentTimeInDays > 7) {
        this.setPayment = ((rentTimeInDays - 7) * this.interest);
      }
      return this.payment;
    }

    payForRent(fee:number) {
      if (fee !== this.payment) {
        throw new Error('Fee should be equal of payment');
      }
      this.setPayment = 0;
    }
}
