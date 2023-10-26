import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../universities.service';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {
  universities: any[] = [];
  country: string = ''; // Puedes cambiarlo al país que desees

  constructor(private universitiesService: UniversitiesService) {}

  ngOnInit() {
    this.getUniversities();
  }

  getUniversities() {
    console.log('Obteniendo universidades...');
    this.universitiesService.getUniversitiesByCountry(this.country).subscribe(
      (data: any) => {
        this.universities = data;
      },
      (error) => {
        console.error('Error al obtener las universidades:', error);
      }
    );
  }
}
