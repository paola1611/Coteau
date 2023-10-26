import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgifyService {
  private apiUrl = 'https://api.agify.io';

  constructor(private http: HttpClient) { }

  predictAge(name: string) {
    const url = `${this.apiUrl}?name=${name}`;
    return this.http.get(url);
  }
}
