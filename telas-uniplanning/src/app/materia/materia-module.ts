import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaRoutingModule } from './materia-routing-module';
import { CadastrarMateria } from './cadastrar-materia/cadastrar-materia';


@NgModule({
  declarations: [
    CadastrarMateria
  ],
  imports: [
    CommonModule,
    MateriaRoutingModule
  ]
})
export class MateriaModule { }
