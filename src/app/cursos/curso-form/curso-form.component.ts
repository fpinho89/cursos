import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CursoService } from './../curso.service';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  curso: Curso = new Curso(null, null, null, null);

  constructor(
      private cursoService: CursoService,
      private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.cursoService.addCurso(this.curso);
    this.router.navigate(['/cursos']);
  }
}
