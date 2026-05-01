import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
//rutas
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vida-animal-veterinaria');
}
