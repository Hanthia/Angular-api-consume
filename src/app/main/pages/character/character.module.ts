import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterListComponent } from './character-list/character-list.component';


@NgModule({
  declarations: [CharacterComponent, CharacterListComponent],
  imports: [CharacterRoutingModule, SharedModule],
  exports: [CharacterListComponent]
})
export class CharacterModule {}
