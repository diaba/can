import { Stadium } from './stadium';
import { Team } from './team';

export class Match {
  public date: Date;
  public teamA: number;
  public teamB: number;
  public score: string;
  public stadium: Stadium;
  constructor(
    date: Date,
    teamA: number,
    teamB: number,
    score: string,
    stadium: Stadium
  ) {
    this.date = date;
    this.teamA = teamA;
    this.score = score;
    this.teamB = teamB;
    this.stadium = stadium;
  }
}
