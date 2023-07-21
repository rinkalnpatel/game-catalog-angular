import { Component } from '@angular/core';
import { Game } from '@models/game.model';
import { FavoriteService } from '@services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favoriteGames: Game[] = [];
  page = 1;
  pageSize = 32;

  constructor(private favoriteService: FavoriteService) {
    this.loadFavoriteGame();
  }

  loadFavoriteGame(): void {
    this.favoriteGames = this.favoriteService.get();
  }

  removeGameToFavorite(id: number): void {
    this.favoriteService.remove(id);
    this.loadFavoriteGame();
  }
}
