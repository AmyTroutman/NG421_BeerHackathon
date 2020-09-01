import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IBeer } from '../ibeer';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private apiService: ApiService) { }

  async getBeers(): Promise<IBeer[]> {
    return await this.apiService.get();
  }
  async getBeersByCount(count: number) {
    return await this.apiService.getMore('?per_page=' + count);
  }
}
