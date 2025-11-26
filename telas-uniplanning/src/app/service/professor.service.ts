import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private apiUrl = 'http://localhost:8080/professores';

  constructor(private http: HttpClient) {}

  getProfessores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProfessorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createProfessor(professor: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, professor);
  }

  updateProfessor(id: number, professor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, professor);
  }

  deleteProfessor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
