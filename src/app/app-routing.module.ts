import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [
  /*路由重定向*/
  // {path: '', redirectTo: '/home', pathMatch: 'full'},

  /*路径为空*/
  // {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'nav', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
