import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasonaryComponent } from './masonary/masonary.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';

@NgModule({
  declarations: [
    AppComponent,
    MasonaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMasonryGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
