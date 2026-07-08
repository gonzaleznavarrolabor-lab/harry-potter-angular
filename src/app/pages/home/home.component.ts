import { Component, inject, signal } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../models/personaje.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private service = inject(PersonajeService);

  personajes = signal<Personaje[]>([]);

  constructor() {
    this.cargar();
  }

  cargar() {
    this.service.obtenerTodas().subscribe((data) => {
      this.personajes.set(data);
    });
  }
}
