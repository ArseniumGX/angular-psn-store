import { Component } from '@angular/core';
import { DumpService } from 'src/app/services/dump.service';
import { GameType } from 'src/app/types/GameType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  games: any;

  constructor(private readonly service: DumpService) {
    this.service.loadData().subscribe((data) => (this.games = data));
  }
}
