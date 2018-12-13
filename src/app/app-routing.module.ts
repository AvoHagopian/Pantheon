import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CountryComponent } from './country/country.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { GodComponent } from './god/god.component';
import { GodDetailComponent } from './god-detail/god-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'hero/detail/:id', component: HeroDetailComponent},
  {path: 'country', component: CountryComponent},
  {path: 'country/detail/:id', component: CountryDetailComponent},
  {path: 'god', component: GodComponent},
  {path: 'god/detail/:id', component: GodDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
