import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderizeService {
  private apiUrl = 'https://api.genderize.io';

  constructor(private http: HttpClient) { }

  predictGender(name: string) {
    const url = `${this.apiUrl}?name=${name}`;
    return this.http.get(url);
  }
}