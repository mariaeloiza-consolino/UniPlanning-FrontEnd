import { Injectable } from '@angular/core';

export interface Professor {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private key = 'professores';

  getProfessores(): Professor[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  addProfessor(professor: Professor): void {
    const professores = this.getProfessores();
    professores.push(professor);
    localStorage.setItem(this.key, JSON.stringify(professores));
  }

  updateProfessor(index: number, professor: Professor): void {
    const professores = this.getProfessores();
    professores[index] = professor;
    localStorage.setItem(this.key, JSON.stringify(professores));
  }

  deleteProfessor(index: number): void {
    const professores = this.getProfessores();
    professores.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(professores));
  }

  clearAll(): void {
    localStorage.removeItem(this.key);
  }
}
