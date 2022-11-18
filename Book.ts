import { v4 as uuidv4 } from 'uuid';
import Validator from './Validator';

export default class Book {
    id:string

    private title:string

    private author:string

    private photo: string

    private text:string

    constructor(title:string, author:string, photo:string, text:string) {
      this.id = uuidv4();
      this.setTitle = title;
      this.setAuthor = author;
      this.setPhoto = photo;
      this.setText = text;
    }

    set setTitle(title:string) {
      Validator.lengthValidator(title, 3, 10, 'Wrong length');
      this.title = title;
    }

    set setAuthor(author:string) {
      Validator.lengthValidator(author, 3, 10, 'Wrong length');
      this.author = author;
    }

    set setPhoto(photo:string) {
      Validator.stringIsAValidUrl(photo);
      this.photo = photo;
    }

    set setText(text:string) {
      Validator.lengthValidator(text, 10, 100, 'Wrong length');
      this.text = text;
    }
}
