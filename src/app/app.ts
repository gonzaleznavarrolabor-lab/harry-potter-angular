import { Component, signal } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<app-home />`,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('videojuegos-angular');
}
