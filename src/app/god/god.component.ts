import { Component, OnInit } from '@angular/core';

import { God } from '../god';
import { GODS } from '../mock-gods';
import { GodService } from '../god.service';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.css']
})
export class GodComponent implements OnInit {
  gods: God[];
  selectedGod: God;
  onSelect(god: God): void {
  this.selectedGod = god;
  }
  constructor(private godService: GodService) { }
  getGods(): void {
    this.godService.getGods().subscribe(gods => this.gods = gods);
  }
  ngOnInit() {
    this.getGods();
  }

}
