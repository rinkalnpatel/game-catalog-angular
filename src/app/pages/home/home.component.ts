// Angular modules
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { Game } from '../../shared/models/game.model';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isLoading: boolean = true;
  public games: Game[] = []; // main games list
  public filteredGames: Game[] = []; // copy of main games list to store filtered games
  page = 1;
  pageSize = 32;

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.loadAllGames();
  }

  public async ngOnInit() {}

  onSearchEvent(query: string) {
    console.log('search emit receieved', query);
    this.searchGames(query);
  }

  async loadAllGames() {
    this.games = await this.gamesService.getAllGames();
    this.resetFilteredList();
    this.isLoading = false;
    console.log('all games loaded', this.games);
  }

  async searchGames(query: string) {
    console.log('searching games for query:', query);
    this.resetFilteredList();

    query = query.toLowerCase();
    this.filteredGames = this.games.filter(
      (game) =>
        game.title.toLowerCase().includes(query) ||
        game.short_description.toLowerCase().includes(query)
    );

    // update filtered games copy
    console.log('search result', this.filteredGames);
  }

  resetFilteredList() {
    // reset filtered games copy to have all games
    this.filteredGames = this.games;
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }
}
