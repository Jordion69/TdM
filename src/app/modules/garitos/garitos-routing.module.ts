import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ResetSearchGuard } from '../../guards/reset-search.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageComponent,
        canDeactivate: [ResetSearchGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaritosRoutingModule { }
