import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ejercicio1', loadChildren: './pages/ejercicio1/ejercicio1.module#Ejercicio1PageModule' },
  { path: 'ejercicio2', loadChildren: './pages/ejercicio2/ejercicio2.module#Ejercicio2PageModule' },
  { path: 'ejercicio3', loadChildren: './pages/ejercicio3/ejercicio3.module#Ejercicio3PageModule' },
  { path: 'ejercicio4', loadChildren: './pages/ejercicio4/ejercicio4.module#Ejercicio4PageModule' },
  { path: 'ejercicio5', loadChildren: './pages/ejercicio5/ejercicio5.module#Ejercicio5PageModule' },
  { path: 'ejercicio6', loadChildren: './pages/ejercicio6/ejercicio6.module#Ejercicio6PageModule' },
  { path: 'ejercicio7', loadChildren: './pages/ejercicio7/ejercicio7.module#Ejercicio7PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
