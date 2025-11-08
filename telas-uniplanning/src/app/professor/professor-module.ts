import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing-module';
import { CadastrarProfessor } from './cadastrar-professor/cadastrar-professor';


@NgModule({
  declarations: [
    CadastrarProfessor
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
