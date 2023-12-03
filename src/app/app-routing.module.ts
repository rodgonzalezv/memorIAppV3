import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { VerUsuariosPage } from './usuarios/ver-usuarios/ver-usuarios.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'lista-memoriales',
    loadChildren: () => import('./memoriales/lista-memoriales/lista-memoriales.module').then( m => m.ListaMemorialesPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./usuarios/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'ver-usuarios/:id',
    loadChildren: () => import('./usuarios/ver-usuarios/ver-usuarios.module').then(m => m.VerUsuariosPageModule),
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },




/*
  {
    path: '**',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
