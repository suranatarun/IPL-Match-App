import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IPLDataServeService {
  public TeamURL = '../assets/JSON-Folder/teams.json';
  public DeliveryURL = '../assets/JSON-Folder/delivery.json';
  public MatchesURL = '../assets/JSON-Folder/matches.json';
  public MostRunsURL = '../assets/JSON-Folder/most-runs-Strikerate.json';
  public PlayersURL = '../assets/JSON-Folder/players.json';
  public TeamWiseURL = '../assets/JSON-Folder/teamwise.json';
  constructor(private http: HttpClient) { }

  public getteamdata(): any{
    return this.http.get(this.TeamURL);
  }
  public getDeliverydata(): any {
    return this.http.get(this.DeliveryURL);
  }
  public getMatchData(): any {
    return this.http.get(this.MatchesURL);
  }
  public getMostRunsData(): any {
    return this.http.get(this.MostRunsURL);
  }
  public getPlayersData(): any {
    return this.http.get(this.PlayersURL);
  }
  public getTeamWiseData(): any {
    return this.http.get(this.TeamWiseURL);
  }
}



