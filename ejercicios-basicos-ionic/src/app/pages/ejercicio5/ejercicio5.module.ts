import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ejercicio5Page } from './ejercicio5.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ejercicio5Page]
})
export class Ejercicio5PageModule {}
