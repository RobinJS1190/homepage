import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [AppComponent, CarouselComponent],
  imports: [BrowserModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent, BrowserModule],
})
export class AppModule {}
