import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {Code404Component} from './code404/code404.component';
import {FvfgComponent} from './fvfg/fvfg.component';
import {ContactComponent} from './contact/contact.component';
import {FvfgDetailsComponent} from './fvfg-details/fvfg-details.component';
import {ZbggComponent} from './zbgg/zbgg.component';
import {ZbggDetailsComponent} from './zbgg-details/zbgg-details.component';
import {ZhongbggComponent} from './zhongbgg/zhongbgg.component';
import {ZhongbggDetailsComponent} from './zhongbgg-details/zhongbgg-details.component';

const routes: Routes = [
    /*路由重定向*/
    // {path: '', redirectTo: '/home', pathMatch: 'full'},

    /*路径为空*/
    // {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    // {path: 'nav/:id', component: NavbarComponent},
    {path: 'nav', component: NavbarComponent},
    // {path: '**', component: Code404Component},
    {path: 'fvfg', component: FvfgComponent},

    {path: 'contact', component: ContactComponent},

    {path: 'fvfgDetails', component: FvfgDetailsComponent},

    /*招标公告*/
    {path: 'zbgg', component: ZbggComponent},

    /*招标公告详情*/
    {path: 'zbggDetails', component: ZbggDetailsComponent},

    /*招标公告*/
    {path: 'zhongbgg', component: ZhongbggComponent},

    /*招标公告详情*/
    {path: 'zhongbggDetails', component: ZhongbggDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
