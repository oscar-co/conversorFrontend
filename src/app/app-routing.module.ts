import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';
import { CoversionPatronComponent } from './patrones/coversion-patron/coversion-patron.component';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'conversor', component: ConversorComponent },
  { path: 'conversorPatron', component: CoversionPatronComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
