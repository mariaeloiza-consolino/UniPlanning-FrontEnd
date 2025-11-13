import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MateriaRoutingModule } from './materia-routing-module';
import { CadastrarMateria } from './cadastrar-materia/cadastrar-materia';


@NgModule({
  declarations: [
    CadastrarMateria
  ],
  imports: [
    CommonModule,
    MateriaRoutingModule,
    MatFormFieldModule
  ]
})
export class MateriaModule { }
