import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NombreGeneroPage } from './nombre-genero.page';

const routes: Routes = [
  {
    path: '',
    component: NombreGeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NombreGeneroPageRoutingModule {}
