import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { COUNTRIES } from '../mock-countries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries = COUNTRIES;
  selectedCountry: Country;
  onSelect(country: Country): void {
  this.selectedCountry = country;
  }
  constructor() { }

  ngOnInit() {
  }

}
