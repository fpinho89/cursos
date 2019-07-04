import { Component, OnInit } from '@angular/core';

import { Curso } from './../curso.model';
import { CursoService } from './../curso.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursoService : CursoService) { 
    
  }

  ngOnInit() {
    
    this.cursos = this.cursoService.getCursos();
    
    CursoService.emitirCursoCriado.subscribe(
      curso => console.log(curso)//this.cursos.push(curso) 
    );
  }
}