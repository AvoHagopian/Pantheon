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

  constructor(private godService: GodService) { }

  getGods(): void {
    this.godService.getGods().subscribe(gods => this.gods = gods);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.godService.addGod({ name } as God)
      .subscribe(god => {
        this.gods.push(god);
      });
  }

  delete(god: God): void {
    this.gods = this.gods.filter(g => g !== god);
    this.godService.deleteGod(god).subscribe();
  }

  ngOnInit() {
    this.getGods();
  }

}
