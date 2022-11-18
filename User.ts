import { v4 as uuidv4 } from 'uuid';
import Validator from './Validator';

export default class User {
    id:string

    private name:string

    private surname:string

    constructor(name:string, surname:string) {
      this.id = uuidv4();
      this.setName = name;
      this.setSurname = surname;
    }

    set setName(name:string) {
      Validator.lengthValidator(name, 3, 10, 'Wrong length');
      this.name = name;
    }

    set setSurname(surname:string) {
      Validator.lengthValidator(surname, 3, 10, 'Wrong length');
      this.surname = surname;
    }
}
