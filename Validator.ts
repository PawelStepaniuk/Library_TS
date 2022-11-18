const { URL } = require('url');

export default class Validator {
  static lengthValidator(arg:string, minLength:number, maxLength:number, errorMessage:string) {
    if (!(arg.length < maxLength) || !(arg.length > minLength)) {
      throw new Error(errorMessage);
    }
  }

  static stringIsAValidUrl(string:string) {
    if (!(new URL(string))) {
      throw new Error('string is not url');
    }
  }
}
