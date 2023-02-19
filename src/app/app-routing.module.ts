import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const conciertosModule = () => import('./modules/conciertos/conciertos.module')
.then((m) => m.ConciertosModule);

const routes: Routes = [
  // {
  //   path: 'conciertos',
  //   redirectTo: 'conciertos',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '',
  //   children: [
  //     {path: 'conciertos', loadChildren: conciertosModule}

  //   ]
  // }
  { path: 'conciertos', loadChildren: () => import('./modules/conciertos/conciertos.module').then( m => m.ConciertosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
