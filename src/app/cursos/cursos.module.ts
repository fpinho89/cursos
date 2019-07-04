
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursoService } from './curso.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [CursoFormComponent, CursoListaComponent, CursoDetalheComponent],
  exports: [CursoFormComponent, CursoListaComponent],
  providers: [CursoService]
})
export class CursosModule { }
