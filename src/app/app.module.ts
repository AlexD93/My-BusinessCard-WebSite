import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
//import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { portfolioComponent } from './contentArea/portfolio/app.portfolioComponent';
import { aboutComponent } from './contentArea/about/app.aboutComponent';
import { contactComponent } from "./contentArea/contact/app.contactComponent";



@NgModule({
  imports:      [ BrowserModule ],


  
  declarations: [ AppComponent,  
                  headerComponent, 
                  navComponent,
                  //contentAreaComponent,
                  footerComponent,
                  portfolioComponent,
                  aboutComponent,
                  contactComponent],



  bootstrap:    [ AppComponent ]
})
export class AppModule { }
