import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfessorService } from '../../service/professor.service';
import { Professor } from '../../models/professor.model';

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
  novoProfessor: Professor = { nome: '', cpf: '', dataNascimento: '', email: '' };
  editando = false;
  professorSelecionado: Professor | null = null;

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    this.listarProfessores();
  }

  listarProfessores() {
    this.professorService.getProfessores().subscribe((data: Professor[]) => {
      this.professores = data;
    });
  }

  salvarProfessor() {
    if (this.editando && this.professorSelecionado?.id) {
      this.professorService
        .updateProfessor(this.professorSelecionado.id, this.novoProfessor)
        .subscribe(() => {
          this.cancelarEdicao();
          this.listarProfessores();
        });
    } else {
      this.professorService
        .createProfessor(this.novoProfessor)
        .subscribe(() => {
          this.novoProfessor = { nome: '', cpf: '', dataNascimento: '', email: '' };
          this.listarProfessores();
        });
    }
  }

  editarProfessor(professor: Professor) {
    this.novoProfessor = { ...professor };
    this.professorSelecionado = professor;
    this.editando = true;
  }

  excluirProfessor(id: number) {
    this.professorService.deleteProfessor(id).subscribe(() => {
      this.listarProfessores();
    });
  }

  cancelarEdicao() {
    this.editando = false;
    this.novoProfessor = { nome: '', cpf: '', dataNascimento: '', email: '' };
    this.professorSelecionado = null;
  }
}
