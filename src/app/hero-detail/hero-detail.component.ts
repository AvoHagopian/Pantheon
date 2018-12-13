import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { GodService } from '../god.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  godName: string;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private godService: GodService,
    private location: Location
  ) { }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    this.godService.getCountry(id)
        .subscribe(result => this.hero.countryName = result.name);
    this.godService.getGod(id)
      .subscribe(result => this.hero.godName = result.name);
    this.stateSave();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  stateSave(): void {
    this.heroService.updateHero(this.hero)
      .subscribe();
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.getHero();
  }

}
