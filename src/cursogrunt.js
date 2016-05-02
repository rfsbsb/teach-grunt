'use strict';

import Pessoa from './segundo.js';

class Aluno extends Pessoa {
  constructor(nome, idade, sala) {
    super(nome);
    this.idade = idade;
    this.sala  = sala;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }
}

let aluno = new Aluno("João", 3, "6 B");
let a = new Aluno("bob", 5, "7 A");
console.log(a.getData());
console.log(aluno.getData());