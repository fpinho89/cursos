import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Curso } from '../curso.model';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  curso: Curso;

  constructor(private route: ActivatedRoute, private cursoService: CursoService) { 
    this.id = this.route.snapshot.params['id'];
    this.curso = this.cursoService.getCurso(this.id);
  }

  ngOnInit() {
  }

}
