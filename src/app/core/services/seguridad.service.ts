import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SeguridadService {
    private apiUrl = 'http://localhost:8080/api/seguridad/';

    constructor(private http: HttpClient) {}

    login(data: any) {
        return this.http.post(this.apiUrl+'login', data);
    }

    // 🔹 REGISTRO
  registrar(data: any) {

    const body = new URLSearchParams();
    body.set('username', data.username);
    body.set('email', data.email);
    body.set('password', data.password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(
    this.apiUrl + 'registrarUsuario',
    body.toString(),
    {
        headers,
        responseType: 'text' // 👈 CLAVE
    }
    );
  }
}