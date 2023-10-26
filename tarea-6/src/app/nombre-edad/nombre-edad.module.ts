import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NombreEdadPageRoutingModule } from './nombre-edad-routing.module';

import { NombreEdadPage } from './nombre-edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NombreEdadPageRoutingModule
  ],
  declarations: [NombreEdadPage]
})
export class NombreEdadPageModule {}
