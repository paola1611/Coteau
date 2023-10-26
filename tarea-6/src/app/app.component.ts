import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inhobox', url: '/nombre-genero', icon: 'home' },
    { title: 'Outbox', url: '/nombre-edad', icon: 'paper-plane' },
    { title: 'Favorites', url: '/universidades', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  constructor() {}
}
