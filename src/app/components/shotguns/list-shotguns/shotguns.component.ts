import { Component, OnInit, ViewChild } from "@angular/core";
import { ShotgunService } from "src/app/services/shotgun/shotgun.service";
import { Shotgun } from "../../../model/shotgun.model";
import { MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-shotguns",
  templateUrl: "./shotguns.component.html",
  styleUrls: ["./shotguns.component.css"]
})
export class ShotgunsComponent implements OnInit {
  public readonly displayedColumns: string[] = [
    "name",
    "creationDate",
    "shotgunDate",
    "shotgunFamille",
    "shotgunPlace",
    "shotgunComments"
  ];
  public dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private shotgunService: ShotgunService) {
    this.shotgunService.shotgunsList.subscribe((values: Array<Shotgun>) => {
      this.dataSource = new MatTableDataSource(values);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
    this.shotgunService.getShoguns();
    this.dataSource.sort = this.sort;
  }
}
