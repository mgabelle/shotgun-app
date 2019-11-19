import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core/core.module';
import { ShotgunsComponent } from './components/shotguns/shotguns.component';
import { ShotgunService } from './services/shotgun.service';

@NgModule({
  declarations: [
    AppComponent,
    ShotgunsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [ShotgunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
