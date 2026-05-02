import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { SeguridadService } from "../../core/services/seguridad.service";
import { error } from "console";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient, private router: Router, 
    private seguridadService: SeguridadService) {}

  login() {
    const body = {
      email: this.username,
      password: this.password
    };

    this.seguridadService.login(body).subscribe({
        next: (res: any) => {
            console.log('Login correcto', res);
            localStorage.setItem('usuario', JSON.stringify(res));
            this.router.navigate(['/citas']);
        },
        error: (err) => console.error('Error en login', err)
    });
  }


  irRegistro(): void {
    this.router.navigate(['/registro']); // 👈 redirige al registro
  }
}