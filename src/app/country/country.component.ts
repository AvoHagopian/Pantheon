import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) { }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.countryService.addCountry({ name } as Country)
      .subscribe(country => {
        this.countries.push(country);
      });
  }

  delete(country: Country): void {
    this.countries = this.countries.filter(c => c !== country);
    this.countryService.deleteCountry(country).subscribe();
  }

  ngOnInit() {
    this.getCountries();
  }

}
