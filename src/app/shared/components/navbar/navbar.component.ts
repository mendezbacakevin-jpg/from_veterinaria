import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterModule, CommonModule]
})
export class NavbarComponent {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isLogged(): boolean {
    return this.isBrowser() && localStorage.getItem('usuario') !== null;
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('usuario');
    }
    this.router.navigate(['/login']);
  }

  getUsuario() {
    if (!this.isBrowser()) return '';
    const data = localStorage.getItem('usuario');
    const usuario = data ? JSON.parse(data) : null;
    return usuario ? usuario.username : '';
  }
}