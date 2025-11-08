import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarMateria} from './cadastrar-materia/cadastrar-materia';

const routes: Routes = [
  {path : 'cadastrar-materia', component: CadastrarMateria}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaRoutingModule { }
