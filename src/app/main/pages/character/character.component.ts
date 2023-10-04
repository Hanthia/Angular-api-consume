import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@models/character.model';
import { CharacterService } from '@services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  characters?: Character[]
  id: string | undefined
  constructor( private readonly _characterService: CharacterService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
      this._characterService.getCharacters(this.id).subscribe(data => {
        this.characters = data.results
      })
    })
  }


}
