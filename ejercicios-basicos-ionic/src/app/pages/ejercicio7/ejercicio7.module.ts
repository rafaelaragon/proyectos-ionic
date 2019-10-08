import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ejercicio7Page } from './ejercicio7.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio7Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ejercicio7Page]
})
export class Ejercicio7PageModule {}
