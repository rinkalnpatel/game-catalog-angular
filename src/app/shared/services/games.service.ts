import { Injectable } from '@angular/core';
import { Endpoint } from '../enums/endpoint.enum';
import { environment as env } from '../../../environments/environment';
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../models/game.model';

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
      'X-RapidAPI-Key': env.apiHeaderKey,
      'X-RapidAPI-Host': env.apiHeaderHost,
    },
  };

  private api: AxiosInstance = axios.create(this.default);

  constructor(private http: HttpClient) {}

  public async getAllGames() {
    const games = (await this.api.get(env.apiBaseUrl + '/' + Endpoint.GAMES))
      .data;

    if (!games) {
      // TODO - proper error handling
      console.error('could not load game data from the API');
    }

    return games;
  }
}
