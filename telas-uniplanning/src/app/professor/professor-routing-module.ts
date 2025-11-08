import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProfessor } from './cadastrar-professor/cadastrar-professor';

const routes: Routes = [
  {path : 'cadastrar-professor', component: CadastrarProfessor}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
