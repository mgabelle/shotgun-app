import { ShotgunsComponent } from './components/shotguns/list-shotguns/shotguns.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateShotgunComponent } from './components/shotguns/create-shotgun/create-shotgun.component';


const routes: Routes = [
  {
    path: '', component: ShotgunsComponent,
  },
  {
    path: 'create', component: CreateShotgunComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
