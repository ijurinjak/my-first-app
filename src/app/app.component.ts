import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  datum: Date = new Date();
  naziv: String;

  displayedColumns = ['rbr', 'naziv', 'tezina', 'simbol'];
  podaciTablicaDataSource = new MatTableDataSource(PODACI);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.podaciTablicaDataSource.paginator = this.paginator;
  }

  filtriraj(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.podaciTablicaDataSource.filter = filterValue;
  }
}

export interface Redak {
  rbr: number;
  naziv: string;
  tezina: number;
  simbol: string;
}

const PODACI: Redak[] = [
  { rbr: 1, naziv: 'Hydrogen', tezina: 1.0079, simbol: 'H' },
  { rbr: 2, naziv: 'Helium', tezina: 4.0026, simbol: 'He' },
  { rbr: 3, naziv: 'Lithium', tezina: 6.941, simbol: 'Li' },
  { rbr: 4, naziv: 'Beryllium', tezina: 9.0122, simbol: 'Be' },
  { rbr: 5, naziv: 'Boron', tezina: 10.811, simbol: 'B' },
  { rbr: 6, naziv: 'Carbon', tezina: 12.0107, simbol: 'C' },
  { rbr: 7, naziv: 'Nitrogen', tezina: 14.0067, simbol: 'N' },
  { rbr: 8, naziv: 'Oxygen', tezina: 15.9994, simbol: 'O' },
  { rbr: 9, naziv: 'Fluorine', tezina: 18.9984, simbol: 'F' },
  { rbr: 10, naziv: 'Neon', tezina: 20.1797, simbol: 'Ne' },
  { rbr: 11, naziv: 'Sodium', tezina: 22.9897, simbol: 'Na' },
  { rbr: 12, naziv: 'Magnesium', tezina: 24.305, simbol: 'Mg' },
  { rbr: 13, naziv: 'Aluminum', tezina: 26.9815, simbol: 'Al' },
  { rbr: 14, naziv: 'Silicon', tezina: 28.0855, simbol: 'Si' },
  { rbr: 15, naziv: 'Phosphorus', tezina: 30.9738, simbol: 'P' },
  { rbr: 16, naziv: 'Sulfur', tezina: 32.065, simbol: 'S' },
  { rbr: 17, naziv: 'Chlorine', tezina: 35.453, simbol: 'Cl' },
  { rbr: 18, naziv: 'Argon', tezina: 39.948, simbol: 'Ar' },
  { rbr: 19, naziv: 'Potassium', tezina: 39.0983, simbol: 'K' },
  { rbr: 20, naziv: 'Calcium', tezina: 40.078, simbol: 'Ca' }
];
