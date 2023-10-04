import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EpisodeComponent } from './episode.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { CharacterModule } from '@pages/character/character.module';


@NgModule({
  declarations: [EpisodeComponent, EpisodeListComponent],
  imports: [EpisodeRoutingModule, SharedModule, CharacterModule],
})
export class EpisodeModule {}
