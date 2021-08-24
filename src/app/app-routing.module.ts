import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home-client',
    loadChildren: () => import('./home-client/home-client.module').then( m => m.HomeClientPageModule)
  },
  {
    path: 'home-service-provider',
    loadChildren: () => import('./home-service-provider/home-service-provider.module').then( m => m.HomeServiceProviderPageModule)
  },
  {
    path: 'login-service-provider',
    loadChildren: () => import('./login-service-provider/login-service-provider.module').then( m => m.LoginServiceProviderPageModule)
  },
  {
    path: 'sign-upservice-provider',
    loadChildren: () => import('./sign-upservice-provider/sign-upservice-provider.module').then( m => m.SignUPServiceProviderPageModule)
  },
  {
    path: 'login-client',
    loadChildren: () => import('./login-client/login-client.module').then( m => m.LoginClientPageModule)
  },
  {
    path: 'sign-up-client',
    loadChildren: () => import('./sign-up-client/sign-up-client.module').then( m => m.SignUpClientPageModule)
  },
  {
    path: 'distinction-page',
    loadChildren: () => import('./distinction-page/distinction-page.module').then( m => m.DistinctionPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
