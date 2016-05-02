'use strict';

import Objeto from "./terceiro.js";

export default class Pessoa extends Objeto {
  constructor(nome) {
    super();
    this.nome = nome;
  }
}

console.log("so pra ver");