import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule, JsonpModule} from '@angular/http';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {FixComponent} from './fix/fix.component';
import {MainService} from './service/main.service';
import {HttpClientModule} from '@angular/common/http';
import {_HttpClient} from './util/_HttpClient';
import {AppRoutingModule} from './app-routing.module';
import {Code404Component} from './code404/code404.component';
import {FvfgComponent} from './fvfg/fvfg.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContactComponent } from './contact/contact.component';
import { FvfgDetailsComponent } from './fvfg-details/fvfg-details.component';
import { ZbggComponent } from './zbgg/zbgg.component';
import { ZbggDetailsComponent } from './zbgg-details/zbgg-details.component';
import { DictionoaryPipe } from './pips/dictionoary.pipe';
import { ZhongbggComponent } from './zhongbgg/zhongbgg.component';
import { ZhongbggDetailsComponent } from './zhongbgg-details/zhongbgg-details.component';

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
        Code404Component,
        FvfgComponent,
        ContactComponent,
        FvfgDetailsComponent,
        ZbggComponent,
        ZbggDetailsComponent,
        DictionoaryPipe,
        ZhongbggComponent,
        ZhongbggDetailsComponent,
    ],
    imports: [
        BrowserModule,
        NgxPaginationModule,
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
export class AppModule {
}
