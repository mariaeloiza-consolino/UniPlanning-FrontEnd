import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfessorService, Professor } from '../../service/professor.service';

@Component({
  selector: 'app-cadastrar-professor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cadastrar-professor.html',
  styleUrls: ['./cadastrar-professor.css']
})
export class CadastrarProfessor implements OnInit {

  professores: Professor[] = [];
  novoProfessor: Professor = {
    id: 0,
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: ''
  };
  editando = false;
  indiceSelecionado: number | null = null;

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    this.professores = this.professorService.getProfessores();
  }

  salvarProfessor() {
    if (this.editando && this.indiceSelecionado !== null) {
      this.professorService.updateProfessor(this.indiceSelecionado, this.novoProfessor);
    } else {
      this.novoProfessor.id = this.professores.length + 1;
      this.professorService.addProfessor({ ...this.novoProfessor });
    }

    this.professores = this.professorService.getProfessores();
    this.cancelarEdicao();
  }

  editarProfessor(index: number) {
    this.indiceSelecionado = index;
    this.novoProfessor = { ...this.professores[index] };
    this.editando = true;
  }

  excluirProfessor(index: number) {
    this.professorService.deleteProfessor(index);
    this.professores = this.professorService.getProfessores();
  }

  cancelarEdicao() {
    this.editando = false;
    this.indiceSelecionado = null;
    this.novoProfessor = { id: 0, nome: '', cpf: '', dataNascimento: '', email: '' };
  }
}
