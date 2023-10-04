import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
const default_route = 'character';
const routes: Routes = [
  { path: '', redirectTo: 'character/page/1', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'character',
        loadChildren: () =>
          import('./pages/character/character.module').then(
            (m) => m.CharacterModule
          ),
      },
      {
        path: 'episode',
        loadChildren: () =>
          import('./pages/episode/episode.module').then(
            (m) => m.EpisodeModule
          ),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('./pages/location/location.module').then(
            (m) => m.LocationModule
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
