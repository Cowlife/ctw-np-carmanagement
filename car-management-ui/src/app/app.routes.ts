import {RouterModule, Routes} from '@angular/router';

import { IndexComponent } from './car/index/index.component'
import { ViewComponent } from './car/view/view.component'
import { CreateComponent } from './car/create/create.component'
import { EditComponent } from './car/edit/edit.component'
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./car/car.module').then(m => m.CarModule),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule{}
