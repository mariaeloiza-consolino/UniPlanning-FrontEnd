import { Injectable } from '@angular/core';

export interface Professor {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
}

@Injectable({
  providedIn: 'any' // 👈 importante: garante reuso entre módulos lazy
})
export class ProfessorService {
  private static instance: ProfessorService;
  private professores: Professor[] = [];

  constructor() {
    if (ProfessorService.instance) {
      return ProfessorService.instance;
    }
    ProfessorService.instance = this;
    console.log('✅ Instância única do ProfessorService criada');
  }

  getProfessores(): Professor[] {
    return this.professores;
  }

  addProfessor(professor: Professor): void {
    this.professores.push(professor);
    console.log('📚 Lista atualizada:', this.professores);
  }

  deleteProfessor(index: number): void {
    this.professores.splice(index, 1);
  }

  updateProfessor(index: number, professor: Professor): void {
    this.professores[index] = professor;
  }
}
