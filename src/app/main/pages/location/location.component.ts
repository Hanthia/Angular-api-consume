import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@models/character.model';
import { Location } from '@models/location.model';
import { CharacterService } from '@services/character.service';
import { LocationService } from '@services/location.service';
import { UtilService } from '@services/utils.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  characters: Character[] = []
  id!: string
  location!: Location

  constructor(
    private readonly _locationService: LocationService,
    private readonly _characterService: CharacterService,
    private readonly _utilService: UtilService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
      this._locationService.getLocationById(this.id).subscribe(data => {
        this.location = data
        for (const characterURL of this.location.residents) {
          this._characterService
            .getCharacterByURL(characterURL)
            .subscribe(itemCharacter => {
              this.characters.push(itemCharacter)
            })
        }
      })
    })
  }
}
