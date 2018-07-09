import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatCheckboxModule]
})
export class AppModule { }
