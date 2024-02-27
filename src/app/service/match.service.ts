import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../model/match';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  readonly url = 'http://localhost:3000/match';
  constructor(private http: HttpClient) {}
  getAllMatch(): Observable<Match[]> {
    return this.http.get<Match[]>(this.url);
  }
  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>('http://localhost:3000/Team?id=' + id);
  }
}
