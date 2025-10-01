import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {ViewComponent} from "./view/view.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const car_routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'car/register', component: RegisterComponent},
  { path: 'car/index', component: IndexComponent},
  { path: 'car/:carId/view', component: ViewComponent },
  { path: 'car/create', component: CreateComponent },
  { path: 'car/:carId/edit', component: EditComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(car_routes),CommonModule],
  exports: [RouterModule]
})
export class CarModule { }
