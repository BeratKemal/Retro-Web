import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebModule } from './web/web.module'
import { WebComponent } from './web/web.component';
import { AuthModule } from './auth/auth.module'
import { AuthComponent } from './auth/auth.component';
import { ShopModule } from './shop/shop.module'
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        loadChildren: './web/web.module#WebModule'
      },
    ]
  },
  {
    path: 'login',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
      },
    ]
  },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: '',
        loadChildren: './shop/shop.module#ShopModule'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }