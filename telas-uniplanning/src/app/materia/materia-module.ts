import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MateriaRoutingModule } from './materia-routing-module';
import { CadastrarMateria } from './cadastrar-materia/cadastrar-materia';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastrarMateria
  ],
  imports: [
    CommonModule,
    MateriaRoutingModule,
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
export class MateriaModule { }
