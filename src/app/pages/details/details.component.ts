import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from '@models/game.model';
import { GamesService } from '@services/games.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  public game: Game | undefined;
  public gameId: number | undefined;
  public routeSubscription: Subscription;

  constructor(
    private gamesService: GamesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.routeSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.gameId = params['id'];
        if (this.gameId) {
          this.loadGameDetails(this.gameId);
        } else {
          console.error('no id parameter found');
        }
      }
    );
  }

  async loadGameDetails(id: number) {
    this.game = await this.gamesService.getGameDetails(id);

    // this.isLoading = false;
    console.log('game details loaded', this.game);
  }

  ngOnDestroy(): void {
    // cleanup for subscription
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
