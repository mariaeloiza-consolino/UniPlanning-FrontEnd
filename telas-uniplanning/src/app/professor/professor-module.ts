import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProfessorRoutingModule } from './professor-routing-module';
import { CadastrarProfessor } from './cadastrar-professor/cadastrar-professor';


@NgModule({
  declarations: [
    CadastrarProfessor
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfessorModule { }
