export default class LS {
  get = (key) => {
    //if no ls,
    if (!localStorage.getItem(key)) {
      //return an empty array
      return [];
    } //else,
    else {
      //parse to json local storage item
      return JSON.parse(localStorage.getItem(key));
    }
  };
  set = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };
}
