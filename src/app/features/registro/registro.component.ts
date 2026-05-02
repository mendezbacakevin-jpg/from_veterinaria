import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { SeguridadService } from "../../core/services/seguridad.service";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
})
export class RegistroComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  mensaje: string = '';

  constructor(private router: Router, private seguridadService: SeguridadService) {}

  registrar(): void {
    if (this.password !== this.confirmPassword) {
      this.mensaje = 'Las contraseñas no coinciden';
      return;
    }

    // Aquí iría tu llamada al backend para registrar el usuario
    console.log('Usuario registrado:', {
      username: this.username,
      email: this.email,
      password: this.password
    });

    const body = {
        username: this.username,
      email: this.email,
      password: this.password
    };

    this.seguridadService.registrar(body).subscribe({
        next: (res: any) => {
            debugger
            console.log('Registro correcto', res);
            this.router.navigate(['/login']);
        },
        error: (err) => console.error('Error en login', err)
    });
  }

  irLogin(): void {
    this.router.navigate(['/login']); // 👈 método para volver al login
  }
}
