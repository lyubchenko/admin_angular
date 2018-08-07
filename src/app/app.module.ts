import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

// libs

// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app/app.router';
// component
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

// modules
import { SharedModule } from './shared/shared.module';
// services

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    // SharedModule
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
