// Angular modules
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { Game } from '../../shared/models/game.model';
import { Router } from '@angular/router';
import { FavoriteService } from '@services/favorite.service';

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
    public favoriteService: FavoriteService
  ) {
    this.loadAllGames();
  }

  public async ngOnInit() {}

  onSearchEvent(query: string): void {
    console.log('search emit receieved', query);
    this.searchGames(query);
  }

  async loadAllGames(): Promise<void> {
    this.games = await this.gamesService.getAllGames();
    this.resetFilteredList();
    this.isLoading = false;
    console.log('all games loaded', this.games);
  }

  searchGames(query: string) {
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

  resetFilteredList(): void {
    // reset filtered games copy to have all games
    this.filteredGames = this.games;
  }

  openGameDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

  addGameToFavorite(game: Game): void {
    this.favoriteService.add(game);
  }
}
