import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { COUNTRIES } from '../mock-countries';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[];
  selectedCountry: Country;
  onSelect(country: Country): void {
  this.selectedCountry = country;
  }
  constructor(private countryService: CountryService) { }
  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }
  ngOnInit() {
    this.getCountries();
  }

}
