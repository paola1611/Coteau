import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  ngOnInit() {
  }

  weatherData: any;

  async getWeather() {
    try {
      const latitude =  18.5001200; // Reemplaza con la latitud deseada
      const longitude =  -69.9885700; // Reemplaza con la longitud deseada
      const response = await fetch(`https://open-meteo.com/v1/forecast?forecast=7&latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      if (response.ok) {
        this.weatherData = await response.json();
      } else {
        console.error('Error al obtener datos del clima.');
      }
    } catch (error) {
      console.error('Error al obtener datos del clima.', error);
    }
  }
}
