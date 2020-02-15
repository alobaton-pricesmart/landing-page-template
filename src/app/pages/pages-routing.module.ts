import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UrlRoutes } from '../constants/url-routes';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: UrlRoutes.HOME,
        pathMatch: 'full'
      },
      {
        path: UrlRoutes.HOME,
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
