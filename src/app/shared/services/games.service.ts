import { Injectable } from '@angular/core';
import { Endpoint } from '../enums/endpoint.enum';
import { environment as env } from '../../../environments/environment';
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { Game } from '../models/game.model';

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

  constructor() {}

  public async getAllGames(): Promise<Game[]> {
    const games = (await this.api.get(env.apiBaseUrl + '/' + Endpoint.GAMES))
      .data;

    if (!games) {
      // TODO - proper error handling
      console.error('could not load game data from the API');
    }

    return games;
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
