import { Injectable } from '@angular/core';
import { Endpoint } from '@enums/endpoint.enum';
import { environment } from '@env/environment';
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  // Default configuration
  private default: CreateAxiosDefaults = {
    timeout: 10000, // 10s
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-RapidAPI-Key': environment.apiHeaderKey,
      'X-RapidAPI-Host': environment.apiHeaderHost,
    },
  };

  private api: AxiosInstance = axios.create(this.default);

  constructor() {
  }

  public async getAllGames() {
    const games = (await this.api.get(environment.apiBaseUrl + '/' + Endpoint.GAMES)).data;

    if (!games) {
      // TODO - proper error handling
      console.error('could not load game data from the API');
    }

    return games;
  }
}
