import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}`;

  obtenerTodas(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.apiUrl}/${id}`);
  }
}
