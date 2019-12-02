import { ResidencesService } from "../../../services/residences/residences.service";
import { Component, OnInit } from "@angular/core";
import { Residence } from "../../../model/residence.model";

@Component({
  selector: "app-list-residences",
  templateUrl: "./list-residences.component.html",
  styleUrls: ["./list-residences.component.css"]
})
export class ListResidencesComponent implements OnInit {
  public residencesShotguns: Array<Residence>;
  constructor(private residencesService: ResidencesService) {
    this.residencesService.residencesList.subscribe(
      (values: Array<Residence>) => {
        this.residencesShotguns = values;
      }
    );
  }

  ngOnInit() {
    this.residencesService.getResidencesShotguns();
  }
}
