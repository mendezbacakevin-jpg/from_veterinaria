import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare let L: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  
})
export class ContactoComponent implements AfterViewInit {

  @ViewChild('map') mapContainer!: ElementRef;

  ngAfterViewInit(): void {
    const map = L.map(this.mapContainer.nativeElement).setView([-12.073, -77.043], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap'
    }).addTo(map);

    L.marker([-12.073, -77.043])
      .addTo(map)
      .bindPopup('Clínica Veterinaria Vida Animal')
      .openPopup();
  }
}