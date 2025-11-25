import { Component, OnInit } from '@angular/core';
import { Professor } from '../../service/professor';

@Component({
  selector: 'app-cadastrar-professor',
  standalone: false,
  templateUrl: './cadastrar-professor.html',
  styleUrl: './cadastrar-professor.css',
})
export class CadastrarProfessor implements OnInit {

  professor: any[] = [];

  // Injeção do service no construtor
  constructor(private professorService: Professor

              ) {}

  ngOnInit() {
    this.professor = this.professorService.getProfessor();
  }

}
