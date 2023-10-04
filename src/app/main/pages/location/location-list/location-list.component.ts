import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '@services/location.service';
import { Location } from '@models/location.model'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent {
  locations: Location[] | undefined
  expanded = false
  id!: string

  constructor(
    private readonly _locationService: LocationService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
      this._locationService.getLocations(this.id).subscribe(data => {
        this.locations = data.results
      })
    })
  }
}
