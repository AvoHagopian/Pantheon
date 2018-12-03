import { Component, OnInit } from '@angular/core';
import { God } from '../god';
import { GODS } from '../mock-gods';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.css']
})
export class GodComponent implements OnInit {
  gods = GODS;
  selectedGod: God;
  onSelect(god: God): void {
  this.selectedGod = god;
  }
  constructor() { }

  ngOnInit() {
  }

}
