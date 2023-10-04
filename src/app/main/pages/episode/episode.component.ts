import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@models/character.model';
import { Episode } from '@models/episode.model';
import { CharacterService } from '@services/character.service';
import { EpisodeService } from '@services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  characters: Character[] = []
  id!: string
  episode!: Episode

  constructor(
    private readonly _episodeService: EpisodeService,
    private readonly _characterService: CharacterService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
      this._episodeService.getEpisodeById(this.id).subscribe(data => {
        this.episode = data
        for (const characterURL of this.episode.characters) {
          this._characterService
            .getCharacterByURL(characterURL)
            .subscribe(characterItem => {
              this.characters.push(characterItem)
            })
        }
      })
    })
  }
}
