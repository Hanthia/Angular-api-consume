import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Episode } from '@models/episode.model'
import { EpisodeService } from '@services/episode.service'

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html'
})
export class EpisodeListComponent implements OnInit {
  episodes?: Episode[]
  id!: string

  constructor(
    private readonly _episodeService: EpisodeService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
      this._episodeService.getEpisodes(this.id).subscribe((data) => {
        this.episodes = data.results
      })
    })
  }
}
