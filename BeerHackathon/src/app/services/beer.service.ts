import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IBeer } from '../ibeer';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private readonly BEERS_URL = 'https://api.punkapi.com/v2/beers';
  constructor(private apiService: ApiService) { }

  async getBeers(): Promise<IBeer[]> {
    return await this.apiService.get(this.BEERS_URL);
  }
  async getBeersByCount(count: number) {
    return await this.apiService.getMore('?per_page=' + count);
  }
}
