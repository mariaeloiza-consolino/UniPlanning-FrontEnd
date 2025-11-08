import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'materia', loadChildren: () => import('./materia/materia-module').then(m => m.MateriaModule)}, 
  {path: 'professor', loadChildren: () => import('./professor/professor-module').then(m => m.ProfessorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
