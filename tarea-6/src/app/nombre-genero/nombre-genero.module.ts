import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NombreGeneroPageRoutingModule } from './nombre-genero-routing.module';

import { NombreGeneroPage } from './nombre-genero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NombreGeneroPageRoutingModule
  ],
  declarations: [NombreGeneroPage]
})
export class NombreGeneroPageModule {}
