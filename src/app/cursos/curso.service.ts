import { Injectable, EventEmitter } from '@angular/core';

import { Curso } from './curso.model';

@Injectable()
export class CursoService {

  private cursos: Curso[] = [
    new Curso(1, "Angular", "Angular JS - Single Page Application", 150),
    new Curso(2, "Spring Boot", "Spring Boot - MicroServices - Api Rest", 90),
    new Curso(3, "Java 8", "Novas Features do Java 8", 50),
    new Curso(4, "Git", "Controle de versão", 32)
  ]

  static emitirCursoCriado = new EventEmitter<Curso>();

  constructor() {
      console.log("criando cursoservice")
   }

  addCurso(curso: Curso) {
    //TODO criar dinâmicamente
    curso.id = Math.floor(Math.random() * (10000 - 10 + 1) + 10);
    this.cursos.push(curso);
    CursoService.emitirCursoCriado.emit(curso);
  }

  getCurso(id: number) {
    return this.cursos.find(c => c.id == id);
  }

  getCursos() {
    return this.cursos;
  }
}