import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialAppModule } from './ngmaterial.module';

// libs

// app
import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router';

// services
import { AppBasicService } from '@services/app-basic/app-basic.service';
import { ApiService } from '@services/api/api.service';

// component
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainMenuComponent } from './layouts/main-menu/main-menu.component';

// modules
import { SharedModule } from '@shared/shared.module';

// services

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialAppModule,
    AppRouterModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent
  ],
  providers: [
    AppBasicService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
