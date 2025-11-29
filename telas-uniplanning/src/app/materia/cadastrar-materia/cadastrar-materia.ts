import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ProfessorService, Professor } from '../../service/professor.service';

interface Materia {
  id: string;
  nome: string;
  professorId: number;
  professorNome?: string;
}

@Component({
  selector: 'app-cadastrar-materia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule
  ],
  templateUrl: './cadastrar-materia.html',
  styleUrls: ['./cadastrar-materia.css']
})
export class CadastrarMateria implements OnInit {

  professores: Professor[] = [];
  materias: Materia[] = [];
  novaMateria: Materia = { id: '', nome: '', professorId: 0 };

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    // carrega professores direto do localStorage
    this.professores = this.professorService.getProfessores();
  }

  salvarMateria(): void {
    const professor = this.professores.find(p => p.id === this.novaMateria.professorId);
    const nova = {
      ...this.novaMateria,
      professorNome: professor ? professor.nome : 'Sem professor'
    };
    this.materias.push(nova);
    this.novaMateria = { id: '', nome: '', professorId: 0 };
  }

  excluirMateria(index: number): void {
    this.materias.splice(index, 1);
  }

  editarMateria(materia: Materia): void {
    this.novaMateria = { ...materia };
    this.excluirMateria(this.materias.indexOf(materia));
  }
}
