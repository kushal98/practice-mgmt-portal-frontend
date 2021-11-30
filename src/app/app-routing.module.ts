import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartingComponent } from './charting/charting.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { EditLabworksComponent } from './edit-labworks/edit-labworks.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { MedicationsComponent } from './medications/medications.component';
import { MessagesComponent } from './messages/messages.component';
import { NewLabworksComponent } from './new-labworks/new-labworks.component';
import { ProgressnotesComponent } from './progressnotes/progressnotes.component';
import { ViewLabworksComponent } from './view-labworks/view-labworks.component';

const routes: Routes = [
  { path: '', component: ChartingComponent},
  { path: 'chartings', component: ChartingComponent },
  { 
    path: 'labs', component: LabReportsComponent,
    children: [
      {path: '', component: ViewLabworksComponent},
      {path: 'view', component: ViewLabworksComponent},
      {path: 'new', component: NewLabworksComponent},
      {path: 'edit', component: EditLabworksComponent}
    ]
  },
  { path: 'medications', component: MedicationsComponent },
  { path: 'demographics', component: DemographicsComponent },
  { path: 'messages', component: MessagesComponent},
  { path: 'progressnotes', component: ProgressnotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
