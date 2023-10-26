import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://www.metaweather.com/api/location/';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(`${this.apiUrl}search/?query=${city}`);
  }
}
