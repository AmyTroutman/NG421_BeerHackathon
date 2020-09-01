import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeer } from '../ibeer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BeersUrl = 'https://api.punkapi.com/v2/beers';
  constructor(private httpClient: HttpClient) { }

  async get(options?: any): Promise<IBeer[]> {
    return this.httpClient.get<IBeer[]>(this.BeersUrl, {
      headers: null,
      params: options
    }).toPromise();
  }

  async getMore(path) {
    return await this.httpClient.get<IBeer[]>(this.BeersUrl + path).toPromise();
  }
}
