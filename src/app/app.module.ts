import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module'
import { ShotgunsComponent } from './components/shotguns/list-shotguns/shotguns.component';
import { ShotgunService } from './services/shotgun/shotgun.service';
import { CreateShotgunComponent } from './components/shotguns/create-shotgun/create-shotgun.component';
import { CreateShotgunDialogComponent } from './components/shotguns/create-shotgun-dialog/create-shotgun-dialog.component';

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
  providers: [ShotgunService],
  bootstrap: [AppComponent],
  entryComponents: [CreateShotgunDialogComponent]
})
export class AppModule { }
