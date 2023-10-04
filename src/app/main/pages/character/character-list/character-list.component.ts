import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Character } from '@models/character.model'
import { CharacterService } from '@services/character.service'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {
  @Input() characters?: Character[]
  id!: string
  constructor(
    private readonly _characterService: CharacterService,
    private readonly route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
     this.getCharacters();
    })
  }

  getCharacters(){
    this._characterService.getCharacters(this.id).subscribe(data => {
      this.characters = data.results
    })
  }

  getBadgeStatusColor(character: Character): string {
    switch (character.status) {
      case 'Alive':
        return 'badge-success'
      case 'Dead':
        return 'badge-error'
      default:
        return 'badge-warning'
    }
  }

  getLocation(url: string): string {

    return 'home/location/' + url.split('/').pop()
  }
}
