import { Component, OnInit } from '@angular/core';
import { ShotgunService } from 'src/app/services/shotgun/shotgun.service';
import { Shotgun } from '../../../model/shotgun.model';

@Component({
  selector: 'app-shotguns',
  templateUrl: './shotguns.component.html',
  styleUrls: ['./shotguns.component.css']
})
export class ShotgunsComponent implements OnInit {
  public readonly displayedColumns: string[] = ['name', 'creationDate', 'shotgunDate', 'shotgunFamille', 'shotgunPlace', 'shotgunComments'];
  public dataSource: Array<Shotgun>;

  constructor(private shotgunService: ShotgunService) {
    this.shotgunService.shotgunsList.subscribe(
      (values: Array<Shotgun>) => {
        this.dataSource = values;
      }
    );
   }

  ngOnInit() {
    this.shotgunService.getShoguns();
  }
}
