import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';
import { LocationListComponent } from './location-list/location-list.component';
const routes: Routes = [
  { path: 'page/:id', component: LocationListComponent },
  { path: ':id', component: LocationComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
