import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './modules/menu/pages/menu/menu.component';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {
    path:'menu',
    component:MenuComponent,
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule),
  },
  {
    path:'home',
    component:HomeComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path:'**',
    redirectTo:'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
