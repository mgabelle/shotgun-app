import { Component, OnInit } from '@angular/core';
import { FamilleService } from '../../../services/famille/famille.service';
import { Famille } from '../../../model/famille.model';
import { PartieCommunesService } from '../../../services/partie-communes/partie-communes.service';
import { PartieCommune } from '../../../model/partie-commune.model';

@Component({
  selector: 'app-create-shotgun-dialog',
  templateUrl: './create-shotgun-dialog.component.html',
  styleUrls: ['./create-shotgun-dialog.component.css']
})
export class CreateShotgunDialogComponent implements OnInit {
  public famillesList: Array<Famille> = [];
  public partiesCommunesList: Array<PartieCommune> = [];

  constructor (private familleService: FamilleService,
    private partiesCommunesService: PartieCommunesService) {
    this.familleService.famillesList.subscribe(
      (values: Array<Famille>) => {
        this.famillesList = values;
      }
    );

    this.partiesCommunesService.partiesCommunes.subscribe(
      (values: Array<PartieCommune>) => {
        this.partiesCommunesList = values;
      }
    )
  }

  ngOnInit() {
    this.familleService.getFamilles();
    this.partiesCommunesService.getPartiesCommunes();
  }
}
