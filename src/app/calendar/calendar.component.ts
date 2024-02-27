import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Match } from '../model/match';
import { AgGridModule } from 'ag-grid-angular';
import { MatchService } from '../service/match.service';
import { CommonModule } from '@angular/common';
import { TeamPipe } from '../team.pipe';
import { Team } from '../model/team';
import { ColDef } from 'ag-grid-community';
import { map } from 'rxjs/operators';
import { Stadium } from '../model/stadium';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [TeamPipe],
})
export class CalendarComponent implements OnInit {
  allMatches: {
    date: Date;
    teamA: string;
    teamB: string;
    stadium: Stadium;
    score: string;
  }[] = [];
  teams = [
    { id: 1, name: "Cote d'Ivoire", flag: '../src/assets/ic.png', group: 'A' },
    {
      id: 2,
      name: 'Nigeria',
      group: 'A',
    },
    {
      id: 3,
      name: 'Guinee Equatorial',
      group: 'A',
    },
    {
      id: 4,
      name: 'Guinee Bissau',
      group: 'A',
    },
    {
      id: 5,
      name: 'Egypte',
      group: 'B',
    },
    {
      id: 6,
      name: 'Ghana',
      group: 'B',
    },
    {
      id: 7,
      name: 'Cap Vert',
      group: 'B',
    },
    {
      id: 8,
      name: 'Mozambique',
      group: 'B',
    },
    {
      id: 9,
      name: 'Senegal',
      group: 'C',
    },
    {
      id: 10,
      name: 'Cameroon',
      group: 'C',
    },
    {
      id: 11,
      name: 'Guinee',
      group: 'C',
    },
    {
      id: 12,
      name: 'Gambie',
      group: 'C',
    },
    {
      id: 13,
      name: 'Algerie',
      group: 'D',
    },
    {
      id: 14,
      name: 'Burkina Faso',
      group: 'D',
    },
    {
      id: 15,
      name: 'Mauritanie',
      group: 'D',
    },
    { id: 16, name: 'Angola', group: 'D' },
    {
      id: 17,
      name: 'Tunisie',
      group: 'E',
    },
    {
      id: 18,
      name: 'Mali',
      group: 'E',
    },
    {
      id: 19,
      name: 'Afrique du Sud',
      group: 'E',
    },
    {
      id: 20,
      name: 'Namibie',
      group: 'E',
    },
    {
      id: 21,
      name: 'Maroc',
      group: 'F',
    },
    {
      id: 22,
      name: 'Republique Du Congo',
      group: 'F',
    },
    {
      id: 23,
      name: 'Zambie',
      group: 'F',
    },
    {
      id: 24,
      name: 'Tanzanie',
      group: 'F',
    },
  ];
  colDefs: ColDef[] = [
    { field: 'date' },
    { field: 'teamA' },
    { field: 'teamB' },
    { field: 'stadium' },
    { field: 'score' },
  ];
  // rowData!: Match[];
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    let data: Match[] = [];
    this.matchService.getAllMatch().subscribe((match) => {
      data = match;
    });
    //this.transformData(data);
    setTimeout(() => this.transformData(data), 2000);
  }
  transformData(data: Match[]) {
    data.forEach((x) => {
      const team = {
        date: x.date,
        teamA: this.getTeam(x.teamA),
        teamB: this.getTeam(x.teamB),
        stadium: x.stadium,
        score: x.score,
      };
      this.allMatches.push(team);
    });
  }

  getTeam(id: number) {
    let t!: Team;
    t = this.teams.filter((t) => t.id === id)[0];
    return t.name;
  }
  getGroup(id: number) {
    let t!: Team;
    t = this.teams.filter((t) => t.id === id)[0];
    return t.group;
  }
}
//example map
//
// const testtest = this.localArray.map((item) => {
//       const test1 = {
//         label: item.label,
//         labelType: item.labelType,
//         valueType: item.valueType,
//         chartType: item.chartType,
//         dataPoints: [
//           {
//             label: item.dataPoints[0].label,
//             value: this.apiRes[this.i].toString(),
//           },
//         ],
//       };
//       this.i = this.i + 1;
//       return test1;
//     });
//     console.log(testtest);
//   }
// }
