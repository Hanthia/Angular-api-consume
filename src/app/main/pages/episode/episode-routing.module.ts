import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeComponent } from './episode.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
const routes: Routes = [
  { path: 'page/:id', component: EpisodeListComponent },
  { path: ':id', component: EpisodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule {}
