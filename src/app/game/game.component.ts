import { Component, OnInit } from '@angular/core';
import { MatchService } from '../service/match.service';
import { Match } from '../model/match';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent implements OnInit {
  constructor(private matchService: MatchService) {}
  match!: Match[];

  ngOnInit(): void {
    this.matchService.getAllMatch().subscribe((match) => {
      const now = new Date();
      this.match = match.filter((x) => {
       // console.log(x.date.toString().substring(0,2) == '12');
      x.date.toString().substring(0, 2) == '12';
        //console.log(x.date.toString().substring(0,2));

        //return x.date.getMonth() == now.getMonth() && x.date.getDay() == now.getDay();
      });
      console.log(match);
    });
  }
}
