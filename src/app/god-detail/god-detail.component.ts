import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { GodService } from '../god.service';
import { God } from '../god';

@Component({
  selector: 'app-god-detail',
  templateUrl: './god-detail.component.html',
  styleUrls: ['./god-detail.component.css']
})
export class GodDetailComponent implements OnInit {
  @Input() god: God;
  constructor(
    private route: ActivatedRoute,
    private godService: GodService,
    private location: Location
  ) { }
  getGod(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.godService.getGod(id)
      .subscribe(god => this.god = god);
    this.godService.getCountry(id)
      .subscribe(result => this.god.countryName = result.name);
    this.stateSave();
  }
  save(): void {
    this.godService.updateGod(this.god)
      .subscribe(() => this.goBack());
  }
  stateSave(): void {
    this.godService.updateGod(this.god)
      .subscribe();
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.getGod();
  }

}
