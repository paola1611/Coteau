import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {

  link: any[] = [];
  constructor(private http: HttpClient) { }

  showNews(){

    const apiUrl = `https://techcrunch.com/wp-json/tc/v1/magazine?page=1&_embed=true&es=true`;

    this.http.get(apiUrl).subscribe((response: any) => {
      console.log('Respuesta de la API: ', response);
      const latestNews = response.slice(0, 3);

      this.link = latestNews;
    });
  }

  ngOnInit() {
  }

}
