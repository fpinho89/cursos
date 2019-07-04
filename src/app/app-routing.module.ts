import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoListaComponent } from './cursos/curso-lista/curso-lista.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoFormComponent } from './cursos/curso-form/curso-form.component';

const routes: Routes = [
  { path: 'novo', component: CursoFormComponent },
  { path: 'cursos', component: CursoListaComponent },
  { path: 'detalhe/:id', component: CursoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
