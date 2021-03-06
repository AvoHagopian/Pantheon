import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { GodComponent } from './god/god.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { GodDetailComponent } from './god-detail/god-detail.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    GodComponent,
    HeroComponent,
    HeroDetailComponent,
    CountryDetailComponent,
    GodDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
