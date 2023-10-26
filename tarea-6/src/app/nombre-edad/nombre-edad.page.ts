import { Component, OnInit } from '@angular/core';
import { AgifyService } from '../agify.service';

@Component({
  selector: 'app-nombre-edad',
  templateUrl: './nombre-edad.page.html',
  styleUrls: ['./nombre-edad.page.scss'],
})
export class NombreEdadPage{

  name: string = "";
  agePrediction: any;

  constructor(private agifyService: AgifyService) {}

  predictAge() {
    this.agifyService.predictAge(this.name).subscribe((data: any) => {
      this.agePrediction = data;
      this.setAgeState();
    });
  }

  setAgeState() {
    if (this.agePrediction.age < 18) {
      this.agePrediction.state = 'Joven';
      this.agePrediction.image = 'assets/img/jovenes.jpg';
    } else if (this.agePrediction.age < 60) {
      this.agePrediction.state = 'Adulto';
      this.agePrediction.image = 'assets/img/adulto.jpg';
    } else {
      this.agePrediction.state = 'Anciano';
      this.agePrediction.image = 'assets/img/anciano.jpg';
    }
  }
}