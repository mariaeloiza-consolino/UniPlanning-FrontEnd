import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Professor {
  private professores =[
    {id:1, nome: 'otavio'},
    {id:2, nome: 'hernandes'}
];

getProfessor() {
  return this.professores
}
}
