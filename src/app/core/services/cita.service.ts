import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita, CitaRequest } from '../../features/citas/model/cita.model';
import { Servicio } from '../../features/citas/model/servicio.model';
import { Veterinario } from '../../features/citas/model/veterinario.model'; // 👈 agregado
import { Animal } from '../../features/citas/model/animal.model'; // 👈 agregado



@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get(this.apiUrl+'citas');
  }

  crear(data: any) {
    return this.http.post(this.apiUrl+'citas', data);
  }
  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.apiUrl+'citas');
  }
  getServicios(): Observable<Servicio[]> {
  return this.http.get<Servicio[]>(this.apiUrl + 'servicios'); 
  // 👈 Ajusta el endpoint según tu backend
}
getVeterinarios(): Observable<Veterinario[]> {
  return this.http.get<Veterinario[]>(this.apiUrl + 'veterinarios'); 
  // 👈 Ajusta el endpoint según tu backend
}
  // ...otros métodos

  getAnimales(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl + 'animales'); // 👈 agregado
  }
  //  AGREGADO: actualizar cita
  updateCita(id: number, dto: CitaRequest): Observable<Cita> {
    return this.http.put<Cita>(`${this.apiUrl+'citas'}/${id}`, dto);
  }

  //  AGREGADO: eliminar cita
  deleteCita(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl+'citas'}/${id}`, { responseType: 'text' });
  }


}