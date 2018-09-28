import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule, JsonpModule} from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FixComponent } from './fix/fix.component';
import {MainService} from './service/main.service';
import {HttpClientModule} from '@angular/common/http';
import {_HttpClient} from './util/_HttpClient';
import {AppRoutingModule} from './app-routing.module';
const routeConfig: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'product/:productId', component: ProductDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FixComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    RouterModule.forRoot(routeConfig),
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    MainService,
    _HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
