import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String = 'Ivan';
  duljina: Number = 0;

  duljinaImena(): void {
    this.duljina = this.name.length;
  }
}
