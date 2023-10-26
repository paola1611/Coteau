import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {
  private apiUrl = 'https://api.adamix.net/itla/universidades';

  constructor(private http: HttpClient) { }

  getUniversitiesByCountry(country: string) {
    const url = `${this.apiUrl}/?pais=${country}`;
    return this.http.get(url);
  }
}
