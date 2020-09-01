import { Component, OnInit, ViewChild } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { IBeer } from '../ibeer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  dataSource: MatTableDataSource<IBeer>;
  displayedColumns: string[] = ['name', 'tagline', 'image_url', 'abv'];
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;

  count = 25;

  constructor(private beerService: BeerService) { }


  async ngOnInit() {
    this.dataSource = new MatTableDataSource(await this.beerService.getBeers());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  async newBeer() {
    this.dataSource = new MatTableDataSource(await this.beerService.getBeersByCount(++this.count));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
