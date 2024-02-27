import { Team } from './team';

export class Player {
  public name: string;
  public age: number;
  public position: string;
  public team: Team;
  constructor(name: string, age: number, position: string, team: Team) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.team = team;
  }
}
