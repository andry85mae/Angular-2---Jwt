import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './guards/auth.guard';

/**
 *
 export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SimpleRouteComponent
  },
  {
    path: 'bundled',
    loadChildren: loadBundledModule
    // Comment loadChildren above and uncomment the line below to get non lazy loading working with AoT
    // Do not delete / comment the  `loadBundledModule` declaration or the module will be lazy loaded
    // loadChildren: './bundled/bundled.module#BundledModule'
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  }
];

 */
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
