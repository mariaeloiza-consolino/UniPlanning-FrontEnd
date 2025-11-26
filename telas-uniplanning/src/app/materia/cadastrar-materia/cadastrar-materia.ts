import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ProfessorService } from '../../service/professor.service';
import { Professor } from '../../models/professor.model';

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

  novaMateria: Materia = {
    id: '',
    nome: '',
    professorId: 0
  };

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professorService.getProfessores().subscribe({
      next: (data) => {
        this.professores = data;
      },
      error: (err) => console.error('Erro ao carregar professores:', err)
    });
  }

  salvarMateria() {
    const professor = this.professores.find(p => p.id === this.novaMateria.professorId);

    const nova = {
      ...this.novaMateria,
      professorNome: professor ? professor.nome : 'Sem professor'
    };

    this.materias.push(nova);

    this.novaMateria = { id: '', nome: '', professorId: 0 };
  }

  excluirMateria(index: number) {
    this.materias.splice(index, 1);
  }

  editarMateria(materia: Materia) {
    this.novaMateria = { ...materia };
    this.excluirMateria(this.materias.indexOf(materia));
  }
}
