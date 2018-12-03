import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  @Input() country: Country;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }
  getCountry(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.countryService.getCountry(id)
      .subscribe(country => this.country = country);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.getCountry();
  }

}
