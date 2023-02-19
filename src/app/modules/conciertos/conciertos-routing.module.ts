import { ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciertosRoutingModule { }
// export const conciertosRouter: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
