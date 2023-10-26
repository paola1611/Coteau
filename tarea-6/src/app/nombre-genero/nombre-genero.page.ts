import { Component, OnInit } from '@angular/core';
import { GenderizeService } from '../genderize.service';

@Component({
  selector: 'app-nombre-genero',
  templateUrl: './nombre-genero.page.html',
  styleUrls: ['./nombre-genero.page.scss'],
})
export class NombreGeneroPage implements OnInit {
  
  ngOnInit() {
  }
  name: string = "";
  prediction: any;

  constructor(private genderizeService: GenderizeService) {}

  predictGender() {
    this.genderizeService.predictGender(this.name).subscribe((data: any) => {
      this.prediction = data;
    });
  }
}
