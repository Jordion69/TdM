import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './modules/pagenotfound/page/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: 'lista_conciertos',
    loadChildren: () => import('./modules/conciertos/conciertos.module')
    .then( m => m.ConciertosModule)
  },
  { path: 'formulario_contacto',
  loadChildren: () => import('./modules/contacto/contacto.module')
  .then( m => m.ContactoModule)
},
  { path: 'lista_noticias',
    loadChildren: () => import('./modules/noticias/noticias.module')
    .then( m => m.NoticiasModule)
  },
  { path: 'lista_garitos',
    loadChildren: () => import('./modules/garitos/garitos.module')
    .then( m => m.GaritosModule)
  },
  { path: 'home',
    loadChildren: () => import('./modules/home/home.module')
    .then( m => m.HomeModule)
  },
  { path: 'sobre-nosotros',
  loadChildren: () => import('./modules/sobre-nosotros/sobre-nosotros.module')
  .then( m => m.SobreNosotrosModule)
  },
  { path: 'noticias-detalle/:id',
  loadChildren: () => import('./modules/noticias-detalle/noticias-detalle.module')
  .then(m => m.NoticiasDetalleModule)
  },


  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]

})

export class AppRoutingModule { }
