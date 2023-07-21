import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Game } from '@models/game.model';
import { StorageKey } from '@enums/storage-key.enum';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private localStorageService: LocalStorageService) {}

  public initialize(): void {
    // set empty list for initialization
    if (!this.localStorageService.getItem(StorageKey.FAVORITE_GAMES)) {
      this.localStorageService.setItem(StorageKey.FAVORITE_GAMES, []);
    }
  }

  public get(): Game[] {
    return this.localStorageService.getItem(StorageKey.FAVORITE_GAMES) || [];
  }

  public add(game: Game): void {
    let favouriteGames = this.get();
    favouriteGames.push(game);
    this.localStorageService.setItem(StorageKey.FAVORITE_GAMES, favouriteGames);
  }

  public remove(gameId: number): void {
    let favouriteGames = this.get();
    favouriteGames = favouriteGames.filter((game) => game.id != gameId);
    this.localStorageService.setItem(StorageKey.FAVORITE_GAMES, favouriteGames);
  }

  public existsOnFavorites(id: number): boolean {
    let favouriteGames = this.get();
    return favouriteGames.findIndex((game) => game.id == id) != -1;
  }
}
