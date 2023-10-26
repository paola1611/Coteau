import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NombreEdadPage } from './nombre-edad.page';

const routes: Routes = [
  {
    path: '',
    component: NombreEdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NombreEdadPageRoutingModule {}
