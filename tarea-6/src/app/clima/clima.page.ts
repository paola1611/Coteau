import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  ngOnInit() {
  }

  selectedProvince: string = 'Santo Domingo';
  climaData: any;

  constructor(private http: HttpClient) {}

  fetchWeatherData() {
    const province = this.selectedProvince;

    if (province) {
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=4ed03e53105e49c895491653232610&q=${province}`;
      this.http.get(apiUrl).subscribe((data: any) => {
        this.climaData = {
          location: data.location.name,
          localtime: data.location.localtime,
          condition: data.current.condition.text,
          tempC: data.current.temp_c,
          windKph: data.current.wind_kph,
          humidity: data.current.humidity,
        };
      });
    }
  }
}

