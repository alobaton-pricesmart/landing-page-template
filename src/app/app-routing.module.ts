import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlRoutes } from './constants/url-routes';


const routes: Routes = [
  {
    path: '',
    redirectTo: UrlRoutes.PAGES,
    pathMatch: 'full'
  },
  {
    path: UrlRoutes.PAGES,
    loadChildren: './pages/pages.module#PagesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
