'use strict';

export default class Objeto {
  constructor() {
    this.data = new Date();
  }
  getData() {
    console.log(this.data);
  }
}