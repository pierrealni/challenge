import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CurrencyDecimalDirective} from './shared/directives/currency-decimal';

import { ApiService } from './shared/services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AboutPage,
    FooterComponent,
    CurrencyDecimalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
