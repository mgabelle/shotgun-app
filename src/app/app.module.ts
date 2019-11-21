import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { ShotgunsComponent } from "./components/shotguns/list-shotguns/shotguns.component";
import { ShotgunService } from "./services/shotgun/shotgun.service";
import { CreateShotgunComponent } from "./components/shotguns/create-shotgun/create-shotgun.component";
import { CreateShotgunDialogComponent } from "./components/shotguns/create-shotgun-dialog/create-shotgun-dialog.component";
import { SnackbarService } from "./services/shared/snackbar.service";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

registerLocaleData(localeFr, "fr");

@NgModule({
  declarations: [
    AppComponent,
    ShotgunsComponent,
    CreateShotgunComponent,
    CreateShotgunDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    ShotgunService,
    SnackbarService,
    { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateShotgunDialogComponent]
})
export class AppModule {}
