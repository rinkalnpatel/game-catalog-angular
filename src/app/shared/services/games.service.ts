import { Injectable } from '@angular/core';
import { Endpoint } from '../enums/endpoint.enum';
import { environment as env } from '../../../environments/environment';
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { Game } from '../models/game.model';
import { ToastManager } from '@blocks/toast/toast.manager';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  // Default configuration
  private default: CreateAxiosDefaults = {
    timeout: env.apiTimeout,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-RapidAPI-Key': env.apiHeaderKey,
      'X-RapidAPI-Host': env.apiHeaderHost,
    },
  };

  private api: AxiosInstance = axios.create(this.default);

  constructor(private toastManager: ToastManager) {}

  public async getAllGames(): Promise<Game[]> {
    try {
      const games = (await this.api.get(env.apiBaseUrl + '/' + Endpoint.GAMES))
        .data;

      if (!games) {
        // TODO - proper error handling
        this.toastManager.quickShow(
          'Empty game list returned from server',
          'danger',
          true
        );
      }

      return games;
    } catch (err) {
      this.toastManager.quickShow(
        'Error while loading game data',
        'danger',
        true
      );
      return [];
    }
  }

  public async getGameDetails(id: number): Promise<Game> {
    const game = (
      await this.api.get(env.apiBaseUrl + '/' + Endpoint.GAME, {
        params: { id: id },
      })
    ).data;

    if (!game) {
      // TODO - proper error handling
      console.error('could not load game data from the API');
    }

    return game;
  }
}
