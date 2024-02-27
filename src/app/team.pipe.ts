import { Pipe, PipeTransform } from '@angular/core';
import { MatchService } from './service/match.service';
import { Team } from './model/team';

@Pipe({
  name: 'name',
})
export class TeamPipe implements PipeTransform {

  constructor(private matchService: MatchService) {}
  transform(value: any, args?: any): any {
    let t!: Team;
    
    // this.matchService.getTeam(value).subscribe((team) => (t = team.name));
    return t.name;
  }
}
