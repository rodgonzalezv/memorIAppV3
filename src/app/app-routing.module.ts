import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  /*{
    path: 'product-delete/:id',
    loadChildren: () => import('./producto/product-delete/product-delete.module').then( m => m.ProductDeletePageModule)
  },*/
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./producto/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./usuarios/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'ver-usuarios/:id',
    loadChildren: () => import('./usuarios/ver-usuarios/ver-usuarios.module').then( m => m.VerUsuariosPageModule)
  },
  {
    path: 'crea-usuarios',
    loadChildren: () => import('./usuarios/crea-usuarios/crea-usuarios.module').then( m => m.CreaUsuariosPageModule)
  },
  {
    path: 'actualizar-usuario/:id',
    loadChildren: () => import('./usuarios/actualizar-usuario/actualizar-usuario.module').then( m => m.ActualizarUsuarioPageModule)
  },
  {
    path: 'crea-usuario',
    loadChildren: () => import('./usuarios/crea-usuario/crea-usuario.module').then( m => m.CreaUsuarioPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
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
    path: 'crea-memorial',
    loadChildren: () => import('./memoriales/crea-memorial/crea-memorial.module').then( m => m.CreaMemorialPageModule)
  },
  {
    path: 'ver-memorial/:idProducto',
    loadChildren: () => import('./memoriales/ver-memorial/ver-memorial.module').then( m => m.VerMemorialPageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
