import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Genero', url: '/nombre-genero', icon: 'transgender' },
    { title: 'Edad', url: '/nombre-edad', icon: 'balloon' },
    { title: 'Universidades', url: '/universidades', icon: 'school' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'WordPress', url: '/wordpress', icon: 'bookmarks' },
  ];

  constructor() {}
}
