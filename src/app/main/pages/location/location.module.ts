import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationListComponent } from './location-list/location-list.component';
import { SharedModule } from '../../shared/shared.module';
import { LocationComponent } from './location.component';
import { CharacterModule } from '@pages/character/character.module';


@NgModule({
  declarations: [
    LocationListComponent,
    LocationComponent
  ],
  imports: [
    LocationRoutingModule,
    CharacterModule,
    SharedModule
  ]
})
export class LocationModule { }
